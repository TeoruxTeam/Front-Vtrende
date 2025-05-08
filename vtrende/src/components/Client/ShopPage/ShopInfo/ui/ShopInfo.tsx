import { IShopInfo } from "@/src/entities/Client/modal";
import { FC } from "react";
import { AdditionalShopInformation } from "../../AdditionalShopInformation/ui/AdditionalShopInformation";
import { CatalogBlockShopPage } from "../../CatalogBlockShopPage/ui/CatalogBlockShopPage";
import { ShopMainInfo } from "../../ShopMainInfo/ui/ShopMainInfo";
import styles from "./ShopInfo.module.scss";

interface IShopInfoProps {
  shopInfo: IShopInfo;
}

export const ShopInfo: FC<IShopInfoProps> = ({ shopInfo }) => {
  return (
    <div className={styles.shopInfo}>
      <ShopMainInfo shopInfo={shopInfo} />
      <AdditionalShopInformation shopInfo={shopInfo} />
      <CatalogBlockShopPage />
    </div>
  );
};
