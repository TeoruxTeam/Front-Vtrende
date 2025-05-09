"use client";
import shareIcon from "@/public/share.svg";
import { IProductMoreInfo, LikeIcon } from "@/src/entities/Client/modal";
import { ConvertImage } from "@/src/shared/hooks";
import { Routes } from "@/src/shared/routes/routes";
import { Button } from "@/src/shared/ui";
import { IButtonTheme } from "@/src/shared/ui/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useProductInfo } from "../model/hooks/productInfo";
import styles from "./ProductInfo.module.scss";

interface IProductInfo {
  productInfo: IProductMoreInfo;
}

export const ProductInfo: FC<IProductInfo> = ({ productInfo }) => {
  const navigate = useRouter();
  const {
    addedToCart,
    addedToFavorites,
    handleCopyUrl,
    removeFromFavorites,
    setShowBigImage,
    showBigImage,
  } = useProductInfo();

  return (
    <div className={styles.productInfo}>
      <div className={styles.previewPhotos}>
        {productInfo.photos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setShowBigImage(photo.photo_url)}
            className={styles.photoButtonStyles}
            aria-label="Просмотреть изображение"
          >
            <ConvertImage
              url={photo.photo_url}
              alt={`Изображение товара ${productInfo.name}`}
              width={155}
              height={170}
              className={styles.photoStyles}
              priority={photo.id === productInfo.photos[0].id}
            />
          </button>
        ))}
      </div>
      <div className={styles.mainInfo}>
        <ConvertImage
          url={showBigImage || productInfo.photos[0].photo_url}
          alt={`Основное изображение товара ${productInfo.name}`}
          width={444}
          height={530}
          className={styles.bigProductImage}
          priority
        />
        <div className={styles.mainInfoData}>
          <div className={styles.header}>
            <div className={styles.headerActions}>
              <button
                className={styles.reportBlock}
                aria-label="Пожаловаться на товар"
              >
                Пожаловаться
              </button>
              <div className={styles.action}>
                <button
                  aria-label="Добавить в избранное"
                  onClick={() =>
                    !productInfo.is_favorite
                      ? addedToFavorites.mutate({ id: productInfo.id })
                      : removeFromFavorites.mutate({ id: productInfo.id })
                  }
                >
                  <LikeIcon
                    width={21}
                    height={21}
                    fill={productInfo.is_favorite ? "#0047AB" : "transparent"}
                    stroke={productInfo.is_favorite ? "#fff" : "#252525"}
                  />
                </button>
                <button onClick={handleCopyUrl} aria-label="Поделиться товаром">
                  <Image
                    src={shareIcon}
                    alt="Иконка поделиться"
                    width={17}
                    height={17}
                  />
                </button>
              </div>
            </div>
            <div className={styles.priceBlock}>
              <p className={styles.price}>
                {productInfo.price.toLocaleString()}₽
              </p>
              {productInfo.old_price && (
                <p className={styles.oldPrice}>
                  {productInfo.old_price.toLocaleString()}₽
                </p>
              )}
            </div>
            <div className={styles.infoBlock}>
              <h1 className={styles.name}>{productInfo.name}</h1>
              <Button
                theme={IButtonTheme.BLUE}
                className={styles.addedToCard}
                aria-label="Добавить в корзину"
                onClick={() =>
                  productInfo.is_favorite
                    ? navigate.push(Routes.CART)
                    : addedToCart.mutate({ item_id: productInfo.id })
                }
              >
                {productInfo.is_favorite
                  ? "Перейти в корзину"
                  : "Добавить в корзину"}
              </Button>
              <div className={styles.description}>
                <h2 className={styles.title}>Описание</h2>
                <p className={styles.descriptionText}>
                  {productInfo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
