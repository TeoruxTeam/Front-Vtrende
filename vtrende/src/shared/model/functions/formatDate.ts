export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const today = new Date();

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const todayYear = today.getUTCFullYear();
  const todayMonth = today.getUTCMonth() + 1;
  const todayDay = today.getUTCDate();

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

  if (year === todayYear && month === todayMonth && day === todayDay) {
    return `Сегодня, ${formattedTime}`;
  }

  return `${String(day).padStart(2, "0")}-${String(month).padStart(2, "0")}-${year}, ${formattedTime}`;
};