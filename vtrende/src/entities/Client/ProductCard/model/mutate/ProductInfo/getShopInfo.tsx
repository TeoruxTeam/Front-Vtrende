import { IProduct, IShopInfo } from "@/src/entities/Client/modal";
import api from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { ESocialLinks } from "../../../../SocialLinks/model/types/socialLinks";

export const mockShopInfo: IShopInfo = {
  id: 1,
  name: "TechGadgets",
  description: "Лучшие гаджеты и электроника по доступным ценам",
  avatar: "",
  created_at: "2023-01-15T10:30:00Z",
  rating: 4.8,
  socials: [
    {
      social_type: ESocialLinks.whatsapp,
      value: "techgadgets_official",
    },
    {
      social_type: ESocialLinks.telegram,
      value: "techgadgets_channel",
    },
    {
      social_type: ESocialLinks.vk,
      value: "techgadgets_group",
    },
  ],
};

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

export async function fetchShopInfo() {
  // export async function fetchShopInfo(shop_id: string | number | null) {
  //   if (!shop_id) return null;

  // const response = await fetch(`${API_BASE_URL}/profile/shop/${shop_id}/`, {
  //   cache: "no-store",
  // });

  // const data = await response.json();
  return { data: mockShopInfo };
  // return data as { data: IShopInfo };
}
