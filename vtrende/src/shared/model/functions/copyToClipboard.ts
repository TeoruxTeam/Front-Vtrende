import toast from "react-hot-toast";
import { defaultDuration } from "../defaultStyles/defaultStyles";

export const copyTextToClipboard = async (text: string, successText?: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(successText ?? "Ссылка скопирована", {
      duration: defaultDuration,
    });
  } catch {
    toast.error("Что-то пошло не так", {
      duration: defaultDuration,
    });
  }
};
