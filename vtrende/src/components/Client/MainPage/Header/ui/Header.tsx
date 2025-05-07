"use client";
import { LogoBlock } from "@/src/entities/Client";
import { IAuthClientModalType } from "../../../Auth";
import { UserBadge } from "../../UserBadge/ui/UserBadge";
import { Category } from "../Category/ui/Category";
import { ChangeCity } from "../ChangeCity/ui/ChangeCity";
import { SearchBlock } from "../SearchBlock/ui/SearchBlock";
import styles from "./Header.module.scss";


export const Header = ({
  onOpenModal,
}: {
  onOpenModal: (type?: IAuthClientModalType) => void;
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBlock}>
        <LogoBlock />
        <ChangeCity />
      </div>
      <SearchBlock />
      <div className={styles.rightPart}>
        <Category />
        <UserBadge onOpenModal={onOpenModal} />
      </div>
    </div>
  );
};
