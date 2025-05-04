import { deleteCookie } from "cookies-next";
import { CookiesInfo } from "../types/cookiesInfo";

export const removeTokens = () => {
  localStorage.removeItem("user-store");
  deleteCookie(CookiesInfo.ACCESS_TOKEN);
  deleteCookie(CookiesInfo.REFRESH_TOKEN);
};