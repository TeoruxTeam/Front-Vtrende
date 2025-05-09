import callIcon from "@/public/call.svg";
import grayMarkerIcon from "@/public/gray-marker.svg";
import { SocialLinks } from "@/src/entities/Client";
import { IShopInfo } from "@/src/entities/Client/modal";
import { formatPhoneNumber } from "@/src/shared/model";
import { copyTextToClipboard } from "@/src/shared/model/functions/copyToClipboard";
import { Button } from "@/src/shared/ui";
import { IButtonTheme } from "@/src/shared/ui/Button/Button";
import Image from "next/image";
import { FC } from "react";
import styles from "./AdditionalShopInformation.module.scss";

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
                <p className={styles.shopName}>{shopInfo.address}</p>
              </div>
            </div>
            <Button theme={IButtonTheme.CYAN} className={styles.addressButton}>
              Открыть на карте
            </Button>
          </div>
          <div className={styles.addressBlock}>
            <div className={styles.address}>
              <Image src={callIcon} alt="call" width={13} height={13} />
              <div className={styles.addressMainInfo}>
                <p className={styles.shopName}>Наши контакты:</p>
                <p className={styles.shopName}>
                  {formatPhoneNumber(shopInfo?.phone_number)}
                </p>
              </div>
            </div>
            <Button
              theme={IButtonTheme.CYAN}
              className={styles.addressButton}
              onClick={() => copyTextToClipboard(shopInfo.phone_number, "Номер скопирован")}
            >
              Позвонить
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.schedule}>dsa</div>
    </div>
  );
};
