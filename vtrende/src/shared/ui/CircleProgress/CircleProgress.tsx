import arrow from "@/public/admin/Arrow.svg";
import Image from "next/image";
import React from "react";

interface CircleProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  progress,
  size = 50,
  strokeWidth = 5,
  color = "blue",
  backgroundColor = "#e6e6e6",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ position: "relative" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <Image
        src={arrow}
        alt={arrow}
        width={24}
        height={24}
        style={{ position: "absolute", top: 24, left: 24 }}
      />
    </div>
  );
};

export default CircleProgress;
