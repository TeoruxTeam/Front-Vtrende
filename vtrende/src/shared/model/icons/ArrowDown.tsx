import React from "react";

interface ArrowDownProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({
  width = 35,
  height = 35,
  fill = "#656565",
  className,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.244.744c-.3.3-.323.773-.07 1.1l.07.079 4.167 4.166c.3.3.773.324 1.1.07l.078-.07 4.167-4.166a.833.833 0 00-1.1-1.248l-.079.07L5 4.32 1.423.744a.833.833 0 00-1.1-.07l-.079.07z"
      fill={fill}
    />
  </svg>
);

export default ArrowDown;