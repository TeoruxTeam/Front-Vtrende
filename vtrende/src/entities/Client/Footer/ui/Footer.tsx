import facebookIcon from "@/public/footer/facebook.svg";
import tgIcon from "@/public/footer/tg.svg";
import vkIcon from "@/public/footer/vk.svg";
import whatsAppIcon from "@/public/footer/whatsapp.svg";
import Image from "next/image";
import Link from "next/link";
import { LogoBlock } from "../../LogoBlock/ui/LogoBlock";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <LogoBlock className={styles.logoBlockStyles} />
      <div className={styles.text}>
        <button>Условия использования</button>
        <button>Политика конфиденциальности</button>
        <button>Контакты</button>
        <button>Мобильное приложение</button>
      </div>
      <div className={styles.links}>
        <Link href="/">
          <Image
            src={whatsAppIcon}
            width={32}
            height={32}
            alt="whatsapp icon"
          />
        </Link>
        <Link href="/">
          <Image
            src={facebookIcon}
            width={32}
            height={32}
            alt="whatsapp icon"
          />
        </Link>
        <Link href="/">
          <Image src={vkIcon} width={32} height={32} alt="whatsapp icon" />
        </Link>
        <Link href="/">
          <Image src={tgIcon} width={32} height={32} alt="whatsapp icon" />
        </Link>
      </div>
    </div>
  );
};
