"use client";
import { ProductCard, SkeletonProductCardBlock } from "@/src/entities/Client";
import {
  IShopInfo,
  useGetCategoryQuery,
  useGetShopItemsQuery,
} from "@/src/entities/Client/modal";
import { Routes } from "@/src/shared/routes/routes";
import { sortFilterData, SortSelect } from "@/src/shared/ui";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { CategoryFilter } from "../CategoryFilter/ui/CategoryFilter";
import styles from "./CatalogBlockShopPage.module.scss";

interface ICatalogBlockShopPageProps {
  shop_id: IShopInfo["id"];
}

export const CatalogBlockShopPage: FC<ICatalogBlockShopPageProps> = ({
  shop_id,
}) => {
  const navigate = useRouter();
  const { data } = useGetCategoryQuery();
  const { shopItems, isLoading, loadingMoreRef, setFilters, filters } =
    useGetShopItemsQuery({
      shop_id,
    });

  const onCardClick = (itemId: number) => {
    navigate.push(`${Routes.PRODUCT}/${itemId}`);
  };

  return (
    <div className={styles.shopItems}>
      <div className={styles.filters}>
        <div className={styles.filtersInfo}>
          <CategoryFilter
            select_data={data ?? { data: [] }}
            category_title="Категории"
            default_text="Выберите категорию"
            setFilters={setFilters}
            price_select={false}
            filters={filters}
          />
          <CategoryFilter
            select_data={data ?? { data: [] }}
            category_title="Цена"
            default_text="Выберите цену"
            setFilters={setFilters}
            price_select
            filters={filters}
          />
        </div>
        <div className={styles.sort}>
          <SortSelect
            defaultText="Сортировка"
            selectData={sortFilterData}
            setFilters={setFilters}
            filterKey="sort_by"
          />
        </div>
      </div>
      <div className={styles.items}>
        {isLoading ? (
          <SkeletonProductCardBlock />
        ) : shopItems.length > 0 ? (
          <ProductCard
            items={shopItems}
            className={styles.items}
            onCardClick={onCardClick}
          />
        ) : (
          <p className={styles.nothingItems}>Товаров не найдено</p>
        )}
        <div
          style={{
            height: "1px",
          }}
          ref={loadingMoreRef}
        />
      </div>
    </div>
  );
};
