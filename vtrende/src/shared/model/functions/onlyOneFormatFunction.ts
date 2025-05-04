export const allowOnlyNumbers = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
};

export const allowOnlyLetters = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
};