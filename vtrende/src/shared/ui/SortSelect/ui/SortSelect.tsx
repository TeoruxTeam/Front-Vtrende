"use client";
import { IItemsFilters } from "@/src/entities/Client/modal/hooks/getShopItems";
import ArrowDown from "@/src/shared/model/icons/ArrowDown";
import { Select } from "@/src/shared/ui/Select/Select";
import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import styles from "./SortSelect.module.scss";

interface IOption {
  id: number | string;
  name: string;
  sort_by?: "created_at" | "price";
  sort_order?: "asc" | "desc";
}

interface IFilterData {
  data: IOption[];
}

interface SortSelectProps {
  defaultText: string;
  selectData: IFilterData;
  setFilters: Dispatch<SetStateAction<IItemsFilters>>;
  filterKey: keyof IItemsFilters;
  value?: number | string;
  onChange?: (value: number | string | undefined) => void;
  className?: string;
}

export const SortSelect: FC<SortSelectProps> = ({
  defaultText,
  selectData,
  setFilters,
  filterKey,
  value: propValue,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<
    number | string | undefined
  >(propValue ?? "");
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleValueChange = (value: number | string | undefined) => {
    if (selectedValue === value) {
      setSelectedValue("");
      setFilters((prev) => ({
        ...prev,
        [filterKey]: null,
        sort_by: null,
        sort_order: null,
      }));
      if (onChange) {
        onChange(undefined);
      }
    } else {
      setSelectedValue(value);
      const selectedOption = selectData.data.find((item) => item.id === value);
      if (filterKey === "sort_by" && selectedOption) {
        setFilters((prev) => ({
          ...prev,
          sort_by: selectedOption.sort_by || null,
          sort_order: selectedOption.sort_order || null,
        }));
      } else {
        setFilters((prev) => ({
          ...prev,
          [filterKey]: value === undefined || value === "" ? null : String(value),
        }));
      }
      if (onChange) {
        onChange(value);
      }
    }
    setIsOpen(false);
  };

  const displayText =
    selectedValue !== undefined && selectedValue !== ""
      ? selectData.data.find(
          (item) => String(item.id) === String(selectedValue)
        )?.name || defaultText
      : defaultText;

  return (
    <div
      className={
        className ? `${styles.dropdown} ${className}` : styles.dropdown
      }
    >
      <button
        ref={triggerRef}
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{displayText}</p>
        <span className={styles.arrowWrapper}>
          <ArrowDown
            fill="#575757"
            width={10}
            height={10}
            className={isOpen ? styles.arrowUp : styles.arrowDown}
          />
        </span>
      </button>
      {isOpen && (
        <Select
          isOpen={isOpen}
          setOpen={setIsOpen}
          options={selectData.data}
          valueKey="id"
          labelKey="name"
          value={selectedValue}
          onChange={handleValueChange}
          className={styles.select}
          triggerRef={triggerRef}
        />
      )}
    </div>
  );
};