"use client";
import { CatalogBlock } from "@/src/entities/Client";
import { IProduct } from "@/src/entities/Client/modal";
import mockData from "@/src/entities/Client/modal/hooks/getCategoryItems";
import { Routes } from "@/src/shared/routes/routes";
import { useRouter } from "next/navigation";
import styles from "./CatalogBlockInfo.module.scss";

export const CatalogBlockInfo = () => {
  const navigate = useRouter();

  const handleCardClick = (itemId: IProduct["id"]) => {
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
