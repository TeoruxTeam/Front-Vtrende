"use client";

import Loading from "@/app/loading";
import { ShopPage } from "@/src/components/Client/ShopPage";
import { useGetShopInfoQuery } from "@/src/entities/Client";

const Page = ({ params }: { params: { id: string } }) => {
  const shop_id = Number(params.id);

  const { data: shopInfo, isLoading } = useGetShopInfoQuery({
    shop_id: shop_id,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!shopInfo) {
    return null;
  }
  //магазина нет

  return <ShopPage shopInfo={shopInfo.data} />;
};

export default Page;
