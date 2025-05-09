import { IProduct, IShopInfo } from "@/src/entities/Client/modal";
import api from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";

interface IGetShopInfoQueryParams {
  shop_id: IProduct["shop_id"] | null;
}

export const useGetShopInfoQuery = (params: IGetShopInfoQueryParams) => {
  const { shop_id } = params;
  return useQuery({
    queryKey: ["GetShopInfo", shop_id],
    queryFn: async () => {
      const response = await api.get<{ data: IShopInfo }>(
        `/profile/shop/${shop_id}/`
      );
      return response.data;
    },
    enabled: !!shop_id,
  });
};
