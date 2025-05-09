import { IProduct, IProductMoreInfo } from "@/src/entities/Client/modal";
import api from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";

interface IGetProductInfoQueryParams {
  item_id: IProduct["id"] | null;
}

export const useGetProductInfoQuery = (params: IGetProductInfoQueryParams) => {
  const { item_id } = params;
  return useQuery({
    queryKey: ["get_product_info", item_id],
    queryFn: async () => {
      const response = await api.get<{ data: IProductMoreInfo }>(
        `/shop/items/${item_id}/`
      );
      return response.data;
    },
  });
};
