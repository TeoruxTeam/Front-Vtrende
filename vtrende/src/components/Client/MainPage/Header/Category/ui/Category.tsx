"use client";
import catalogIcon from "@/public/catalog.svg";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Category.module.scss";

interface ServiceCategory {
  id: number;
  name: string;
  subcategories?: string[];
}

export const serviceCategoriesMock: ServiceCategory[] = [
  {
    id: 1,
    name: "IT услуги",
    subcategories: ["Разработка сайтов", "Настройка ПО", "Кибербезопасность"],
  },
  {
    id: 2,
    name: "Грузчики",
    subcategories: [
      "Квартирные переезды",
      "Офисные переезды",
      "Грузоперевозки",
    ],
  },
  {
    id: 3,
    name: "Уборка / Клининг",
    subcategories: ["Генеральная уборка", "Химчистка", "Ежедневная уборка"],
  },
  {
    id: 4,
    name: "Автомобильные услуги",
    subcategories: ["Шиномонтаж", "Авторемонт", "Автомойка"],
  },
  {
    id: 5,
    name: "Няни",
    subcategories: ["Няни на час", "Няни с проживанием", "Няни-педагоги"],
  },
  {
    id: 6,
    name: "Учителя и репетиторы",
    subcategories: [
      "Школьные предметы",
      "Иностранные языки",
      "Подготовка к экзаменам",
    ],
  },
  {
    id: 7,
    name: "Адвокаты",
    subcategories: ["Уголовные дела", "Гражданские дела", "Семейные споры"],
  },
  {
    id: 8,
    name: "Организация мероприятий",
    subcategories: ["Свадьбы", "Корпоративы", "Дни рождения"],
  },
  {
    id: 9,
    name: "Финансы и страхование",
    subcategories: ["Кредиты", "Страхование имущества", "Инвестиции"],
  },
  {
    id: 10,
    name: "Аренда техники",
    subcategories: ["Строительная техника", "Офисная техника", "Спецтехника"],
  },
  {
    id: 11,
    name: "Отдых и туризм",
    subcategories: ["Туры", "Экскурсии", "Авиабилеты"],
  },
  {
    id: 12,
    name: "Фото и видеосъемка",
    subcategories: ["Фотосессии", "Видеосъемка мероприятий", "Аэросъемка"],
  },
  {
    id: 13,
    name: "Баня и сауна",
    subcategories: ["Общественные бани", "Частные сауны", "SPA-комплексы"],
  },
  {
    id: 14,
    name: "Ремонт бытовой техники",
    subcategories: ["Холодильники", "Стиральные машины", "Телевизоры"],
  },
  {
    id: 15,
    name: "Цветы и подарки",
    subcategories: ["Букеты", "Подарочные наборы", "Воздушные шары"],
  },
  {
    id: 16,
    name: "Детские сады",
    subcategories: [
      "Частные детсады",
      "Государственные детсады",
      "Развивающие центры",
    ],
  },
  {
    id: 17,
    name: "Риэлторы",
    subcategories: [
      "Продажа недвижимости",
      "Аренда жилья",
      "Коммерческая недвижимость",
    ],
  },
  {
    id: 18,
    name: "Школы",
    subcategories: ["Общеобразовательные", "Частные", "Спортивные"],
  },
  {
    id: 19,
    name: "Доктора",
    subcategories: ["Терапевты", "Хирурги", "Педиатры"],
  },
  {
    id: 20,
    name: "Спорт",
    subcategories: ["Тренеры", "Спортивные залы", "Секции"],
  },
  {
    id: 21,
    name: "Здоровье и красота",
    subcategories: ["Косметология", "Массаж", "Парикмахерские"],
  },
  {
    id: 22,
    name: "Стоматология",
    subcategories: ["Терапия", "Ортодонтия", "Имплантация"],
  },
  {
    id: 23,
    name: "Юридические услуги",
    subcategories: [
      "Консультации",
      "Составление документов",
      "Представительство в суде",
    ],
  },
  {
    id: 24,
    name: "Кафе и рестораны",
    subcategories: ["Доставка еды", "Кафе", "Рестораны"],
  },
  {
    id: 25,
    name: "Строительство и ремонт",
    subcategories: [
      "Косметический ремонт",
      "Капитальный ремонт",
      "Дизайн интерьеров",
    ],
  },
  {
    id: 26,
    name: "Трактовый бизнес",
    subcategories: ["Грузоперевозки", "Логистика", "Экспедирование"],
  },
  {
    id: 27,
    name: "Другие услуги",
    subcategories: ["Услуги не вошедшие в категории"],
  },
];

export const Category = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Устанавливаем флаг после монтирования компонента
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <button
    className={styles.category}
  >
    <Image src={catalogIcon} alt="catalog" width={18} height={18} />
    <p className={styles.text}>Каталог</p>
  </button>;
  }

  return (
    <div className={styles.categories}>
      <button
        className={styles.category}
        onClick={() => setOpenCategory((prev) => !prev)}
      >
        <Image src={catalogIcon} alt="catalog" width={18} height={18} />
        <p className={styles.text}>Каталог</p>
      </button>
      <div
        className={classNames(styles.select, {
          [styles.activeSelect]: openCategory,
        })}
      >
        {serviceCategoriesMock.map((category) => (
          <button className={styles.categoryName} key={category.id}>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
