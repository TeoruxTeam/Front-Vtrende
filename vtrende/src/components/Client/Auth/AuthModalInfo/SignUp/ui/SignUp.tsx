import { Button, IButtonTheme } from "@/src/shared/ui/Button/Button";
import InputWithLabel from "@/src/shared/ui/InputWithLabel/ui/InputWithLabel";
import { IAuthClientModalType } from "../../../AuthModal/ui/AuthModal";
import { authValidate } from "../../../AuthModal/validate/authValidate";
import { AuthModalInfo } from "../../ui/AuthModalInfo";
import { useSignUp } from "../modal/useSignUp";
import styles from "./SignUp.module.scss";

export const SignUp = ({
  actionTextFn,
  handleClose,
}: {
  actionTextFn: (type: IAuthClientModalType) => void;
  handleClose: () => void;
}) => {
  const {
    errors,
    handleSubmit,
    isValid,
    onSubmit,
    passwordStrength,
    register,
    password,
  } = useSignUp({ handleClose, openConfirmationModal: actionTextFn });

  return (
    <AuthModalInfo
      actionText="Войти"
      text="Уже зарегестрированы?"
      title="Регистрация"
      actionTextFn={() => actionTextFn("sign in")}
    >
      <form className={styles.signUp} onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel
          label="Ваша почта"
          placeholder="Введите почту"
          {...register("email", authValidate.email)}
          error={errors?.email?.message}
        />

        <InputWithLabel
          label="Придумайте пароль"
          placeholder="Ваш пароль"
          type="password"
          {...register("password", authValidate.password)}
          error={errors?.password?.message}
        />

        <InputWithLabel
          label="Повторите пароль"
          placeholder="Ваш пароль"
          type="password"
          {...register("confirmPassword", {
            required: "Подтверждение пароля обязательно",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
          error={errors?.confirmPassword?.message}
        />

        <div className={styles.passwordStrength}>
          <div className={styles.headerPasswordStrengthHeight}>
            <span className={styles.label}>Защита пароля:</span>
            <span
              className={styles.strength}
              style={{ color: passwordStrength.color }}
            >
              {passwordStrength.strength}
            </span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                width: passwordStrength.width,
                backgroundColor: passwordStrength.color,
              }}
            />
          </div>
        </div>

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
