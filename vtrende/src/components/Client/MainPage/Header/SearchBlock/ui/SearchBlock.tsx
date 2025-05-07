"use client";
import { SearchInput } from "@/src/shared/ui/SearchInput/ui/SearchInput";
import React, { useState } from "react";
import styles from "./SearchBlock.module.scss";

export const SearchBlock = () => {
  const [searchInfo, setSearchInfo] = useState<string>("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchInfo(e.target.value);
  };

  return (
    <SearchInput
      value={searchInfo}
      onChange={handleChange}
      placeholder="Поиск"
      inputClassname={styles.inputClassname}
      onButtonClick={() => console.log(1)}
    />
  );
};
