"use client";
import shoppingCartIcon from "@/public/categoryBlock/shoppingCart.svg";
import searchIcon from "@/public/search.svg";
import { Button, IButtonTheme } from "@/src/shared/ui/Button/Button";
import { InputWithTwoIcons } from "@/src/shared/ui/InputWithTwoIcons/ui/InputWithTwoIcons";
import Image from "next/image";
import styles from "./CategoryBlock.module.scss";

export const CategoryBlock = () => {
  return (
    <div className={styles.categoryBlock}>
      <div className={styles.categoryBlockInner}>
        <div className={styles.text}>
          <p className={styles.title}>Vtrende</p>
          <p className={styles.description}>
            Всё, что нужно — в одном месте! От модных трендов до гаджетов, от
            домашнего уюта до подарков – у нас есть всё и даже больше!
          </p>
        </div>
        <InputWithTwoIcons
          firstElement={
            <Image src={searchIcon} alt="search icon" width={20} height={20} />
          }
          containerClassname={styles.containerClassname}
          inputClassname={styles.inputClassname}
          placeholder="Поиск"
          secondElement={
            <Button
              theme={IButtonTheme.BLUE}
              onClick={() => console.log("Кнопка нажата")}
              className={styles.secondElementStyles}
            >
              Найти
            </Button>
          }
        />
      </div>
      <Image
        src={shoppingCartIcon}
        alt="shopping cart icon"
        className={styles.shoppingCartIconStyles}
      />
    </div>
  );
};
