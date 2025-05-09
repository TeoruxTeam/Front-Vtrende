"use client";
import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";
import { useGetProductInfoQuery } from "./ProductInfo/getProductInfo";

export const useAddedToFavoritesApi = ({ id }: { id?: number }) => {
  const { refetch } = useGetProductInfoQuery({ item_id: id ?? null });

  const addedToFavorites = useMutation({
    mutationKey: ["added_to_favorites"],
    mutationFn: async ({ id }: { id: number }) => {
      const response = await api.post(`/favorites/item/${id}/`);
      return response.data;
    },
    onSuccess: () => {
      refetch();
    },
  });

  return {
    addedToFavorites,
    isLoading: addedToFavorites.isPending,
    isSuccess: addedToFavorites.isSuccess,
    data: addedToFavorites.data,
  };
};
