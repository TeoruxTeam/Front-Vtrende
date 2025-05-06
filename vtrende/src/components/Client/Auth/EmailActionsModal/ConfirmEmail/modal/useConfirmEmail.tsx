/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useGetMe } from "@/src/entities/Client/modal/hooks/getMe";
import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useSendVerifyCode = ({ closeModal }: { closeModal: () => void }) => {
  const { refetch } = useGetMe();

  const sendVerifyCode = useMutation({
    mutationKey: ["send_verify_code"],
    mutationFn: async ({ code }: { code: string }) => {
      const response = await api.post("/accounts/verify/", {
        token: code,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Почта подтверждена");
      closeModal();
      refetch();
    },
    onError: () => {
      toast.error("Что-то пошло не так");
    },
  });

  return {
    sendVerifyCode,
  };
};

const useSendVerifyToken = () => {
  const sendVerifyToken = useMutation({
    mutationKey: ["send_verify_code"],
    mutationFn: async () => {
      const response = await api.post("/accounts/send-verification-token/");
      return response.data;
    },
    onSuccess: () => {
      toast.success("Код отправлен на вашу почту");
    },
    onError: () => {
      toast.error("Что-то пошло не так");
    },
  });

  return {
    sendVerifyToken,
  };
};

export const useConfirmEmail = ({ closeModal }: { closeModal: () => void }) => {
  const { sendVerifyCode } = useSendVerifyCode({ closeModal });
  const { sendVerifyToken } = useSendVerifyToken();

  const { register, handleSubmit } = useForm<{ code: string }>({
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: { code: string }) => {
    sendVerifyCode.mutate({ code: data.code });
  };

  useEffect(() => {
    sendVerifyToken.mutate();
  }, []);

  return {
    register,
    handleSubmit,
    onSubmit,
    loading: sendVerifyCode.isPending,
    repeatSendToken: sendVerifyToken,
  };
};
