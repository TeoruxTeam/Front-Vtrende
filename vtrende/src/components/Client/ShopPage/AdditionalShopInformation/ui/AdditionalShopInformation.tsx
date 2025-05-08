import grayMarkerIcon from "@/public/gray-marker.svg";
import { SocialLinks } from "@/src/entities/Client";
import { IShopInfo } from "@/src/entities/Client/modal";
import { Button } from "@/src/shared/ui";
import { IButtonTheme } from "@/src/shared/ui/Button/Button";
import Image from "next/image";
import { FC } from "react";
import styles from "./AdditionalShopInformation.module.scss";
import callIcon from '@/public/call.svg';

interface IShopInfoProps {
  shopInfo: IShopInfo;
}

export const AdditionalShopInformation: FC<IShopInfoProps> = ({ shopInfo }) => {
  return (
    <div className={styles.additionalShopInformation}>
      <div className={styles.additional}>
        <p className={styles.description}>{shopInfo.description}</p>
        <SocialLinks socialLinks={shopInfo.socials} />
        <div className={styles.addressInfo}>
          <div className={styles.addressBlock}>
            <div className={styles.address}>
              <Image
                src={grayMarkerIcon}
                alt="location"
                width={13}
                height={13}
              />
              <div className={styles.addressMainInfo}>
                <p className={styles.shopName}>Наш адрес:</p>
                <p className={styles.shopName}>{shopInfo.name}</p>
              </div>
            </div>
            <Button theme={IButtonTheme.CYAN} className={styles.addressButton}>
              Открыть на карте
            </Button>
          </div>
          <div className={styles.addressBlock}>
            <div className={styles.address}>
              <Image
                src={callIcon}
                alt="call"
                width={13}
                height={13}
              />
              <div className={styles.addressMainInfo}>
                <p className={styles.shopName}>Наши контакты:</p>
                <p className={styles.shopName}>{shopInfo.name}</p>
              </div>
            </div>
            <Button theme={IButtonTheme.CYAN} className={styles.addressButton}>
              Позвонить
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.schedule}>dsa</div>
    </div>
  );
};
