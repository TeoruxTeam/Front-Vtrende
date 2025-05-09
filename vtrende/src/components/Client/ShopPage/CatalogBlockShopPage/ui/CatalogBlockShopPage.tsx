import { CatalogBlock } from "@/src/entities/Client";
import { useGetCategoryItemsQuery } from "@/src/entities/Client/modal";

export const CatalogBlockShopPage = () => {
  const { data } = useGetCategoryItemsQuery();

  if (!data) return null;
  //каталога нет
  
  return <CatalogBlock categories={data?.data.categories} />;
};
