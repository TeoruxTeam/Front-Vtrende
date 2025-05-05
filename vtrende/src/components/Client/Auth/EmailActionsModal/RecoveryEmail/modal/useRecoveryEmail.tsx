import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ISignUp } from "../../../AuthModal/validate/authValidate";

const useSendRecoveryEmail = () => {
  const sendRecoveryEmail = useMutation({
    mutationKey: ["send_recovery_email"],
    mutationFn: async ({ email }: { email: string }) => {
      const response = await api.post("/accounts/send-recovery-code/", {
        email,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Успешно! Письмо отправлено");
    },
    onError: () => {
      toast.error("Что-то пошло не так");
    },
  });

  return {
    sendRecoveryEmail,
  };
};

export const useRecoveryEmail = () => {
  const { sendRecoveryEmail } = useSendRecoveryEmail();
  const { register, handleSubmit } = useForm<{
    email: ISignUp["email"];
  }>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: { email: string }) => {
    sendRecoveryEmail.mutate({ email: data.email });
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    loading: sendRecoveryEmail.isPending,
  };
};
