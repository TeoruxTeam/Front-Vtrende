import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./HeaderValueInput.module.scss";
import classNames from "classnames";

interface InputProps {
  label: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  icon?: string;
  iconClick?: () => void;
  register?: UseFormRegisterReturn;
  error?: string;
}

export const HeaderValueInput = ({
  label,
  value,
  onChange,
  icon,
  iconClick,
  register,
  error,
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelWrapper}>
        <span className={styles.label}>{label}</span>
        <div className={styles.labelLine}></div>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={classNames(styles.input, error && styles.errors)}
          {...register}
        />
        {icon && (
          <button className={styles.icon} onClick={iconClick} type="button">
            <Image src={icon} alt="icon" width={14} height={14} />
          </button>
        )}
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};
