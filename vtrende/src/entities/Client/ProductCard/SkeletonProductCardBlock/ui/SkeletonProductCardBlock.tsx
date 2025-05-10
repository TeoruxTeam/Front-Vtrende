import { Skeleton } from "@/src/shared/ui";
import styles from "./SkeletonProductCardBlock.module.scss";

export const SkeletonProductCardBlock = () => {
  return (
    <div className={styles.skeletonCatalogBlock}>
      <div className={styles.catalogBlockInfo}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div className={styles.categoryBlockInfo} key={index}>
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
