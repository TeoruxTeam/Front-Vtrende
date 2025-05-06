import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { removeTokens } from "../hooks/removeTokens";
import { CookiesInfo } from "../types/cookiesInfo";
import { authTypeReturn } from "../types/dataTypes";

export const API_BASE_URL = "https://api.vtrende.kz/";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getCookie(CookiesInfo.ACCESS_TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  () => console.log("Ошибка при отправке запроса")
);

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       const accessToken = getCookie(CookiesInfo.ACCESS_TOKEN);
//       const refreshToken = getCookie(CookiesInfo.REFRESH_TOKEN);

//       if (accessToken && refreshToken) {
//         removeTokens();
//       }
//     }

//     return Promise.reject(error);
//   }
// );

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getCookie(CookiesInfo.REFRESH_TOKEN);

      if (!refreshToken) {
        removeTokens();
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post<authTypeReturn>(
          `https://api.vtrende.kz/auth/refresh-token/`,
          {
            refresh_token: refreshToken,
          }
        );

        setCookie(CookiesInfo.ACCESS_TOKEN, data.data.access_token, {
          expires: new Date(data.data.access_expiration),
        });

        setCookie(CookiesInfo.REFRESH_TOKEN, data.data.refresh_token, {
          expires: new Date(data.data.refresh_expiration),
        });

        originalRequest.headers.Authorization = `Bearer ${data.data.access_token}`;

        return axios(originalRequest);
      } catch (refreshError) {
        removeTokens();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// api.interceptors.request.use(
//   (config) => {
//     const refreshToken = getCookie(CookiesInfo.REFRESH_TOKEN);
//     const accessToken = getCookie(CookiesInfo.ACCESS_TOKEN);
//     if (!refreshToken && accessToken) {
//       removeTokens();
//       window.location.href = Routes.AUTH;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default api;
