import { default as cn } from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

export enum IInputTheme {
  GRAY = "gray",
  LIGHT = "light",
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: string;
  classNameInput?: {
    inputClassName: string;
    iconClassName?: string;
  };
  theme?: IInputTheme;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, error, classNameInput, theme, ...props }, ref) => {
    return (
      <div className={styles.inputBlock}>
        <input
          ref={ref}
          className={cn(
            styles.inputField,
            theme && styles[theme],
            classNameInput?.inputClassName
          )}
          placeholder={placeholder}
          {...props}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
