export const formatNumberThousands = (
  num: number,
  separator: string = "."
): string => {
  const str = num.toString();

  if (str.length <= 2) return str; 

  const lastTwo = str.slice(-2);
  const remaining = str.slice(0, -2);

  const formattedRemaining = remaining.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    separator
  );

  return `${formattedRemaining}.${lastTwo}`;
};
