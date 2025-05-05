import { Modal } from "@/src/shared/ui/Modal/Modal";
import { FC, useEffect, useState } from "react";
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
}

export const AuthModal: FC<IAuthModalProps> = ({ isOpen, onClose }) => {
  const [currentModalType, setCurrentModalType] =
    useState<IAuthClientModalType | null>("password recovery email");

  const openModalFn = (type: IAuthClientModalType) => {
    setCurrentModalType(type);
  };

  const handleClose = () => {
    onClose();
    setCurrentModalType(null);
  };

  useEffect(() => {
    if (isOpen && !currentModalType) {
      setCurrentModalType("password recovery email");
    }
  }, [isOpen, currentModalType]);

  const renderModalContent = () => {
    if (!currentModalType) return null;

    switch (currentModalType) {
      case "sign in":
        return (
          <SignIn
            textActionFn={() => openModalFn("sign up")}
            handleClose={handleClose}
          />
        );
      case "sign up":
        return (
          <SignUp
            actionTextFn={() => openModalFn("sign in")}
            handleClose={handleClose}
          />
        );
      case "confirm email":
        return <ConfirmEmail />;
      case "password recovery email":
        return (
          <RecoveryEmail onFooterButtonClick={() => openModalFn("sign in")} />
        );
      case "password recovery passwords":
        return (
          <RecoveryPassword
            onFooterButtonClick={() => openModalFn("sign in")}
          />
        );
      default:
        return <div>Unknown modal type</div>;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {renderModalContent()}
    </Modal>
  );
};
