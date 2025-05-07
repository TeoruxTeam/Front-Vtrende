"use client";
import classNames from "classnames";
import { forwardRef, ReactNode, Ref } from "react";
import styles from "./InputWithTwoIcons.module.scss";

interface InputWithTwoIconsProps {
  placeholder?: string;
  inputClassname?: string;
  containerClassname?: string;
  firstElement?: ReactNode;
  secondElement?: ReactNode;
  disabled?: boolean;
}

export const InputWithTwoIcons = forwardRef<
  HTMLInputElement,
  InputWithTwoIconsProps
>(
  (
    {
      placeholder = "",
      inputClassname,
      containerClassname,
      firstElement,
      secondElement,
      disabled = false,
    },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={classNames(styles.container, containerClassname)}>
        {firstElement && (
          <span className={styles.firstElement}>{firstElement}</span>
        )}
        <input
          type="text"
          placeholder={placeholder}
          className={inputClassname}
          disabled={disabled}
          ref={ref}
        />
        {secondElement && (
          <span className={styles.secondElement}>{secondElement}</span>
        )}
      </div>
    );
  }
);

InputWithTwoIcons.displayName = "InputWithTwoIcons";
