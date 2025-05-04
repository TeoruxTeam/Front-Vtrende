import { FC } from "react";
import styles from "./Loader.module.scss";

export const Loading: FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};