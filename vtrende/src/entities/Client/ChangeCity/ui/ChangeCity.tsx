import markerIcon from "@/public/marker.svg";
import Image from "next/image";
import styles from "./ChangeCity.module.scss";

export const ChangeCity = () => {
  return (
    <div className={styles.changeCity}>
      <Image src={markerIcon} alt="marker" width={20} height={20} />
    </div>
  );
};
