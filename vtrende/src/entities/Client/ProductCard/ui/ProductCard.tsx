"use client";
import cameraIcon from "@/public/CardBlock/camera.svg";
import { ConvertImage } from "@/src/shared/hooks";
import { formatNumberThousands } from "@/src/shared/model";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { IProduct, LikeIcon } from "../../modal";
import { RatingBlock } from "../../RatingBlock/ui/RatingBlock";
import { useAddedToFavorites } from "../model/hooks/addedToFavorites";
import styles from "./ProductCard.module.scss";

interface IProductCardProps {
  items: IProduct[];
  addedToFavorite?: (id: IProduct["id"], isFavorite: boolean) => void;
  onCardClick?: (itemId: IProduct["id"]) => void;
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
      {items &&
        items.map((item) => (
          <div
            className={styles.item}
            key={item.id}
            onClick={() => (onCardClick ? onCardClick(item.id) : {})}
          >
            <div className={styles.photoInfo}>
              <ConvertImage
                url={item?.photos[0].photo_url}
                alt={item.name}
                fill
                unoptimized
                className={styles.photoStyles}
              />
              <button
                className={classNames(
                  styles.likeStyles,
                  favoriteItems.includes(item.id) && styles.activeLikeStyles
                )}
                onClick={(e) =>
                  handleToggleFavorites(
                    e,
                    item.id,
                    favoriteItems.includes(item.id)
                  )
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
                    className={styles.shopAvatarStyles}
                  />
                  <p className={styles.shopName}>{item.shop_name}</p>
                </div>
                <RatingBlock rating={item.shop_rating} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
