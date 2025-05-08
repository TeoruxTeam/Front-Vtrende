import shoppingCartIcon from "@/public/categoryBlock/shoppingCart.svg";
import { IProductData } from "@/src/entities/Client/modal";
import api, { API_BASE_URL } from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";

export const mockData: IProductData = {
  categories: [
    {
      id: 1,
      name: "Электроника",
      items: [
        {
          id: 1,
          name: "Смартфон Galaxy S23",
          description:
            "Мощный смартфон с отличной камерой и производительностью.",
          price: 79999,
          old_price: 89999,
          photos: [
            { id: 1, url: shoppingCartIcon.src },
            { id: 2, url: shoppingCartIcon.src },
          ],
          category_id: 1,
          subcategory_id: 101,
          shop_id: 1,
          is_favorite: true,
          shop_name: "TechShop",
          shop_rating: 4.8,
          shop_avatar: "",
        },
        {
          id: 2,
          name: "Ноутбук ProBook 15",
          description: "Идеальный ноутбук для работы и учёбы.",
          price: 129999,
          old_price: null,
          photos: [{ id: 3, url: shoppingCartIcon.src }],
          category_id: 1,
          subcategory_id: 102,
          shop_id: 1,
          is_favorite: false,
          shop_name: "TechShop",
          shop_rating: 4.8,
          shop_avatar: "",
        },
      ],
    },
    {
      id: 2,
      name: "Одежда",
      items: [
        {
          id: 3,
          name: "Футболка мужская",
          description: "Хлопковая футболка, размер M.",
          price: 1999,
          old_price: 2999,
          photos: [
            { id: 4, url: shoppingCartIcon.src },
            { id: 5, url: shoppingCartIcon.src },
          ],
          category_id: 2,
          subcategory_id: 201,
          shop_id: 2,
          is_favorite: false,
          shop_name: "FashionStore",
          shop_rating: 4.5,
          shop_avatar: "",
        },
      ],
    },
    {
      id: 3,
      name: "Книги",
      items: [],
    },
  ],
};

export default mockData;

export const useGetCategoryItemsQuery = () => {
  return useQuery({
    queryKey: ["get_category_items"],
    queryFn: async () => {
      const response = await api.get<IProductData>("/shop/main/");
      return response.data;
    },
  });
  
};

export async function getCategoryItemsFetch() {
  const response = await fetch(`${API_BASE_URL}/shop/main/`, {
    cache: "no-store",
  });

  const data = await response.json();
  // return data as IProductData;
  return mockData ;
}
