import { Button, IButtonTheme } from "@/src/shared/ui/Button/Button";
import InputWithLabel from "@/src/shared/ui/InputWithLabel/ui/InputWithLabel";
import { AuthModalInfo } from "../../AuthModalInfo/ui/AuthModalInfo";
import { authValidate } from "../../validate/authValidate";
import { useSignIn } from "../modal/useSignIn";
import styles from "./SignIn.module.scss";

export const SignIn = ({
  textActionFn,
  handleClose,
}: {
  textActionFn: () => void;
  handleClose: () => void;
}) => {
  const { handleSubmit, register, onSubmit, errors, isValid } = useSignIn({handleClose});

  return (
    <AuthModalInfo
      actionText="Зарегестрироваться"
      text="Еще нет аккаунта?"
      title="Войти"
      actionTextFn={textActionFn}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formStyles}>
        <InputWithLabel
          label="Ваша почта"
          placeholder="Введите почту"
          {...register("email", authValidate.email)}
          error={errors?.email?.message}
        />
        <InputWithLabel
          label="Ваш пароль"
          placeholder="Введите пароль"
          type="password"
          {...register("password", authValidate.password)}
          error={errors?.password?.message}
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
