"use client";
import { CatalogBlock } from "@/src/entities/Client";
import { IProduct } from "@/src/entities/Client/modal";
import { useGetCategoryItemsQuery } from "@/src/entities/Client/modal/hooks/getCategoryItems";
import { Routes } from "@/src/shared/routes/routes";
import { useRouter } from "next/navigation";
import styles from "./CatalogBlockInfo.module.scss";

export const CatalogBlockInfo = () => {
  const { data } = useGetCategoryItemsQuery();
  const navigate = useRouter();

  const handleCardClick = (itemId: IProduct["id"]) => {
    navigate.push(`${Routes.PRODUCT}/${itemId}`);
  };

  return (
    <div className={styles.productList}>
      <CatalogBlock
        categories={data?.data?.categories}
        onCardClick={handleCardClick}
      />
    </div>
  );
};
