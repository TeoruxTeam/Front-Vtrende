import classNames from "classnames";
import React from "react";
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  progress: number; // Процент заполнения (0-100)
  width?: string; // Ширина прогресс-бара (например, "100%", "300px")
  height?: string; // Высота прогресс-бара (например, "10px", "1rem")
  backgroundColor?: string; // Цвет фона (незаполненной части)
  fillColor?: string; // Цвет заполненной части
  showPercentage?: boolean; // Показывать процент внутри прогресс-бара
  className?: string; // Дополнительный класс для кастомизации
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  width = "100%",
  height = "10px",
  backgroundColor = "#e0e0e0",
  fillColor = "#465FF1",
  showPercentage = false,
  className = "",
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className={classNames(styles.progressBarContainer, className)}
      style={{ width, height, backgroundColor }}
    >
      <div
        className={styles.progressFill}
        style={{
          width: `${clampedProgress}%`,
          backgroundColor: fillColor,
        }}
      >
        {showPercentage && (
          <span className={styles.percentageText}>{clampedProgress}%</span>
        )}
      </div>
    </div>
  );
};
