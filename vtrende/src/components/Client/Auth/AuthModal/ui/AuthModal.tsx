import { Modal } from "@/src/shared/ui/Modal/Modal";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SignIn } from "../../AuthModalInfo/SignIn/ui/SignIn";
import { SignUp } from "../../AuthModalInfo/SignUp/ui/SignUp";
import { ConfirmEmail } from "../../EmailActionsModal/ConfirmEmail/ui/ConfirmEmail";
import { RecoveryEmail } from "../../EmailActionsModal/RecoveryEmail/ui/RecoveryEmail";
import { RecoveryPassword } from "../../EmailActionsModal/RecoveryPassword/ui/RecoveryPassword";

export type IAuthClientModalType =
  | "sign in"
  | "sign up"
  | "confirm email"
  | "password recovery email"
  | "password recovery passwords";

interface IAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModalType?: IAuthClientModalType;
  isNotVerified: boolean;
  setIsNotVerified: Dispatch<SetStateAction<boolean>>;
}

export const AuthModal: FC<IAuthModalProps> = ({
  isOpen,
  onClose,
  initialModalType = "sign up",
  isNotVerified,
  setIsNotVerified,
}) => {
  const [currentModalType, setCurrentModalType] =
    useState<IAuthClientModalType | null>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentModalType(initialModalType!);
    }
  }, [isOpen, initialModalType]);

  const openModalFn = (type: IAuthClientModalType) => {
    setCurrentModalType(type);
  };

  const handleClose = () => {
    if (isNotVerified && currentModalType === "confirm email") {
      toast.error("Необходимо подтвердить email перед закрытием!");
      return;
    }
    onClose();
    setCurrentModalType(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("reset_code");
    window.history.replaceState({}, document.title, url.toString());
  };

  const renderModalContent = () => {
    if (!currentModalType) return null;

    switch (currentModalType) {
      case "sign in":
        return (
          <SignIn
            textActionFn={() => openModalFn("sign up")}
            handleClose={handleClose}
            openModalFn={openModalFn}
            setIsNotVerified={setIsNotVerified}
          />
        );
      case "sign up":
        return <SignUp actionTextFn={openModalFn} handleClose={handleClose} />;
      case "confirm email":
        return <ConfirmEmail />;
      case "password recovery email":
        return (
          <RecoveryEmail onFooterButtonClick={() => openModalFn("sign in")} />
        );
      case "password recovery passwords":
        return (
          <RecoveryPassword
            onFooterButtonClick={handleClose}
            handleClose={handleClose}
          />
        );
      default:
        return <div>Unknown modal type</div>;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      disableClose={isNotVerified && currentModalType === "confirm email"}
    >
      {renderModalContent()}
    </Modal>
  );
};
