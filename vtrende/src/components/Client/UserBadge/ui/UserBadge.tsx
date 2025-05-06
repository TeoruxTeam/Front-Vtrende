/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import defaultUserIcon from "@/public/defaultUserAvatar.svg";
import { useGetMe } from "@/src/entities/Client/modal/hooks/getMe";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthModal } from "../../Auth/AuthModal/ui/AuthModal";
import styles from "./UserBadge.module.scss";

export const UserBadge = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data } = useGetMe();
  const searchParams = useSearchParams();
  const resetCode = searchParams.get("reset_code");

  useEffect(() => {
    if (resetCode && !openModal) {
      setOpenModal(true);
    }
  }, []);

  if (data?.data.email) {
    return <p>das</p>;
  }

  return (
    <>
      <div className={styles.profile}>
        <Image
          src={defaultUserIcon}
          alt="user icon"
          width={35}
          height={35}
          className={styles.userAvatar}
        />
        <button className={styles.userName} onClick={() => setOpenModal(true)}>
          Зарегестрируйтесь
        </button>
      </div>
      {openModal && (
        <AuthModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          initialModalType={
            resetCode ? "password recovery passwords" : "sign up"
          }
        />
      )}
    </>
  );
};
