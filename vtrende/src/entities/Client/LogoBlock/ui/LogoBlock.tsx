"use client";
import logoIcon from "@/public/logo.svg";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./LogoBlock.module.scss";

export const LogoBlock = ({ className }: { className?: string }) => {
  const navigate = useRouter();

  return (
    <button className={styles.logoBlock} onClick={() => navigate.push("/")}>
      <Image src={logoIcon} alt="logo" width={45} height={45} />
      <p className={classNames(styles.logoText, className)}>vTrende</p>
    </button>
  );
};
