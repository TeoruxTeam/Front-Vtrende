"use client";
import { UserBadge } from "@/src/components/Client";
import { SearchInput } from "@/src/shared/ui/SearchInput/ui/SearchInput";
import { useState } from "react";
import { Category } from "../../Category/ui/Category";
import { LogoBlock } from "../../LogoBlock/ui/LogoBlock";
import styles from "./Header.module.scss";

export const Header = () => {
  const [searchInfo, setSearchInfo] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchInfo(e.target.value);
  };

  return (
    <div className={styles.header}>
      <LogoBlock />
      <SearchInput
        value={searchInfo}
        onChange={handleChange}
        placeholder="Поиск"
        inputClassname={styles.inputClassname}
      />
      <div className={styles.rightPart}>
        <Category />
        <UserBadge />
      </div>
    </div>
  );
};
