import masterMind1 from "@/public/mock/mastermind1.webp";
import mastermind2 from "@/public/mock/mastermind2.webp";
import mastermind3 from "@/public/mock/mastermind3.webp";
import mastermind4 from "@/public/mock/mastermind4.webp";

export const mockProductMoreInfo: IProductMoreInfo = {
  id: 101,
  name: "Бомбер Mastermind",
  description: "Ахуительный бомбер",
  price: 89990,
  old_price: 99990,
  photos: [
    {
      id: 1,
      url: masterMind1.src,
    },
    {
      id: 2,
      url: mastermind2.src,
    },
    {
      id: 3,
      url: mastermind3.src,
    },
    {
      id: 4,
      url: mastermind4.src,
    },
  ],
  category_id: 5,
  subcategory_id: 12,
  shop_id: 1,
  is_favorite: true,
  shop_name: "TechGadgets",
  category_name: "Электроника",
  subcategory_name: "Смартфоны",
};

import { IProduct, IProductMoreInfo } from "@/src/entities/Client/modal";
import api from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";

interface IGetProductInfoQueryParams {
  item_id: IProduct["id"];
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

export async function fetchProductInfo() {
// export async function fetchProductInfo(item_id: string | number) {
  // const response = await fetch(`${API_BASE_URL}/shop/items/${item_id}/`, {
  //   cache: "no-store",
  // });

  // const data = await response.json();
  // return data as { data: IProductMoreInfo };
  return {data: mockProductMoreInfo};
}
