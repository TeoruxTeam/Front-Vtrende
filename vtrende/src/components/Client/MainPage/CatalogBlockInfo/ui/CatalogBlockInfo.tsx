"use client";
import { CatalogBlock } from "@/src/entities/Client";
import { Routes } from "@/src/shared/routes/routes";
import { useRouter } from "next/navigation";
import mockData from "../modal/query/getCatalogBlockInfo";
import styles from "./CatalogBlockInfo.module.scss";
import { IItem } from "@/src/entities/Client/modal/types/productTypes";

export const CatalogBlockInfo = () => {
  const navigate = useRouter();

  const handleCardClick = (itemId: IItem['id']) => {
    navigate.push(`${Routes.PRODUCT}/${itemId}`);
  };

  return (
    <div className={styles.productList}>
      <CatalogBlock
        categories={mockData.categories}
        onCardClick={handleCardClick}
      />
    </div>
  );
};
