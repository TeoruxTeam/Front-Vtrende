"use client";

import React, { useRef } from "react";
import styles from "./CodeInput.module.scss";

interface CodeInputProps {
  code: string[];
  setCode: (code: string[]) => void;
}

export const CodeInput: React.FC<CodeInputProps> = ({ code, setCode }) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, ""); // Оставляем только цифры
    if (!value) return;

    const newCode = [...code];
    newCode[index] = value.charAt(0);
    setCode(newCode);

    if (index < code.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newCode = [...code];

      if (newCode[index]) {
        newCode[index] = "";
      } else if (index > 0) {
        newCode[index - 1] = "";
        inputsRef.current[index - 1]?.focus();
      }

      setCode(newCode);
    }
  };

  return (
    <div className={styles.codeContainer}>
      {code.map((char, index) => (
        <input
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          type="text"
          value={char}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}
          className={styles.codeInput}
        />
      ))}
    </div>
  );
};
