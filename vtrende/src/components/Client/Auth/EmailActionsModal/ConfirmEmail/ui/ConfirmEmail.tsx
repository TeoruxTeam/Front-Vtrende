import InputWithLabel from "@/src/shared/ui/InputWithLabel/ui/InputWithLabel";
import { EmailActionsModal } from "../../ui/EmailActionsModal";
import { useConfirmEmail } from "../modal/useConfirmEmail";

export const ConfirmEmail = ({ closeModal }: { closeModal: () => void }) => {
  const { handleSubmit, register, onSubmit, loading, repeatSendToken } = useConfirmEmail({
    closeModal,
  });

  return (
    <EmailActionsModal
      title="Подтвердите почту"
      description="Введите код, который мы отправили Вам на почту"
      footerText="Не получили код?"
      footerButtonText="Отправить повторно"
      footerButtonTextFn={() =>repeatSendToken.mutate()}
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
