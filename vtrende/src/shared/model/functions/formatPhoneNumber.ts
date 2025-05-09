export const formatPhoneNumber = (
  phoneNumber: string,
  format: string = '+7 (XXX) XXX-XX-XX'
): string => {
  // Оставляем только цифры
  const cleaned = phoneNumber?.replace(/\D/g, '');
  
  // Для российских номеров (начинающихся с 7 или 8)
  if (/^[78]/.test(cleaned)) {
    const match = cleaned.match(/^([78])(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+7 (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }
  }
  
  // Международные номера (если начинается не с 7/8)
  if (cleaned?.length > 0) {
    // Создаем массив символов для подстановки
    const digits = cleaned?.split('');
    let result = format;
    
    // Заменяем все X на цифры по порядку
    for (let i = 0; i < digits.length; i++) {
      result = result.replace('X', digits[i]);
    }
    
    // Удаляем оставшиеся X
    return result.replace(/X/g, '');
  }
  
  // Если номер не распознан, возвращаем исходный
  return phoneNumber;
};