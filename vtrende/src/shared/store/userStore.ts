import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUserInfo } from "../types/dataTypes";

interface IUserStore {
  data: Omit<IUserInfo["data"], "created_at">;
  setUserInfo: (userInfo: IUserStore["data"]) => void;
}

const useUserStore = create<IUserStore>()(
  persist((set) => ({
    data: {
      email: "",
      id: null,
      two_factor_enabled: null,
      two_factor_secret: null,
      username: "",
    },
    setUserInfo: (userData) =>
      set({
        data: {
          email: userData.email,
          id: userData.id,
          two_factor_enabled: userData.two_factor_enabled,
          two_factor_secret: userData.two_factor_secret,
          username: userData.username,
        },
      }),
  }), {
    name: "user-store"
  })
);

export default useUserStore;
