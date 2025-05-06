import InputWithLabel from "@/src/shared/ui/InputWithLabel/ui/InputWithLabel";
import { EmailActionsModal } from "../../ui/EmailActionsModal";
import { useConfirmEmail } from "../modal/useConfirmEmail";

export const ConfirmEmail = () => {
  const { handleSubmit, register, onSubmit, loading } = useConfirmEmail();

  return (
    <EmailActionsModal
      title="Подтвердите почту"
      description="Введите код, который мы отправили Вам на почту"
      footerText="Не получили код?"
      footerButtonText="Отправить повторно"
      footerButtonTextFn={() => console.log(1)}
      submitButtonText="Подтвердить"
      onSubmit={handleSubmit(onSubmit)}
      disabledButton={loading}
    >
      <InputWithLabel
        label="Код"
        {...register("code")}
        placeholder="Введите код"
      />
    </EmailActionsModal>
  );
};
