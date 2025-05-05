import defaultUserIcon from "@/public/defaultUserAvatar.svg";
import Image from "next/image";
import { useState } from "react";
import { AuthModal } from "../../Auth/AuthModal/ui/AuthModal";
import { useGetMe } from "../../modal/hooks/getMe";
import styles from "./UserBadge.module.scss";

export const UserBadge = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data } = useGetMe();
  if (data?.data.email) {
    <p>dsds</p>;
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
      <AuthModal isOpen={!!openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};
