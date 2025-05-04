import { forwardRef, InputHTMLAttributes } from "react";
import Input, { IInputTheme } from "../../Input/Input";
import styles from "./InputWithLabel.module.scss";

interface IInputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  error?: string;
}

const InputWithLabel = forwardRef<HTMLInputElement, IInputWithLabelProps>(
  ({ label, placeholder, error, ...props }, ref) => {
    return (
      <div className={styles.inputWithLabel}>
        <p className={styles.label}>{label}</p>
        <Input
          ref={ref}
          placeholder={placeholder}
          theme={IInputTheme.LIGHT}
          error={error}
          {...props}
        />
      </div>
    );
  }
);

InputWithLabel.displayName = "InputWithLabel";

export default InputWithLabel;
