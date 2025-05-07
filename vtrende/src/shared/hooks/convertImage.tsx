import defaultImage from "@/public/defaultUserAvatar.svg";
import Image from "next/image";
import { FC } from "react";
import { API_BASE_URL } from "../api/api";

interface IConvertImage {
  url: string | null;
  alt?: string;
  width?: number;
  height?: number;
}

export const ConvertImage: FC<IConvertImage> = ({
  url,
  alt = "image",
  width = 24,
  height = 24,
}) => {
  const imageRender = url ? `${API_BASE_URL}${url}` : defaultImage.src;

  return <Image src={imageRender} alt={alt} width={width} height={height} />;
};