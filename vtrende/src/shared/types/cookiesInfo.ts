import { AxiosError } from "axios";

export enum CookiesInfo {
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
  IS_VERIFIED = "is_verified",
  TEMP_TOKEN = "temp_token",
}

export interface ErrorResponse {
  error: string;
}

export type IError = AxiosError<ErrorResponse>;
