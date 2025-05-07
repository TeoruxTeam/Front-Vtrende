"use client";
import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";

export const useAddedToFavoritesApi = () => {
  const addedToFavorites = useMutation({
    mutationKey: ["added_to_favorites"],
    mutationFn: async ({ id }: { id: number }) => {
      const response = await api.post(`/favorites/item/${id}/`);
      return response.data;
    },
  });

  return {
    addedToFavorites,
    isLoading: addedToFavorites.isPending,
    isSuccess: addedToFavorites.isSuccess,
    data: addedToFavorites.data,
  };
};
