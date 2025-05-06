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
  disableClose?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  disableClose
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disableClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={classNames(styles.overlay, className?.modalOverlayStyles)}
      onClick={handleOverlayClick}
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
