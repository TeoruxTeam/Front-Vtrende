import { IShopInfo } from "@/src/entities/Client/modal";
import { FC } from "react";
import { AdditionalShopInformation } from "../../AdditionalShopInformation/ui/AdditionalShopInformation";
import { CatalogBlockShopPage } from "../../CatalogBlockShopPage/ui/CatalogBlockShopPage";
import { ShopMainInfo } from "../../ShopMainInfo/ui/ShopMainInfo";
import styles from "./ShopBlock.module.scss";

interface IShopBlockProps {
  shopInfo: IShopInfo;
}

export const ShopBlock: FC<IShopBlockProps> = ({ shopInfo }) => {
  return (
    <div className={styles.shopInfo}>
      <ShopMainInfo shopInfo={shopInfo} />
      <AdditionalShopInformation shopInfo={shopInfo} />
      <CatalogBlockShopPage />
    </div>
  );
};
