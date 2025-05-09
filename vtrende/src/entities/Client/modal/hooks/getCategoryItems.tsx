import { IProductData } from "@/src/entities/Client/modal";
import api, { API_BASE_URL } from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoryItemsQuery = () => {
  return useQuery({
    queryKey: ["get_category_items"],
    queryFn: async () => {
      const response = await api.get<{ data: IProductData }>("/shop/main/");
      return response.data;
    },
  });
};

export async function getCategoryItemsFetch() {
  const response = await fetch(`${API_BASE_URL}/shop/main/`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data as { data: IProductData };
}
