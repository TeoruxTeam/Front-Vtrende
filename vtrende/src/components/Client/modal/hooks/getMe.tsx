import api from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "../types/userTypes";

export const useGetMe = () => {
  return useQuery({
    queryKey: ["me_info"],
    queryFn: async () => {
      const response = await api.get<{ data: IUser }>("/profile/me/");
      return response.data;
    },
    enabled: false,
  });
};
