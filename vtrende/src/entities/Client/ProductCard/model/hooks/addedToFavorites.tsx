/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IProduct } from "../../../modal";
import { useAddedToFavoritesApi } from "../mutate/addedToFavorites";
import { useRemoveFromFavoritesApi } from "../mutate/removeFromFavorites";

export const useAddedToFavorites = ({
  items,
  addedToFavorite,
}: {
  items: IProduct[];
  addedToFavorite?: (id: number, isFavorite: boolean) => void;
}) => {
  const { addedToFavorites, isLoading: addLoading } = useAddedToFavoritesApi();
  const { removeFromFavorites, isLoading: removeLoading } =
    useRemoveFromFavoritesApi();
  const [favoriteItems, setFavoriteItems] = useState<number[]>([]);

  useEffect(() => {
    const initialFavorites = items
      .filter((item) => item.is_favorite)
      .map((item) => item.id);
    setFavoriteItems(initialFavorites);
  }, [items]);

  useEffect(() => {
    if (addedToFavorites.isSuccess && addedToFavorites.data) {
      const updatedFavorite = addedToFavorites.data.is_favorite;
      setFavoriteItems((prev) =>
        updatedFavorite
          ? [...prev, addedToFavorites.data.id]
          : prev.filter((id) => id !== addedToFavorites.data.id)
      );
    }
  }, [addedToFavorites.isSuccess, addedToFavorites.data]);

  const handleToggleFavorites = (
    e: React.MouseEvent,
    id: number,
    isFavorite: boolean
  ) => {
    e.stopPropagation();

    if (addLoading || removeLoading) return;

    if (isFavorite) {
      removeFromFavorites.mutate(
        { id },
        {
          onSuccess: () => {
            setFavoriteItems((prev) => prev.filter((itemId) => itemId !== id));
            toast.success("Удалено из избранного");
          },
          onError: () => {
            toast.error("Ошибка при удалении из избранного");
          },
        }
      );
    } else {
      addedToFavorites.mutate(
        { id },
        {
          onSuccess: () => {
            setFavoriteItems((prev) => [...prev, id]);
            toast.success("Добавлено в избранное");
          },
          onError: () => {
            toast.error("Ошибка при добавлении в избранное");
          },
        }
      );
    }

    if (addedToFavorite) {
      addedToFavorite(id, !isFavorite);
    }
  };

  return {
    favoriteItems,
    setFavoriteItems,
    handleToggleFavorites,
    addLoading,
    removeLoading,
  };
};
