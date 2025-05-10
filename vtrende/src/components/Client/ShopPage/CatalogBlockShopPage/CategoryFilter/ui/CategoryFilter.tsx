import { IItemsFilters } from "@/src/entities/Client/modal/hooks/getShopItems";
import { ICategoriesWithData } from "@/src/entities/Client/modal/types/categoryTypes";
import ArrowDown from "@/src/shared/model/icons/ArrowDown";
import { PriceRangeFilter } from "@/src/shared/ui";
import { Select } from "@/src/shared/ui/Select/Select";
import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import styles from "./CategoryFilter.module.scss";

interface ICategoryFilter {
  category_title: string;
  default_text: string;
  select_data: ICategoriesWithData;
  setFilters: Dispatch<SetStateAction<IItemsFilters>>;
  price_select: boolean;
  filters: IItemsFilters;
}

export const CategoryFilter: FC<ICategoryFilter> = ({
  category_title,
  default_text,
  select_data,
  setFilters,
  price_select,
  filters
}) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | string>("");
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleCategoryChange = (value: number | string) => {
    setSelectedCategory(value);
    if (selectedCategory === value) {
      setFilters((prev) => ({
        ...prev,
        category_id: null,
      }));
      setSelectedCategory("");
    } else {
      setFilters((prev) => ({
        ...prev,
        category_id: value === "" ? null : String(value),
      }));
    }
  };

  const displayText = price_select
    ? filters.price_from !== null || filters.price_to !== null
      ? `${filters.price_from !== null ? "$" + filters.price_from : ""}${
          filters.price_from !== null && filters.price_to !== null ? " - " : ""
        }${filters.price_to !== null ? "$" + filters.price_to : ""}`
      : default_text
    : selectedCategory !== ""
    ? select_data.data.find(
        (category) => category.id === Number(selectedCategory)
      )?.name || default_text
    : default_text;

  const handlePriceFilterSave = (
    priceFrom: number | null,
    priceTo: number | null
  ) => {
    setFilters((prev) => ({
      ...prev,
      price_from: priceFrom,
      price_to: priceTo,
    }));
    setOpenSelect(false)
  };

  return (
    <div className={styles.filter}>
      <p className={styles.title}>{category_title}</p>
      <button
        ref={triggerRef}
        className={styles.categoryBlock}
        onClick={() => setOpenSelect(!openSelect)}
      >
        <p>{displayText}</p>
        <span className={styles.arrowWrapper}>
          <ArrowDown
            fill="#575757"
            width={10}
            height={10}
            className={openSelect ? styles.arrowUp : styles.arrowDown}
          />
        </span>
      </button>
      {openSelect && !price_select && (
        <Select
          isOpen={openSelect}
          setOpen={setOpenSelect}
          options={select_data.data}
          valueKey="id"
          labelKey="name"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.select}
          triggerRef={triggerRef}
        />
      )}
      {openSelect && price_select && (
        <PriceRangeFilter
          onClose={() => setOpenSelect(false)}
          initialFrom={filters.price_from || null}
          initialTo={filters.price_to || null}
          onSave={handlePriceFilterSave}
          currency="$"
          triggerRef={triggerRef}
        />
      )}
    </div>
  );
};
