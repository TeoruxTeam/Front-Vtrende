"use client";
import Loading from "@/app/loading";
import { ProductLayout } from "@/src/app/layout/Layout";
import {
  CatalogBlockProductPage,
  ProductPage,
} from "@/src/components/Client/ProductPage";
import {
  useGetProductInfoQuery,
  useGetShopInfoQuery,
} from "@/src/entities/Client";

export default function Page({ params }: { params: { id: string } }) {
  const item_id = Number(params.id);

  const { data, isLoading } = useGetProductInfoQuery({ item_id: item_id });
  const { data: shopInfo, isLoading: shopIsLoading } = useGetShopInfoQuery({
    shop_id: data?.data.shop_id ?? null,
  });

  if (isLoading || shopIsLoading) {
    return <Loading />;
  }

  if (!data || !shopInfo) return null;
  //продукта нет

  return (
    <ProductLayout>
      <ProductPage productInfo={data.data} shopInfo={shopInfo.data} />
      <CatalogBlockProductPage />
    </ProductLayout>
  );
}
