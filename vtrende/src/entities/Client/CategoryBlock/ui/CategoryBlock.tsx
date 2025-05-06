import shoppingCartIcon from "@/public/categoryBlock/shoppingCart.svg";
import Input, { IInputTheme } from "@/src/shared/ui/Input/Input";
import Image from "next/image";
import styles from "./CategoryBlock.module.scss";

export const CategoryBlock = () => {
  return (
    <div className={styles.categoryBlock}>
      <div>
        <div className={styles.text}>
          <p className={styles.title}>Vtrende</p>
          <p className={styles.description}>
            Всё, что нужно — в одном месте! От модных трендов до гаджетов, от
            домашнего уюта до подарков – у нас есть всё и даже больше!
          </p>
        </div>
        <Input theme={IInputTheme.GRAY} />
      </div>
      <Image src={shoppingCartIcon} alt="shopping cart icon" />
    </div>
  );
};
