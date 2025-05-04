import toast from "react-hot-toast";
import {
  defaultDuration,
  defaultToastStyles,
} from "../defaultStyles/defaultStyles";

export const copyTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Текст скопирован", {
      style: defaultToastStyles,
      duration: defaultDuration,
    });
  } catch {
    toast.error("Что-то пошло не так", {
      style: defaultToastStyles,
      duration: defaultDuration,
    });
  }
};
