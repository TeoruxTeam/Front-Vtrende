"use client";
import { IProduct } from "@/src/entities/Client/modal";
import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddedToCart = () => {
  const addedToCart = useMutation({
    mutationKey: ["added_to_card"],
    mutationFn: async ({ item_id }: { item_id: IProduct["id"] }) => {
      const response = await api.post(`/cart/add/${item_id}/`);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Успешно!");
    },
    onError: () => {
      toast.error("Что-то пошло не так");
    },
  });

  return {
    addedToCart,
  };
};
