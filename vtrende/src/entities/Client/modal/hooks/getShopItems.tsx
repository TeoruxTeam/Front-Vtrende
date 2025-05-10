import { IProduct } from "@/src/entities/Client/modal";
import { IProductWithData } from "@/src/entities/Client/modal/types/productTypes";
import api from "@/src/shared/api/api";
import { fetchLimit } from "@/src/shared/const/pagination";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export interface IItemsFilters {
  category_id: string | null;
  price_from: number | null;
  price_to: number | null;
  sort_by: "created_at" | "price" | null;
  sort_order: "asc" | "desc" | null;
}

interface IGetShopItemsQueryParams {
  shop_id: IProduct["shop_id"];
}

interface UseGetShopItemsQueryResult {
  loadingMoreRef: (node?: Element | null) => void;
  shopItems: IProduct[];
  isLoading: boolean;
  isError: boolean;
  setFilters: Dispatch<SetStateAction<IItemsFilters>>;
  filters: IItemsFilters
}

export const useGetShopItemsQuery = (
  params: IGetShopItemsQueryParams
): UseGetShopItemsQueryResult => {
  const { shop_id } = params;
  const [filters, setFilters] = useState<IItemsFilters>({
    category_id: null,
    price_from: null,
    price_to: null,
    sort_by: null,
    sort_order: null,
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["get_shop_items", shop_id, filters],
    queryFn: async ({ pageParam = 0 }) => {
      const queryParams = new URLSearchParams({
        limit: String(fetchLimit),
        offset: String(pageParam),
        ...(filters.category_id && { category_id: filters.category_id }),
        ...(filters.price_from && { price_from: String(filters.price_from) }),
        ...(filters.price_to && { price_to: String(filters.price_to) }),
        ...(filters.sort_by && { sort_by: filters.sort_by }),
        ...(filters.sort_order && { sort_order: filters.sort_order }),
      });

      const response = await api.get<IProductWithData<IProduct[]>>(
        `/shop/${shop_id}/?${queryParams.toString()}`
      );
      const data = response.data.data;
      const nextOffset =
        data.length < fetchLimit ? null : pageParam + fetchLimit;
      return { data, nextOffset };
    },
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    initialPageParam: 0,
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const shopItems = data?.pages.flatMap((page) => page.data) || [];

  return {
    loadingMoreRef: ref,
    shopItems,
    isLoading,
    isError,
    setFilters,
    filters
  };
};
