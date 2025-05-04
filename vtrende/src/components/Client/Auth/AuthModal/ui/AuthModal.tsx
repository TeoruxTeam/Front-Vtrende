import { Modal } from "@/src/shared/ui/Modal/Modal";
import { FC } from "react";
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
  openModalType: IAuthClientModalType;
}

export const AuthModal: FC<IAuthModalProps> = ({
  isOpen,
  onClose,
  openModalType,
}) => {
  if (!isOpen) return null;

  const renderModalContent = () => {
    switch (openModalType) {
      case "sign in":
        return (
          <div>
            <h2>Sign In</h2>
            <p>
              Email: <input type="email" placeholder="example@mail.ru" />
            </p>
            <p>
              Password: <input type="password" placeholder="••••••••" />
            </p>
            <button onClick={onClose}>Login</button>
          </div>
        );
      case "sign up":
        return (
          <Modal isOpen={isOpen} onClose={onClose}>
            <SignUp />
          </Modal>
        );
      case "confirm email":
        return (
          <div>
            <h2>Confirm Email</h2>
            <p>
              Code: <input type="text" placeholder="657345" />
            </p>
            <button onClick={onClose}>Confirm</button>
          </div>
        );
      case "password recovery email":
        return (
          <div>
            <h2>Password Recovery</h2>
            <p>
              Email: <input type="email" placeholder="example@mail.ru" />
            </p>
            <button onClick={onClose}>Send Recovery Email</button>
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
            <button onClick={onClose}>Save New Password</button>
          </div>
        );
      default:
        return <div>Unknown modal type</div>;
    }
  };

  return (
    <div
      style={{
        position: "fixed",
      }}
    >
      {renderModalContent()}
    </div>
  );
};
