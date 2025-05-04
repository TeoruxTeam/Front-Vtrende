import classNames from "classnames";
import React, { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: {
    modalOverlayStyles?: string;
    modalContentStyles?: string;
  };
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={classNames(styles.overlay, className?.modalOverlayStyles)}
      onClick={onClose}
    >
      <div
        className={classNames(
          styles.modalContent,
          className?.modalContentStyles
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
