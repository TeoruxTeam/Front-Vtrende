import { YandexMap } from "@/src/entities/Client/Map/Map";
import { IShopInfo } from "@/src/entities/Client/modal";
import { FC } from "react";
import styles from "./ShopMapInfo.module.scss";

interface IShopMapInfoProps {
  latitude: IShopInfo["lat"];
  longitude: IShopInfo["lng"];
  address: IShopInfo['address']
}

export const ShopMapInfo: FC<IShopMapInfoProps> = ({ latitude, longitude, address }) => {
  return (
    <div className={styles.shopMapInfo}>
      <YandexMap latitude={latitude} longitude={longitude} />
      <p className={styles.address}>{address}</p>
    </div>
  );
};
