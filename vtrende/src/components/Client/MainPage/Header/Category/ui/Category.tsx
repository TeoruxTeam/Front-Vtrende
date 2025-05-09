"use client";
import catalogIcon from "@/public/catalog.svg";
import classNames from "classnames";
import Image from "next/image";
import styles from "./Category.module.scss";
import { useCategory } from "../model/hooks/category";

export const Category = () => {

  const { categories, openCategory, setOpenCategory, isMounted } = useCategory()

    if (!isMounted) {
    return (
      <button className={styles.category}>
        <Image src={catalogIcon} alt="catalog" width={18} height={18} />
        <p className={styles.text}>Каталог</p>
      </button>
    );
  }

  return (
    <div className={styles.categories}>
      <button
        className={styles.category}
        onClick={() => setOpenCategory((prev) => !prev)}
      >
        <Image src={catalogIcon} alt="catalog" width={18} height={18} />
        <p className={styles.text}>Каталог</p>
      </button>
      <div
        className={classNames(styles.select, {
          [styles.activeSelect]: openCategory,
        })}
      >
        {categories?.data.map((category) => (
          <button className={styles.categoryName} key={category.id}>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
