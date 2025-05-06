import { IAuthResponseData } from "@/src/components/Client/Auth/AuthModal/validate/authValidate";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import api from "../api/api";
import { CookiesInfo } from "../types/cookiesInfo";
import { setAuthTokens } from "./setAuthTokens";

export const useSetRefreshToken = () => {
  const refreshToken = getCookie(CookiesInfo.REFRESH_TOKEN);

  const setRefreshToken = useMutation({
    mutationKey: ["set_refresh_token"],
    mutationFn: async () => {
      const response = await api.post(
        "https://api.vtrende.kz/auth/refresh-token/",
        {
          refresh_token: refreshToken,
        }
      );

      return response.data;
    },
    onSuccess: (data: IAuthResponseData) => {
      console.log(data.data.access_token)
      setAuthTokens({
        accessExpiration: data.data.access_expiration,
        accessToken: data.data.access_token,
        refreshExpiration: data.data.refresh_expiration,
        refreshToken: data.data.refresh_token,
      });
    },
  });

  return {
    setRefreshToken,
  };
};
