export const sortFilterData = {
  data: [
    {
      id: "1",
      sort_by: "price" as const,
      sort_order: "asc" as const,
      name: "Дешевле",
    },
    {
      id: "2",
      sort_by: "price" as const,
      sort_order: "desc" as const,
      name: "Дороже",
    },
    {
      id: "3",
      sort_by: "created_at" as const,
      sort_order: "desc" as const,
      name: "По дате (сначала новые)",
    },
    {
      id: "4",
      sort_by: "created_at" as const,
      sort_order: "asc" as const,
      name: "По дате (сначала старые)",
    },
  ],
};
