"use client";
import blueArrow from "@/public/blueArrow.svg";
import Image from "next/image";
import { IProduct, IProductData } from "../../modal/types/productTypes";
import { ProductCard } from "../../ProductCard/ui/ProductCard";
import { SkeletonCatalogBlock } from "../SkeletonBlock/ui/SkeletonBlock";
import styles from "./CatalogBlock.module.scss";

interface CatalogBlockProps extends IProductData {
  showArrow?: boolean;
  onCardClick?: (itemId: IProduct["id"]) => void;
}

export const CatalogBlock = ({
  categories,
  showArrow = true,
  onCardClick,
}: CatalogBlockProps) => {
  if (!categories) {
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
