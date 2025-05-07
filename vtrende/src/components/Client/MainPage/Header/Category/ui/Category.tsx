// "use client"
import catalogIcon from "@/public/catalog.svg";
import Image from "next/image";
import styles from "./Category.module.scss";

export const Category = () => {
  // const [openCategory,setOpenCategory] = useState(false)

  return (
    <button className={styles.category}>
      <Image src={catalogIcon} alt="catalog" width={18} height={18} />
      <p className={styles.text}>Каталог</p>
    </button>
  );
};
