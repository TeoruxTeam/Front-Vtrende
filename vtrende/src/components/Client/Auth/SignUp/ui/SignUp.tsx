import { Button, IButtonTheme } from "@/src/shared/ui/Button/Button";
import InputWithLabel from "@/src/shared/ui/InputWithLabel/ui/InputWithLabel";
import { useForm } from "react-hook-form";
import { AuthModalInfo } from "../../AuthModalInfo/ui/AuthModalInfo";
import styles from "./SignUp.module.scss";

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<SignUpFormData>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log("Form submitted:", data);
  };

  const password = watch("password");

  console.log(password);

  return (
    <AuthModalInfo
      actionText="Войти"
      text="Уже зарегестрированы?"
      title="Регистрация"
      actionTextFn={() => console.log(1)}
    >
      <form className={styles.signUp} onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel
          label="Ваша почта"
          placeholder="Введите почту"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
          error={errors?.email?.message}
        />

        <InputWithLabel
          label="Придумайте пароль"
          placeholder="Ваш пароль"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors?.password?.message}
        />

        <InputWithLabel
          label="Повторите пароль"
          placeholder="Ваш пароль"
          type="password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
          error={errors?.confirmPassword?.message}
        />

        <Button
          type="submit"
          theme={IButtonTheme.BLUE}
          disabled={!isValid}
          className={styles.submitButton}
        >
          Зарегистрироваться
        </Button>
      </form>
    </AuthModalInfo>
  );
};
