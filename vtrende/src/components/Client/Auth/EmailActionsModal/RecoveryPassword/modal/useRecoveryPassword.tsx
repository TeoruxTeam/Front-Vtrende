import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useSendRecoveryPassword = () => {
  const sendRecoveryPassword = useMutation({
    mutationKey: ["send_recovery_password"],
    mutationFn: async ({
      token,
      new_password,
    }: {
      token: string;
      new_password: string;
    }) => {
      const response = await api.post("/accounts/reset-password/", {
        token,
        new_password,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Успешно! Пароль изменен");
    },
    onError: () => {
      toast.error("Что-то пошло не так");
    },
  });

  return {
    sendRecoveryPassword,
  };
};

export const useRecoveryPassword = () => {
  const { sendRecoveryPassword } = useSendRecoveryPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    password: string;
    repeatPassword: string;
  }>({
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: { password: string }) => {
    sendRecoveryPassword.mutate({ token: "", new_password: data.password });
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
