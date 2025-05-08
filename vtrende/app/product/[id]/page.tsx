import { ProductLayout } from "@/src/app/layout/Layout";
import {
  CatalogBlockProductPage,
  ProductPage,
} from "@/src/components/Client/ProductPage";
import { fetchProductInfo, fetchShopInfo } from "@/src/entities/Client";
import { getCategoryItemsFetch } from "@/src/entities/Client/modal";
import { Loading } from "@/src/shared/ui";
import { Suspense } from "react";

export default async function Page() {
  // export default async function Page({ params }: { params: { id: string } }) {
  // const item_id = Number(params.id);

  // const productData = await fetchProductInfo(item_id);
  // const shopData = await fetchShopInfo(productData?.data?.shop_id || null);
  const productData = await fetchProductInfo();
  const shopData = await fetchShopInfo();
  const getCategoryItems = await getCategoryItemsFetch();

  if (!productData || !shopData || !getCategoryItems.categories) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <ProductLayout>
        <ProductPage productInfo={productData.data} shopInfo={shopData.data} />
        <CatalogBlockProductPage />
      </ProductLayout>
    </Suspense>
  );
}
