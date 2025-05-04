import googleIcon from "@/public/google.svg";
import yandexIcon from "@/public/yandex.svg";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import styles from "./AuthModalInfo.module.scss";

interface IAuthModalInfoProps {
  title?: string;
  text?: string;
  actionText: string;
  actionTextFn: () => void;
}

export const AuthModalInfo: FC<PropsWithChildren<IAuthModalInfoProps>> = ({
  actionText,
  actionTextFn,
  text,
  title,
  children,
}) => {
  return (
    <div className={styles.authModalInfo}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <div className={styles.headerText}>
          <p className={styles.text}>{text}</p>
          <button onClick={actionTextFn} className={styles.actionText}>
            {actionText}
          </button>
        </div>
      </div>
      {children}
      <div className={styles.footer}>
        <p className={styles.text}>Или выберите другой способ:</p>
        <div className={styles.oAuthButtons}>
          <button className={styles.oAuthButton}>
            <Image src={googleIcon} alt="google icon" width={25} height={25} />
            <p>Войти через Google</p>
          </button>
          <button className={styles.oAuthButton}>
            <Image src={yandexIcon} alt="google icon" width={25} height={25} />
            <p>Войти через Yandex</p>
          </button>
        </div>
      </div>
    </div>
  );
};
