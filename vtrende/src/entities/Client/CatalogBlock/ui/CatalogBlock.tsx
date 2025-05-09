"use client";
import blueArrow from "@/public/blueArrow.svg";
import { Skeleton } from "@/src/shared/ui";
import Image from "next/image";
import { IProduct, IProductData } from "../../modal/types/productTypes";
import { ProductCard } from "../../ProductCard/ui/ProductCard";
import styles from "./CatalogBlock.module.scss";

interface CatalogBlockProps extends IProductData {
  showArrow?: boolean;
  onCardClick?: (itemId: IProduct["id"]) => void;
}

const SkeletonCatalogBlock = () => {
  return (
    <div className={styles.skeletonCatalogBlock}>
      <div className={styles.catalogBlockInfo}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className={styles.categoryBlockInfo} key={index}>
            <Skeleton width={150} height={24} borderRadius={4} />
            <div className={styles.skeletonProductCard}>
              {Array.from({ length: 6 }).map((_, cardIndex) => (
                <div className={styles.skeletonCard} key={cardIndex}>
                  <Skeleton
                    className={styles.skeletonImage}
                    height={200}
                    borderRadius={8}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CatalogBlock = ({
  categories,
  showArrow = true,
  onCardClick,
}: CatalogBlockProps) => {
  if (!categories || categories.length === 0) {
    return <SkeletonCatalogBlock />;
  }

  return (
    <div className={styles.catalogBlock}>
      <div className={styles.catalogBlockInfo}>
        {categories.map((category) => (
          <div className={styles.categoryBlockInfo} key={category.id}>
            <div className={styles.categoryHeader}>
              <button className={styles.categoryName}>{category.name}</button>
              {showArrow && (
                <Image
                  src={blueArrow}
                  alt="blue arrow"
                  width={15}
                  height={14}
                />
              )}
            </div>
            <ProductCard items={category.items} onCardClick={onCardClick} />
          </div>
        ))}
      </div>
    </div>
  );
};
