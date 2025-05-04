import { setCookie } from "cookies-next";
import { CookiesInfo } from "../types/cookiesInfo";
import { authTypeReturn } from "../types/dataTypes";

interface ISetAuthTokens {
  accessToken: authTypeReturn["data"]["access_token"];
  refreshToken: authTypeReturn["data"]["refresh_token"];
  accessExpiration: authTypeReturn["data"]["access_expiration"];
  refreshExpiration: authTypeReturn["data"]["refresh_expiration"];
}

export const setAuthTokens = ({
  accessToken,
  refreshToken,
  accessExpiration,
  refreshExpiration,
}: ISetAuthTokens) => {
  const access_expiration = new Date(accessExpiration);
  const refresh_expiration = new Date(refreshExpiration);

  setCookie(CookiesInfo.ACCESS_TOKEN, accessToken, {
    expires: access_expiration,
  });
  setCookie(CookiesInfo.REFRESH_TOKEN, refreshToken, {
    expires: refresh_expiration,
  });
};