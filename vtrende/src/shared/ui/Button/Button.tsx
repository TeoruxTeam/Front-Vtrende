import classNames from "classnames";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

export enum IButtonTheme {
  BLUE = "blue",
  GRAY = "gray",
  WHITE = "white",
  CYAN = "cyan",
}

export enum IButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  ROUND = "round",
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: IButtonTheme;
  className?: string;
  type?: "submit" | "reset" | "button";
  size?: IButtonSize;
}

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  theme,
  size,
  type = "button",
  ...other
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        theme && styles[theme],
        size && styles[size],
        className
      )}
      {...other}
      type={type}
    >
      {children}
    </button>
  );
};
