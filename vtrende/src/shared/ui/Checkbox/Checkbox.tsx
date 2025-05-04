import checkIcon from "@/public/check.svg";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  label?: string;
  error?: string;
  register?: UseFormRegisterReturn;
  className?: string;
  link?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ register, className }) => {
  return (
    <label className={classNames(styles.checkboxContainer, className)}>
      <input type="checkbox" {...register} className={styles.checkbox} />
      <span className={styles.checkmark}>
        <Image src={checkIcon} alt="check icon" width={13} height={13} />
      </span>
    </label>
  );
};
