import { default as classNames, default as cn } from "classnames";
import Image from "next/image";
import { forwardRef, TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";

export enum ITextareaSize {
  SMALL = "small",
  WITHOUT_PADDING = "without_padding",
}

export enum ITextareaTheme {
  BG_TRANSPARENT = "bg_transparent",
  LIGHT = 'light'
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: string;
  error?: string;
  textareaSize?: ITextareaSize;
  classNameTextarea?: {
    textareaClassName?: string;
    iconClassName?: string;
  };
  theme?: ITextareaTheme;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      placeholder,
      icon,
      error,
      textareaSize,
      classNameTextarea,
      theme,
      ...props
    },
    ref
  ) => {
    return (
      <div className={styles.textareaBlock}>
        {icon && (
          <Image
            alt="icon"
            width={13}
            height={13}
            src={icon}
            className={classNames(
              styles.textareaIcon,
              classNameTextarea?.iconClassName
            )}
          />
        )}
        <textarea
          ref={ref}
          className={cn(
            styles.textareaField,
            theme && styles[theme],
            textareaSize && styles[textareaSize],
            classNameTextarea?.textareaClassName
          )}
          placeholder={placeholder}
          {...props}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
