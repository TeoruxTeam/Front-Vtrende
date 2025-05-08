import { IShopInfo } from "@/src/entities/Client/modal";
import { FC } from "react";
import { ShopInfo } from "../ShopInfo/ui/ShopInfo";

interface IShopPage {
  shopInfo: IShopInfo;
}

export const ShopPage: FC<IShopPage> = ({ shopInfo }) => {
  return <ShopInfo shopInfo={shopInfo} />;
};
