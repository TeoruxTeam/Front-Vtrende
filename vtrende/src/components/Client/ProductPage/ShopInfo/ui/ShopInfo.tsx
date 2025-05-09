"use client";
import { RatingBlock, SocialLinks } from "@/src/entities/Client";
import { IShopInfo } from "@/src/entities/Client/modal";
import { ConvertImage } from "@/src/shared/hooks";
import { Routes } from "@/src/shared/routes/routes";
import { Button } from "@/src/shared/ui";
import { IButtonTheme } from "@/src/shared/ui/Button/Button";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./ShopInfo.module.scss";

interface IShopInfoProps {
  shopInfo: IShopInfo;
}

export const ShopInfo: FC<IShopInfoProps> = ({ shopInfo }) => {
  const navigate = useRouter();

  return (
    <div className={styles.shop_info}>
      <div className={styles.shop_main_info_block}>
        <button onClick={() => navigate.push(`${Routes.SHOP}/${shopInfo.id}`)}>
          <ConvertImage
            url={shopInfo.avatar}
            alt={shopInfo.name}
            height={85}
            width={85}
            className={styles.avatarStyles}
          />
        </button>
        <div className={styles.mainInfo}>
          <div className={styles.nameAndDescription}>
            <p className={styles.shopInfoName}>{shopInfo.name}</p>
            <p className={styles.description}>{shopInfo.description}</p>
          </div>
          <RatingBlock
            rating={shopInfo.rating}
            className={styles.ratingStyles}
            width={15}
            height={15}
          />
        </div>
        <Button theme={IButtonTheme.BLUE} className={styles.writeToSeller}>
          Написать продавцу
        </Button>
      </div>
      <SocialLinks socialLinks={shopInfo.socials} />
    </div>
  );
};
