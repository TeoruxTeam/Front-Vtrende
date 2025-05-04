export const validationRules = {
  email: {
    required: "Введите почту",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Некорректный email",
    },
  },
  password: {
    required: "Введите пароль",
    minLength: {
      value: 8,
      message: "Пароль должен содержать минимум 8 символов",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      message: "Пароль должен содержать хотя бы одну букву и одну цифру",
    },
  },
  name: {
    required: "Введите имя",
    minLength: {
      value: 3,
      message: "Имя должно содержать минимум 3 буквы",
    },

    maxLength: {
      value: 50,
      message: "Имя не может содержать больше 50 символов",
    },
  },
};
