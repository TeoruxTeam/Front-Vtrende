import React from "react";
import styles from "./BarChat.module.scss";

interface BarChartProps {
  data: {
    label: string;
    value: number;
    color?: string;
  }[];
  width?: number;
  height?: number;
  barWidth?: number;
  gap?: number;
  showValues?: boolean;
  className?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  width = 400,
  height = 300,
  barWidth = 40,
  gap = 10,
  showValues = false,
  className = "",
}) => {

  const maxValue = Math.max(...data.map((item) => item.value), 1);
  const chartWidth = data.length * (barWidth + gap) - gap;
  const chartHeight = height - 40;

  return (
    <svg
      width={width}
      height={height}
      className={`${styles.barChart} ${className}`}
      viewBox={`0 0 ${chartWidth} ${height}`}
    >
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * chartHeight;
        const x = index * (barWidth + gap);
        const y = chartHeight - barHeight;

        return (
          <g key={item.label}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              fill={item.color || "#465FF1"}
              className={styles.bar}
            />
            {/* Метка под столбцом */}
            <text
              x={x + barWidth / 2}
              y={chartHeight + 15}
              textAnchor="middle"
              className={styles.label}
            >
              {item.label}
            </text>
            {showValues && (
              <text
                x={x + barWidth / 2}
                y={y - 5}
                textAnchor="middle"
                className={styles.value}
              >
                {item.value}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};