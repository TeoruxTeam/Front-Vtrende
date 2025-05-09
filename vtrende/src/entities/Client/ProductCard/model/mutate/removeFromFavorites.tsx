"use client";
import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";
import { useGetProductInfoQuery } from "./ProductInfo/getProductInfo";

export const useRemoveFromFavoritesApi = ({ id }: { id?: number }) => {
  const { refetch } = useGetProductInfoQuery({ item_id: id ?? null });

  const removeFromFavorites = useMutation({
    mutationKey: ["remove_from_favorites"],
    mutationFn: async ({ id }: { id: number }) => {
      const response = await api.delete(`/favorites/item/${id}/`);
      return response.data;
    },
    onSuccess: () => {
      refetch();
    },
  });

  return {
    removeFromFavorites,
    isLoading: removeFromFavorites.isPending,
    isSuccess: removeFromFavorites.isSuccess,
    data: removeFromFavorites.data,
  };
};
