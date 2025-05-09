"use client";
import { CatalogBlock } from "@/src/entities/Client";
import {
  IProduct,
  useGetCategoryItemsQuery,
} from "@/src/entities/Client/modal";
import { Routes } from "@/src/shared/routes/routes";
import { useRouter } from "next/navigation";

export const CatalogBlockProductPage = () => {
  const { data } = useGetCategoryItemsQuery();
  const navigate = useRouter();

  const handleCardClick = (itemId: IProduct["id"]) => {
    navigate.push(`${Routes.PRODUCT}/${itemId}`);
  };

  if (!data) return;

  return (
    <CatalogBlock
      categories={data?.data.categories}
      onCardClick={handleCardClick}
    />
  );
};
