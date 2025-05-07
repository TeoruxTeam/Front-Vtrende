"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/src/shared/api/api";
import { useUserStore } from "@/src/shared/store/userStore";
import { CookiesInfo } from "@/src/shared/types/cookiesInfo";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { IUser } from "../types/userTypes";

export const useGetMe = () => {
  const token = getCookie(CookiesInfo.ACCESS_TOKEN);
  const setUserData = useUserStore((state) => state.setUserData);

  return useQuery({
    queryKey: ["me_info"],
    queryFn: async () => {
      try {
        const response = await api.get<{ data: IUser }>("/profile/me/");
        setUserData(response.data.data)
        return { data: response.data.data, notVerified: false };
      } catch (error: any) {
        if (error?.response?.data?.error === "error.auth.user.not_verified") {
          return { data: null, notVerified: true };
        }
        throw error;
      }
    },
    retry: 1,
    enabled: !!token,
  });
};
