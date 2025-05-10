"use client";
import { useGetProductInfoQuery } from "@/src/entities/Client";
import { IProduct } from "@/src/entities/Client/modal";
import api from "@/src/shared/api/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddedToCart = ({ id }: { id: number }) => {
  const { refetch } = useGetProductInfoQuery({ item_id: id });

  const addedToCart = useMutation({
    mutationKey: ["added_to_card"],
    mutationFn: async ({ item_id }: { item_id: IProduct["id"] }) => {
      const response = await api.post(`/cart/add/${item_id}/`);
      return response.data;
    },
    onSuccess: () => {
      refetch()
    },
    onError: () => {
      toast.error("Что-то пошло не так");
    },
  });

  return {
    addedToCart,
  };
};
