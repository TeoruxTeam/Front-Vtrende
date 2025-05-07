"use client"
import arrowDownIcon from "@/public/arrowDown.svg";
import markerIcon from "@/public/marker.svg";
import Image from "next/image";
import { useState } from "react";
import styles from "./ChangeCity.module.scss";

export const ChangeCity = () => {
  const [openCityList, setOpenCityList] = useState(false);

  return (
    <button
      className={styles.changeCity}
      onClick={() => setOpenCityList((prev) => !prev)}
    >
      <Image src={markerIcon} alt="marker" width={20} height={20} />
      <p className={styles.city}>Выберите ваш город</p>
      <Image src={arrowDownIcon} alt="arrow down" width={10} height={7} />
      {openCityList}
    </button>
  );
};
