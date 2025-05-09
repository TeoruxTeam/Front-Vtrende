import { Categories } from "@/src/entities/Client/modal";
import api from "@/src/shared/api/api";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoryQuery = () => {
  return useQuery({
    queryKey: ["get_category"],
    queryFn: async () => {
      const response = await api.get<Categories>(`/categories/`);
      return response.data;
    },
  });
};
