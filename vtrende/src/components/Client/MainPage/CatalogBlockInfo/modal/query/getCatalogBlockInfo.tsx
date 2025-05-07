import shoppingCartIcon from "@/public/categoryBlock/shoppingCart.svg";
import { IItemData } from "@/src/entities/Client/modal/types/productTypes";
import { useQuery } from "@tanstack/react-query";

export const mockData: IItemData = {
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
          views: 1200,
          shop_avatar: '',
          purchases: 350,
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
          shop_avatar: '',
          views: 800,
          purchases: 120,
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
          shop_avatar: '',
          views: 500,
          purchases: 200,
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

export const useGetCatalogBlockInfo = () => {
  const catalogInfo = useQuery({
    queryKey: ["catalog_info"],
    queryFn: async () => {
      // const response = await api.get("/shop/main/");
      // return response.data;
      return mockData;
    },
  });

  return {
    catalogInfo,
  };
};
