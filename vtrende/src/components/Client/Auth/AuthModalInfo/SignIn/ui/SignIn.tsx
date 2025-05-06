import { Button, IButtonTheme } from "@/src/shared/ui/Button/Button";
import InputWithLabel from "@/src/shared/ui/InputWithLabel/ui/InputWithLabel";
import { Dispatch, SetStateAction } from "react";
import { IAuthClientModalType } from "../../../AuthModal/ui/AuthModal";
import { authValidate } from "../../../AuthModal/validate/authValidate";
import { AuthModalInfo } from "../../ui/AuthModalInfo";
import { useSignIn } from "../modal/useSignIn";
import styles from "./SignIn.module.scss";

export const SignIn = ({
  textActionFn,
  handleClose,
  openModalFn,
  setIsNotVerified,
}: {
  textActionFn: () => void;
  handleClose: () => void;
  openModalFn: (type: IAuthClientModalType) => void;
  setIsNotVerified: Dispatch<SetStateAction<boolean>>;
}) => {
  const { handleSubmit, register, onSubmit, errors, isValid } = useSignIn({
    handleClose,
    openAnotherModal: () => openModalFn("confirm email"),
    setIsNotVerified
  });

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
        <button
          className={styles.forgotPassword}
          type="button"
          onClick={() => openModalFn("password recovery email")}
        >
          Забыли пароль?
        </button>

        <Button
          type="submit"
          theme={IButtonTheme.BLUE}
          disabled={!isValid}
          className={styles.submitButton}
        >
          Войти
        </Button>
      </form>
    </AuthModalInfo>
  );
};
