import callIcon from "@/public/call.svg";
import grayMarkerIcon from "@/public/gray-marker.svg";
import { SocialLinks } from "@/src/entities/Client";
import { IShopInfo } from "@/src/entities/Client/modal";
import { formatPhoneNumber } from "@/src/shared/model";
import { copyTextToClipboard } from "@/src/shared/model/functions/copyToClipboard";
import { Button } from "@/src/shared/ui";
import { IButtonTheme } from "@/src/shared/ui/Button/Button";
import { Modal } from "@/src/shared/ui/Modal/Modal";
import classNames from "classnames";
import Image from "next/image";
import { FC, useState } from "react";
import { ShopMapInfo } from "../ShopMapInfo/ui/ShopMapInfo";
import styles from "./AdditionalShopInformation.module.scss";

interface IShopInfoProps {
  shopInfo: IShopInfo;
}

function getWeekDay(date: Date) {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  return days[date.getDay()];
}

export const AdditionalShopInformation: FC<IShopInfoProps> = ({ shopInfo }) => {
  const [openMap, setOpenMap] = useState(false);

  const scheduleItems = [
    { day: "ПН", time: shopInfo.schedule.monday },
    { day: "ВТ", time: shopInfo.schedule.tuesday },
    { day: "СР", time: shopInfo.schedule.wednesday },
    { day: "ЧТ", time: shopInfo.schedule.thursday },
    { day: "ПТ", time: shopInfo.schedule.friday },
    { day: "СБ", time: shopInfo.schedule.saturday },
    { day: "ВС", time: shopInfo.schedule.sunday },
  ];

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
            <Button
              theme={IButtonTheme.CYAN}
              className={styles.addressButton}
              onClick={() => setOpenMap(true)}
              disabled={!shopInfo.lat && !shopInfo.lng}
            >
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
              onClick={() =>
                copyTextToClipboard(shopInfo.phone_number, "Номер скопирован")
              }
            >
              Позвонить
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.schedule}>
        <p className={styles.title}>График работы</p>
        <div className={styles.chart}>
          {scheduleItems.map(({ day, time }) => (
            <p
              key={day}
              className={classNames(
                styles.date,
                getWeekDay(new Date()) === day && styles.activeDate,
                time === "closed" && styles.closed
              )}
            >
              {day}: {time}
            </p>
          ))}
        </div>
      </div>
      {openMap && (
        <Modal
          isOpen={openMap}
          onClose={() => {
            setOpenMap(false);
          }}
        >
          <ShopMapInfo latitude={shopInfo.lat} longitude={shopInfo.lng} address={shopInfo.address} />
        </Modal>
      )}
    </div>
  );
};
