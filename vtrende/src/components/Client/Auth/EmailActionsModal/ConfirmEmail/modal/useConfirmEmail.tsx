"use client";
import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useSendVerifyCode = () => {
  const sendVerifyCode = useMutation({
    mutationKey: ["send_verify_code"],
    mutationFn: async ({ code }: { code: string }) => {
      const response = await api.post("/accounts/verify/", {
        token: code,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Почта подтвержена");
    },
    onError: () => {
      toast.error("Что-то пошло не так");
    },
  });

  return {
    sendVerifyCode,
  };
};

export const useConfirmEmail = () => {
  const { sendVerifyCode } = useSendVerifyCode();

  const { register, handleSubmit } = useForm<{ code: string }>({
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: { code: string }) => {
    sendVerifyCode.mutate({ code: data.code });
  };

  return {
    register,
    handleSubmit,
    onSubmit
  };
};
