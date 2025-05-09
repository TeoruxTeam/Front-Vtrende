import defaultImage from "@/public/defaultUserAvatar.svg";
import Image, { ImageProps } from "next/image";
import { FC } from "react";
import { API_BASE_URL } from "../api/api";

interface FillProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  url: string | null;
  alt?: string;
  fill: true;
  width?: never;
  height?: never;
}

interface SizeProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  url: string | null;
  alt?: string;
  fill?: false;
  width: number;
  height: number;
}

type IConvertImage = FillProps | SizeProps;

export const ConvertImage: FC<IConvertImage> = ({
  url,
  alt = "image",
  width = 24,
  height = 24,
  fill,
  ...imageProps
}) => {
  const imageRender = url ? `${API_BASE_URL}${url}` : defaultImage.src;

  return (
    <Image
      src={imageRender}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      {...imageProps}
    />
  );
};
