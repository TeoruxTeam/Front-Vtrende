import React, { useState } from "react";
import styles from "./Select.module.css";

interface SelectProps {
  options: string[];
  defaultOption?: string;
  icon?: string;
  onChange?: (selected: string) => void; 
}

export const Select: React.FC<SelectProps> = ({
  options,
  defaultOption,
  icon,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultOption || options[0] || "");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className={styles.select}>
      <div className={styles.selectHeader} onClick={() => setIsOpen(!isOpen)}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.selected}>{selected}</span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className={styles.selectList}>
          {options.map((option) => (
            <li
              key={option}
              className={styles.selectItem}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};