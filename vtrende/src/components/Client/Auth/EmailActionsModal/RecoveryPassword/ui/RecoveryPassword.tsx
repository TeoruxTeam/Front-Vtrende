import InputWithLabel from "@/src/shared/ui/InputWithLabel/ui/InputWithLabel";
import { EmailActionsModal } from "../../ui/EmailActionsModal";
import styles from "../../ui/EmailActionsModal.module.scss";
import { useRecoveryPassword } from "../modal/useRecoveryPassword";

export const RecoveryPassword = ({
  onFooterButtonClick,
}: {
  onFooterButtonClick: () => void;
}) => {
  const { handleSubmit, onSubmit, register, errors } = useRecoveryPassword();

  return (
    <EmailActionsModal
      title="Восстановление пароля"
      description="Введите новый пароль"
      submitButtonText="Восстановить пароль"
      footerButtonText="Вернуться ко входу"
      footerButtonTextFn={onFooterButtonClick}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.inputBlock}>
        <InputWithLabel
          label="Введите новый пароль"
          {...register("password", {
            required: "Введите новый пароль",
            minLength: {
              value: 8,
              message: "Минимум 8 символов",
            },
          })}
          placeholder="Ваш новый пароль"
        />
        {errors?.password && (
          <p className={styles.error}>{errors?.password.message}</p>
        )}
      </div>
      <div className={styles.inputBlock}>
        <InputWithLabel
          label="Повторите пароль"
          {...register("repeatPassword", {
            required: "Подтверждение пароля обязательно",
            validate: (value, formValues) =>
              value === formValues.password || "Пароли не совпадают",
          })}
          placeholder="Ваш новый пароль"
        />
        {errors?.repeatPassword && (
          <p className={styles.error}>{errors?.repeatPassword.message}</p>
        )}
      </div>
    </EmailActionsModal>
  );
};
