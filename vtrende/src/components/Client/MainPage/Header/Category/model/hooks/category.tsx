import { useEffect, useState } from "react";
import { useGetCategoryQuery } from "../api/query/getCategory";

export const useCategory = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { data } = useGetCategoryQuery();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    openCategory,
    setOpenCategory,
    categories: data,
    isMounted,
  };
};
