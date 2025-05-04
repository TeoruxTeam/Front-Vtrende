import classNames from "classnames";
import { FC } from "react";
import styles from "./SelectOption.module.scss";

interface SelectOptionProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  className?: {
    selectOptionStyles?: string;
    activeIndicatorButton?: string;
    toggleButtonStyles?: string
  };
}

export const SelectOption: FC<SelectOptionProps> = ({
  options,
  selected,
  onChange,
  className,
}) => {
  return (
    <div
      className={classNames(styles.selectOption, className?.selectOptionStyles)}
    >
      <div
        className={classNames(
          styles.activeIndicator,
          className?.activeIndicatorButton
        )}
        style={{
          left: `${options.indexOf(selected) * 50}%`,
          width: `${100 / options.length}%`,
        }}
      />
      {options.map((option) => (
        <button
          key={option}
          className={classNames(
            styles.toggleButton,
            selected === option && styles.active,
            className?.toggleButtonStyles
          )}
          type="button"
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
