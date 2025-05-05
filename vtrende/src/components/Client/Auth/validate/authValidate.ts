import { RegisterOptions } from "react-hook-form";

export interface ISignUp {
  email: string;
  password: string;
  is_shop?: boolean;
  confirmPassword?: string;
  iin_bin?: string | null;
}

export interface ISignIn {
  email: ISignUp["email"];
  password: ISignUp["password"];
}

interface IAuthCommonFields {
  email: string;
  password: string;
}

// Валидация для общих полей
export const authValidate: {
  [K in keyof IAuthCommonFields]: RegisterOptions<IAuthCommonFields, K>;
} = {
  email: {
    required: "Почта обязательна",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Неправильный формат почты",
    },
  },
  password: {
    required: "Пароль обязателен",
    minLength: {
      value: 8,
      message: "Минимум 8 символов",
    },
  },
};

export const signUpValidate: Partial<{
  [K in keyof ISignUp]: RegisterOptions<ISignUp, K>;
}> = {
  confirmPassword: {
    required: "Подтверждение пароля обязательно",
    validate: (value, formValues) =>
      value === formValues.password || "Пароли не совпадают",
  },
  is_shop: {},
  iin_bin: {},
};

export interface IAuthResponseData {
  status: string;
  message: string;
  data: {
    access_expiration: string;
    refresh_expiration: string;
    access_token: string;
    refresh_token: string;
  };
}