/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defaultYandexMapHeight,
  YANDEX_MAP_API_KEY,
} from "@/src/shared/const/map";
import {
  GeolocationControl,
  Map,
  Placemark,
  SearchControl,
  YMaps,
} from "@pbe/react-yandex-maps";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import styles from "./Map.module.scss";
import markerIcon from '@/public/mapMarker.svg'

interface IYandexMapProps {
  classMapContainer?: string;
  latitude: number;
  longitude: number;
}

export const YandexMap: FC<IYandexMapProps> = React.memo(
  ({ classMapContainer, latitude, longitude }) => {
    const navigate = useRouter();

    const handleButtonClick = (companyId: string | number) => {
      navigate.push(`recording_for_diagnostic/companyRecording/${companyId}`);
    };

    React.useEffect(() => {
      (window as any).handleButtonClick = handleButtonClick;
      return () => {
        delete (window as any).handleButtonClick;
      };
    }, []);

    return (
      <YMaps
        query={{ apikey: YANDEX_MAP_API_KEY, lang: "ru_RU", mode: "release" }}
      >
        <div
          className={classNames(styles.mapContainer, classMapContainer)}
          style={{ height: defaultYandexMapHeight }}
        >
          <Map
            defaultState={{
              center: [latitude, longitude],
              zoom: 15,
            }}
            width="100%"
            height={defaultYandexMapHeight}
          >
            <GeolocationControl options={{ float: "left" }} />
            <SearchControl
              options={{
                float: "left",
                placeholderContent: "Адрес или объект",
              }}
            />
            <Placemark geometry={[latitude, longitude]} options={{
                    iconLayout: "default#image",
                    iconImageHref: markerIcon?.src || "",
                    iconImageSize: [25, 25],
                    iconImageOffset: [0, 0],
                    balloonMaxWidth: 400,
                    balloonMaxHeight: 800,
                  }} />
          </Map>
        </div>
      </YMaps>
    );
  }
);

YandexMap.displayName = "YandexMap";