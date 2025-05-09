import { IShopInfo } from "@/src/entities/Client/modal";
import { FC } from "react";
import { ShopBlock } from "../ShopBlock/ui/ShopBlock";

interface IShopPage {
  shopInfo: IShopInfo;
}

export const ShopPage: FC<IShopPage> = ({ shopInfo }) => {
  return <ShopBlock shopInfo={shopInfo} />;
};
