import { Skeleton } from "@/src/shared/ui";
import styles from "./SkeletonBlock.module.scss";

export const SkeletonCatalogBlock = () => {
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
