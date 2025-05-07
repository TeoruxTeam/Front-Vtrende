"use client";
import cameraIcon from "@/public/CardBlock/camera.svg";
import starIcon from "@/public/star.svg";
import { ConvertImage } from "@/src/shared/hooks/convertImage";
import { formatNumberThousands } from "@/src/shared/model";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { IItem } from "../../modal/types/productTypes";
import { useAddedToFavorites } from "../model/hooks/addedToFavorites";
import LikeIcon from "../model/icons/likeIcon";
import styles from "./ProductCard.module.scss";

interface IProductCardProps {
  items: IItem[];
  addedToFavorite?: (id: IItem["id"], isFavorite: boolean) => void;
  onCardClick?: (itemId: IItem["id"]) => void;
}

export const ProductCard: FC<IProductCardProps> = ({
  items,
  addedToFavorite,
  onCardClick,
}) => {
  const { favoriteItems, handleToggleFavorites, addLoading, removeLoading } =
    useAddedToFavorites({
      items,
      addedToFavorite,
    });

  return (
    <div className={styles.productCard}>
      {items.map((item) => (
        <div
          className={styles.item}
          key={item.id}
          onClick={() => (onCardClick ? onCardClick(item.id) : {})}
        >
          <div className={styles.photoInfo}>
            <Image
              src={item.photos[0].url}
              alt={item.name}
              fill
              className={styles.photoStyles}
            />
            <button
              className={classNames(
                styles.likeStyles,
                favoriteItems.includes(item.id) && styles.activeLikeStyles
              )}
              onClick={() =>
                handleToggleFavorites(item.id, favoriteItems.includes(item.id))
              }
              disabled={addLoading || removeLoading}
            >
              <LikeIcon
                width={14}
                height={14}
                fill={
                  favoriteItems.includes(item.id) ? "#0047AB" : "transparent"
                }
              />
            </button>
            <div className={styles.photoBlock}>
              <Image
                src={cameraIcon}
                alt="camera"
                width={13}
                height={13}
                className={styles.cameraStyles}
              />
              <p className={styles.photoCount}>{item.photos.length}</p>
            </div>
          </div>
          <div className={styles.itemInfo}>
            <div className={styles.priceBlock}>
              <p className={styles.price}>
                {formatNumberThousands(item.price)}₽
              </p>
              {item.old_price && (
                <p className={styles.oldPrice}>
                  {formatNumberThousands(item.old_price)}₽
                </p>
              )}
            </div>
            <p className={styles.name}>{item.name}</p>
            <div className={styles.shopInfo}>
              <div className={styles.shopMainInfo}>
                <ConvertImage
                  url={item.shop_avatar}
                  alt="shop avatar"
                  width={20}
                  height={20}
                />
                <p className={styles.shopName}>{item.shop_name}</p>
              </div>
              <div className={styles.shopRating}>
                <Image src={starIcon} alt="star" width={10} height={10} />
                <p className={styles.rating}>{item.shop_rating}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
