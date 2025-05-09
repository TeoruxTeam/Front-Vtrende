import { CSSProperties, FC } from "react";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
  borderRadius?: string | number;
  disableAnimation?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({
  width,
  height,
  className = "",
  style = {},
  borderRadius,
  disableAnimation = false,
}) => {
  return (
    <div
      className={`${styles.skeleton} ${disableAnimation ? "" : styles.shimmer} ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
    />
  );
};