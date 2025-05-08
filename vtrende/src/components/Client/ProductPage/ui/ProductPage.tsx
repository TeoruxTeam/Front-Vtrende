"use client";
import { IProductMoreInfo, IShopInfo } from "@/src/entities/Client/modal";
import { FC } from "react";
import { ProductInfo } from "../ProductInfo/ui/ProductInfo";
import { ShopInfo } from "../ShopInfo/ui/ShopInfo";
import styles from "./ProductPage.module.scss";

interface IProductPage {
  productInfo: IProductMoreInfo;
  shopInfo: IShopInfo;
}

export const ProductPage: FC<IProductPage> = ({ productInfo, shopInfo }) => {
  return (
    <div className={styles.productPage}>
      <ShopInfo shopInfo={shopInfo} />
      <ProductInfo productInfo={productInfo} />
    </div>
  );
};
