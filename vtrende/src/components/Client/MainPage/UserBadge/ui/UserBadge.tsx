"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import defaultUserIcon from "@/public/defaultUserAvatar.svg";
import { useGetMe } from "@/src/entities/Client/modal/hooks/getMe";
import classNames from "classnames";
import Image from "next/image";
import { IAuthClientModalType } from "../../../Auth/AuthModal/ui/AuthModal";
import styles from "./UserBadge.module.scss";

export const UserBadge = ({
  onOpenModal,
}: {
  onOpenModal: (type?: IAuthClientModalType) => void;
}) => {
  const { data } = useGetMe();

  if (data?.data?.email) {
    return (
      <div className={styles.profile}>
        <Image
          src={data?.data.avatar ?? defaultUserIcon}
          alt="user icon"
          width={35}
          height={35}
          className={classNames(
            styles.userAvatar,
            data?.data.avatar && styles.userAvatarInfo
          )}
        />
        <p className={styles.userName}>{data.data.email}</p>
      </div>
    );
  }

  return (
    <div className={styles.profile}>
      <Image
        src={defaultUserIcon}
        alt="user icon"
        width={35}
        height={35}
        className={styles.userAvatar}
      />
      <button className={styles.userName} onClick={() => onOpenModal()}>
        Зарегестрируйтесь
      </button>
    </div>
  );
};
