/* eslint-disable @typescript-eslint/no-explicit-any */
// Select.tsx
import React, { useEffect, useRef } from "react";
import styles from "./Select.module.scss";

interface SelectProps<T> {
  options: T[];
  valueKey: keyof T;
  labelKey: keyof T;
  value?: T[keyof T];
  onChange: (value: T[keyof T]) => void;
  className?: string;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  triggerRef?: React.RefObject<HTMLElement>;
}

export const Select = <T extends Record<string, any>>({
  options,
  valueKey,
  labelKey,
  value,
  onChange,
  className,
  isOpen,
  setOpen,
  triggerRef,
}: SelectProps<T>): JSX.Element => {
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOnTrigger = triggerRef?.current?.contains(
        event.target as Node
      );
      const clickedOnSelect = selectRef.current?.contains(event.target as Node);

      if (!clickedOnSelect && !clickedOnTrigger) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setOpen, triggerRef]);

  const handleOptionClick = (option: T) => {
    onChange(option[valueKey]);
    setOpen(false);
  };

  return (
    <div
      ref={selectRef}
      className={className ? `${styles.select} ${className}` : styles.select}
    >
      {options.map((option, index) => (
        <div
          key={index}
          className={styles.option}
          onClick={() => handleOptionClick(option)}
          style={{
            backgroundColor:
              value === option[valueKey] ? "#e6f0ff" : "transparent",
          }}
        >
          {option[labelKey] as string}
        </div>
      ))}
    </div>
  );
};
