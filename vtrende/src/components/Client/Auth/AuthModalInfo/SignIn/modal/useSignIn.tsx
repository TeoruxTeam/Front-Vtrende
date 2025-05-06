import api from "@/src/shared/api/api";
import { setAuthTokens } from "@/src/shared/hooks/setAuthTokens";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  IAuthResponseData,
  ISignIn,
} from "../../../AuthModal/validate/authValidate";

export const useSignIn = ({
  handleClose,
  openAnotherModal,
  setIsNotVerified,
}: {
  handleClose: () => void;
  openAnotherModal: () => void;
  setIsNotVerified: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = useMutation({
    mutationKey: ["sign_in"],
    mutationFn: async (data: ISignIn) => {
      const bodyRequest = {
        email: data.email,
        password: data.password,
      } as ISignIn;
      const response = await api.post("/auth/sign-in/", bodyRequest);
      return response.data;
    },
    onSuccess: (data: IAuthResponseData) => {
      const decodedToken: { verified?: boolean } = jwtDecode(
        data.data.access_token
      );
      setAuthTokens({
        accessExpiration: data.data.access_expiration,
        accessToken: data.data.access_token,
        refreshExpiration: data.data.refresh_expiration,
        refreshToken: data.data.refresh_token,
      });
      toast.success("Успешно!");
      if (decodedToken.verified === false) {
        openAnotherModal();
        setIsNotVerified(true)
      } else {
        handleClose();
      }
    },
    onError: () => {
      toast.error("Что-то пошло не так");
    },
  });

  const onSubmit = (data: ISignIn) => {
    signIn.mutate({ email: data.email, password: data.password });
  };

  return {
    register,
    handleSubmit,
    signIn,
    errors,
    isValid,
    onSubmit,
  };
};
