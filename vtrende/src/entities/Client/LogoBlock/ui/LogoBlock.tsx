import logoIcon from "@/public/logo.svg";
import Image from "next/image";
import styles from "./LogoBlock.module.scss";

export const LogoBlock = () => {
  return (
    <div className={styles.logoBlock}>
      <Image src={logoIcon} alt="logo" width={45} height={45} />
      <p className={styles.logoText}>vTrende</p>
    </div>
  );
};
