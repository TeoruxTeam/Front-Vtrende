import React from "react";

interface LikeIconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
}

const LikeIcon: React.FC<LikeIconProps> = ({
  width = 35,
  height = 35,
  fill = "transparent",
  // className,
}) => (
  <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.361 3.217a2.75 2.75 0 00-3.89 0l-.53.53-.53-.53a2.75 2.75 0 10-3.89 3.89l.53.53 3.89 3.89 3.89-3.89.53-.53a2.75 2.75 0 000-3.89v0z"
      stroke="#0047AB"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LikeIcon;
