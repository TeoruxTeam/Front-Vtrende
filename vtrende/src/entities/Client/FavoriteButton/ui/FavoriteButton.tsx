import React, { FC } from "react";
import { UseMutateFunction } from "@tanstack/react-query";
import { LikeIcon } from "../../modal";

interface IFavoriteButtonProps {
  isFavorite: boolean;
  productId: number;
  addedToFavorites: UseMutateFunction<void, unknown, { id: number }, unknown>;
  removeFromFavorites: UseMutateFunction<void, unknown, { id: number }, unknown>;
}

export const FavoriteButton: FC<IFavoriteButtonProps> = ({
  isFavorite,
  productId,
  addedToFavorites,
  removeFromFavorites,
}) => {
  return (
    <button
      aria-label="Добавить в избранное"
      onClick={() =>
        !isFavorite
          ? addedToFavorites({ id: productId })
          : removeFromFavorites({ id: productId })
      }
    >
      <LikeIcon
        width={21}
        height={21}
        fill={isFavorite ? "#0047AB" : "transparent"}
        stroke={isFavorite ? "#fff" : "#252525"}
      />
    </button>
  );
};