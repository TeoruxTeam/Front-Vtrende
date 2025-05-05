import InputWithLabel from "@/src/shared/ui/InputWithLabel/ui/InputWithLabel";
import { EmailActionsModal } from "../../ui/EmailActionsModal";
import { useRecoveryEmail } from "../modal/useRecoveryEmail";

export const RecoveryEmail = ({
  onFooterButtonClick,
}: {
  onFooterButtonClick: () => void;
}) => {
  const { handleSubmit, onSubmit, register, loading } = useRecoveryEmail();

  return (
    <EmailActionsModal
      description="Для восстановления пароля необходим сброс"
      title="Восстановление пароля"
      submitButtonText="Восстановить пароль"
      footerText="Помните пароль?"
      footerButtonText="Вернуться ко входу"
      footerButtonTextFn={onFooterButtonClick}
      onSubmit={handleSubmit(onSubmit)}
      disabledButton={loading}
    >
      <InputWithLabel
        label="Введите почту, которую указывали при регистрации"
        placeholder="Ваша почта"
        {...register("email", {
          required: "Почта обязательна",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Неправильный формат почты",
          },
        })}
      />
    </EmailActionsModal>
  );
};
