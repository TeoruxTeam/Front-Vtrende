import api from "@/src/shared/api/api";
import { setAuthTokens } from "@/src/shared/hooks/setAuthTokens";
import { IError } from "@/src/shared/types/cookiesInfo";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetMe } from "../../../modal/hooks/getMe";
import { IAuthResponseData, ISignUp } from "../../validate/authValidate";

export const useSignUp = ({ handleClose }: { handleClose: () => void }) => {
  const { refetch: refetchUserInfo } = useGetMe();

  const signUp = useMutation({
    mutationKey: ["sign_up"],
    mutationFn: async (data: ISignUp) => {
      const requestBody = {
        email: data.email,
        password: data.password,
        iin_bin: data.iin_bin,
        is_shop: data.is_shop,
      } as ISignUp;

      const response = await api.post("/auth/sign-up/", requestBody);
      return response.data;
    },

    onSuccess: (data: IAuthResponseData) => {
      setAuthTokens({
        accessExpiration: data.data.access_expiration,
        accessToken: data.data.access_token,
        refreshExpiration: data.data.refresh_expiration,
        refreshToken: data.data.refresh_token,
      });
      toast.success("Успешно!");
      handleClose();
      refetchUserInfo();
    },
    onError: (error: IError) => {
      if (error?.response?.data.error === "error.auth.user.exists") {
        toast.error("Такой пользователь уже есть");
      } else {
        toast.error("Что-то пошло не так");
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ISignUp>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const getPasswordStrength = (password: string) => {
    if (password.length === 0)
      return { strength: "", width: "0%", color: "#ccc" };
    if (password.length < 4)
      return { strength: "Слабый", width: "20%", color: "#dc3545" };
    if (password.length < 8)
      return { strength: "Средний", width: "40%", color: "#ffc107" };
    return { strength: "Хороший", width: "100%", color: "#28a745" };
  };

  const onSubmit = (data: ISignUp) => {
    const dataBody: ISignUp = {
      email: data.email,
      password: data.password,
      iin_bin: null,
      is_shop: false,
    };

    signUp.mutate(dataBody);
  };

  const password = watch("password");

  const passwordStrength = getPasswordStrength(password);

  return {
    signUp,
    onSubmit,
    passwordStrength,
    register,
    handleSubmit,
    errors,
    isValid,
    password,
  };
};
