import starIcon from "@/public/star.svg";
import classNames from "classnames";
import Image from "next/image";
import { IProduct } from "../../modal";
import styles from "./RatingBlock.module.scss";

export const RatingBlock = ({
  rating,
  className,
  width = 10,
  height = 10,
}: {
  rating: IProduct["shop_rating"];
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className={styles.shopRating}>
      <Image src={starIcon} alt="star" width={width} height={height} />
      <p className={classNames(styles.rating, className)}>{rating}</p>
    </div>
  );
};
