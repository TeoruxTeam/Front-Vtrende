import logoIcon from "@/public/logo.svg";
import classNames from "classnames";
import Image from "next/image";
import styles from "./LogoBlock.module.scss";

export const LogoBlock = ({ className }: { className?: string }) => {
  return (
    <div className={styles.logoBlock}>
      <Image src={logoIcon} alt="logo" width={45} height={45} />
      <p className={classNames(styles.logoText, className)}>vTrende</p>
    </div>
  );
};
