"use client";
import { CatalogBlock } from "@/src/entities/Client";
import { IProduct } from "@/src/entities/Client/modal";
import mockData from "@/src/entities/Client/modal/hooks/getCategoryItems";
import { Routes } from "@/src/shared/routes/routes";
import { useRouter } from "next/navigation";

export const CatalogBlockProductPage = () => {
  // const { data } = useGetCategoryItemsQuery();
  const navigate = useRouter();

  const handleCardClick = (itemId: IProduct["id"]) => {
    navigate.push(`${Routes.PRODUCT}/${itemId}`);
  };

  // if (!data) return;

  return (
    <CatalogBlock
      categories={mockData?.categories}
      onCardClick={handleCardClick}
      showArrow={false}
    />
  );
};
