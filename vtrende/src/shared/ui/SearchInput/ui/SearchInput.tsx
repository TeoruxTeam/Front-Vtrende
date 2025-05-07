import searchWithBgIcon from "@/public/searchWithBg.svg";
import Image from "next/image";
import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";
import Input, { IInputTheme } from "../../Input/Input";
import styles from "./SearchInput.module.scss";

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  inputClassname?: string;
  onButtonClick: () => void;
}

export const SearchInput: FC<ISearchInputProps> = ({
  value,
  onChange,
  placeholder,
  inputClassname = "",
  onButtonClick,
}) => {
  return (
    <div className={styles.searchInput}>
      <Input
        theme={IInputTheme.GRAY}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        classNameInput={{
          inputClassName: inputClassname,
        }}
      />
      <button onClick={onButtonClick}>
        <Image src={searchWithBgIcon} alt="search" width={40} height={40} />
      </button>
    </div>
  );
};
