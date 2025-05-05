import { Modal } from "@/src/shared/ui/Modal/Modal";
import { FC, useEffect, useState } from "react";
import { SignIn } from "../../SignIn/ui/SignIn";
import { SignUp } from "../../SignUp/ui/SignUp";

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
    useState<IAuthClientModalType | null>("sign up");

  const openModalFn = (type: IAuthClientModalType) => {
    setCurrentModalType(type);
  };

  const handleClose = () => {
    onClose();
    setCurrentModalType(null);
  };

  useEffect(() => {
    if (isOpen && !currentModalType) {
      setCurrentModalType("sign up");
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
        return (
          <div>
            <h2>Confirm Email</h2>
            <p>
              Code: <input type="text" placeholder="657345" />
            </p>
            <button onClick={handleClose}>Confirm</button>
          </div>
        );
      case "password recovery email":
        return (
          <div>
            <h2>Password Recovery</h2>
            <p>
              Email: <input type="email" placeholder="example@mail.ru" />
            </p>
            <button onClick={handleClose}>Send Recovery Email</button>
          </div>
        );
      case "password recovery passwords":
        return (
          <div>
            <h2>New Password</h2>
            <p>
              New Password: <input type="password" placeholder="••••••••" />
            </p>
            <p>
              Confirm Password: <input type="password" placeholder="••••••••" />
            </p>
            <button onClick={handleClose}>Save New Password</button>
          </div>
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
