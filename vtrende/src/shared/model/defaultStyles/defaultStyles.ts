/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CSSProperties } from "react";
import toast from "react-hot-toast";

export const defaultToastStyles = {
  background: "rgba(70, 95, 241, 1)",
  color: "rgba(255, 255, 255, 1)",
  textAlign: "center",
  backdropFilter: "blur(10px)",
} as CSSProperties;

export const defaultAdminToastStyles = {
  background: "rgb(54, 55, 64)",
  color: "rgba(217, 217, 217)",
  textAlign: "center",
  backdropFilter: "blur(10px)",
  position: "relative",
} as CSSProperties;

export const defaultDuration = 1000;

export const showCustomToast = (
  message: string,
  type: "success" | "error" | "info"
) => {
  //@ts-ignore
  toast[type](message, {
    style: defaultToastStyles,
  });
};
