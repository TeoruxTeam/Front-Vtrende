import { Button, IButtonTheme } from "@/src/shared/ui/Button/Button";
import { FC, PropsWithChildren } from "react";
import styles from "./EmailActionsModal.module.scss";

interface IEmailActionsModal {
  title: string;
  description: string;
  footerText?: string;
  footerButtonText: string;
  footerButtonTextFn: () => void;
  onSubmit: () => void;
  submitButtonText: string;
  disabledButton?: boolean;
}

export const EmailActionsModal: FC<PropsWithChildren<IEmailActionsModal>> = ({
  title,
  description,
  footerText,
  footerButtonTextFn,
  footerButtonText,
  children,
  onSubmit,
  submitButtonText,
  disabledButton,
}) => {
  return (
    <div className={styles.emailActionsModal}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <form onSubmit={onSubmit} className={styles.form}>
        {children}
        <Button
          theme={IButtonTheme.BLUE}
          type="submit"
          disabled={disabledButton}
        >
          {submitButtonText}
        </Button>
      </form>

      <div className={styles.footer}>
        {footerText && <p className={styles.footerText}>{footerText}</p>}
        <Button
          onClick={footerButtonTextFn}
          theme={IButtonTheme.WHITE}
          className={styles.footerButtonText}
        >
          {footerButtonText}
        </Button>
      </div>
    </div>
  );
};
