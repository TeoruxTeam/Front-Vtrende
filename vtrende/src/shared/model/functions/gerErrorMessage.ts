import toast from "react-hot-toast";
import { defaultToastStyles } from "../defaultStyles/defaultStyles";

const errorMessages: Record<string, string> = {
  "error.auth.invalid.credentials": "données incorrectes",
  "error.validation.value_error.phone_number": "numéro de téléphone incorrect",
  "error.auth.user.exists": "un tel utilisateur existe déjà",
  "error.account.verification_already_in_progress": "Проверка уже началась",
};

export const getErrorMessage = (errorCode: string) => {
  toast.error(errorMessages[errorCode] || "Quelque chose a mal tourné", {
    style: defaultToastStyles,
    duration: 3000,
  });
};
