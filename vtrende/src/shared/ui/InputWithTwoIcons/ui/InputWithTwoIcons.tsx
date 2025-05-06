"use client";
import classNames from "classnames";
import { ChangeEvent, FC, ReactNode } from "react";
import Input from "../../Input/Input";
import styles from "./InputWithTwoIcons.module.scss";

interface InputWithTwoIconsProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputClassname?: string;
  containerClassname?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
}

export const InputWithTwoIcons: FC<InputWithTwoIconsProps> = ({
  placeholder = "",
  inputClassname,
  containerClassname,
  prefix,
  suffix,
  disabled = false,
}) => {
  return (
    <div className={classNames(styles.container, containerClassname)}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <Input
        disabled={disabled}
        placeholder={placeholder}
        classNameInput={{
          inputClassName: inputClassname ?? '',
        }}
      />
      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  );
};
