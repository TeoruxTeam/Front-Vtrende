import api from "@/src/shared/api/api";
import { removeTokens } from "@/src/shared/hooks/removeTokens";
import { defaultToastStyles } from "@/src/shared/model/defaultStyles/defaultStyles";
import { Routes } from "@/src/shared/routes/routes";
import { CookiesInfo } from "@/src/shared/types/cookiesInfo";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import MainIcon from "./icons/mainIcon";

export const useData = () => {
  const navigate = useRouter();

  const logOut = useMutation({
    mutationKey: ["logOut"],
    mutationFn: async () => {
      const token = getCookie(CookiesInfo.REFRESH_TOKEN);
      const response = await api.post("/auth/sign-out/", {
        refresh_token: token,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Вы успешно вышли из аккаунта", {
        style: defaultToastStyles,
      });
      removeTokens();
      navigate.push(Routes.AUTH);
    },

    onError: () => {
      toast.error("Что-то пошло не так, вы не смогли выйти из аккаунта", {
        style: defaultToastStyles,
      });
    },
  });

  const navbarItems = [
    {
      title: "Главная",
      route: Routes.MAIN,
      icon: MainIcon,
      is_route: true,
    },
    {
      title: "Создать задачу",
      route: Routes.CREATE_TASK,
      icon: MainIcon,
      is_route: true,
    },
    {
      title: "Добавление аккаунтов",
      route: Routes.ADDED_ACCOUNT,
      icon: MainIcon,
      is_route: true,
    },
    {
      title: "Настройки",
      route: Routes.THO_FACTOR_AUTHENTICATION,
      icon: MainIcon,
      is_route: true,
    },
    {
      title: "Добавить прокси",
      route: Routes.ADD_PROXY,
      icon: MainIcon,
      is_route: true,
    },
    {
      title: "Задачи",
      route: Routes.TASKS,
      icon: MainIcon,
      is_route: true,
    },

    {
      title: "Информация",
      route: Routes.INFORMATION,
      icon: MainIcon,
      is_route: true,
    },
    {
      title: "Проверка аккаунтов",
      route: Routes.VERIFY_ACCOUNTS,
      icon: MainIcon,
      is_route: true,
    },
    {
      title: "Выйти",
      onClick: () => {
        logOut.mutate();
      },
      icon: MainIcon,
      is_route: false,
    },
  ];

  return {
    navbarItems,
    logOut,
  };
};
