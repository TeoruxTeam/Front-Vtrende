/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FC, useEffect, useRef, useState } from "react";
import { Button, IButtonTheme } from "../../Button/Button";
import Input, { IInputTheme } from "../../Input/Input";
import styles from "./PriceRangeFilter.module.scss";

interface PriceRangeFilterProps {
  initialFrom?: number | null;
  initialTo?: number | null;
  onSave: (from: number | null, to: number | null) => void;
  onClose: () => void;
  currency?: string;
  triggerRef?: React.RefObject<HTMLElement>;
}

export const PriceRangeFilter: FC<PriceRangeFilterProps> = ({
  initialFrom = null,
  initialTo = null,
  onSave,
  onClose,
  currency = "$",
  triggerRef,
}) => {
  const [from, setFrom] = useState<string>(initialFrom?.toString() || "");
  const [to, setTo] = useState<string>(initialTo?.toString() || "");
  const [isInvalid, setIsInvalid] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFrom(initialFrom?.toString().replace(/^0+/, "") || "");
    setTo(initialTo?.toString().replace(/^0+/, "") || "");
  }, [initialFrom, initialTo]);

  useEffect(() => {
    validateInputs();
  }, [from, to]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideFilter = filterRef.current && !filterRef.current.contains(target);
      const isOutsideTrigger = triggerRef?.current && !triggerRef.current.contains(target);

      if (isOutsideFilter && (!triggerRef || isOutsideTrigger)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, triggerRef]);

  const validateInputs = () => {
    const numFrom = from ? parseFloat(from) : null;
    const numTo = to ? parseFloat(to) : null;

    const hasInvalidFrom = numFrom !== null && isNaN(numFrom);
    const hasInvalidTo = numTo !== null && isNaN(numTo);
    const isRangeInvalid =
      numFrom !== null && numTo !== null && numFrom > numTo;

    setIsInvalid(hasInvalidFrom || hasInvalidTo || isRangeInvalid);
  };

  const formatInputValue = (value: string): string => {
    const cleaned = value.replace(/[^0-9]/g, "");
    return cleaned.replace(/^0+(?!$)/, "");
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatInputValue(e.target.value);
    setFrom(formattedValue);
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatInputValue(e.target.value);
    setTo(formattedValue);
  };

  const handleSave = () => {
    const numFrom = from ? parseFloat(from) : null;
    const numTo = to ? parseFloat(to) : null;
    onSave(numFrom, numTo);
  };

  return (
    <div ref={filterRef} className={styles.priceRangeFilter}>
      <p className={styles.title}>Цена, {currency}</p>
      <div className={styles.inputs}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>От</label>
          <div className={styles.inputWrapper}>
            <Input
              theme={IInputTheme.BLUE}
              type="text"
              value={from}
              onChange={handleFromChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>До</label>
          <div className={styles.inputWrapper}>
            <Input
              theme={IInputTheme.BLUE}
              type="text"
              value={to}
              onChange={handleToChange}
              className={styles.input}
            />
          </div>
        </div>
      </div>

      <Button
        className={styles.saveButton}
        onClick={handleSave}
        disabled={isInvalid}
        theme={IButtonTheme.BLUE}
      >
        Сохранить
      </Button>
    </div>
  );
};