"use client";
import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";

export const useRemoveFromFavoritesApi = () => {
  const removeFromFavorites = useMutation({
    mutationKey: ["remove_from_favorites"],
    mutationFn: async ({ id }: { id: number }) => {
      const response = await api.delete(`/favorites/item/${id}/`);
      return response.data;
    },
  });

  return {
    removeFromFavorites,
    isLoading: removeFromFavorites.isPending,
    isSuccess: removeFromFavorites.isSuccess,
    data: removeFromFavorites.data,
  };
};