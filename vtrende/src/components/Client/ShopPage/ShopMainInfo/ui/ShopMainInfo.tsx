import { RatingBlock } from "@/src/entities/Client";
import { IShopInfo } from "@/src/entities/Client/modal";
import { ConvertImage } from "@/src/shared/hooks";
import { Button } from "@/src/shared/ui";
import { IButtonTheme } from "@/src/shared/ui/Button/Button";
import { FC } from "react";
import styles from "./ShopMainInfo.module.scss";

interface IShopInfoProps {
  shopInfo: IShopInfo;
}

export const ShopMainInfo: FC<IShopInfoProps> = ({ shopInfo }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.shopInfo}>
        <div className={styles.badge}>
          <div className={styles.info}>
            <ConvertImage
              url={shopInfo.avatar}
              alt={shopInfo.name}
              width={111}
              height={111}
            />
            <div className={styles.name}>
              <p className={styles.title}>{shopInfo.name}</p>
              <p className={styles.description}>{shopInfo.description}</p>
              <RatingBlock
                rating={shopInfo.rating}
                height={15}
                width={15}
                className={styles.rating}
              />
            </div>
          </div>
          <Button theme={IButtonTheme.BLUE}>Написать продавцу</Button>
        </div>
      </div>
    </div>
  );
};
