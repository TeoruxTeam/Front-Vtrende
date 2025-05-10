import api from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { ICategoriesWithData } from "../types/categoryTypes";

export const useGetCategoryQuery = () => {
  return useQuery({
    queryKey: ["get_category"],
    queryFn: async () => {
      const response = await api.get<ICategoriesWithData>(`/categories/`);
      return response.data;
    },
  });
};
