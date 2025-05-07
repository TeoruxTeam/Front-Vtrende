"use client";
import { AuthModal } from "@/src/components/Client/Auth";
import { IAuthClientModalType } from "@/src/components/Client/Auth/AuthModal/ui/AuthModal";
import { Header } from "@/src/entities/Client";
import { Footer } from "@/src/entities/Client/Footer/ui/Footer";
import { useGetMe } from "@/src/entities/Client/modal/hooks/getMe";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isNotVerified, setIsNotVerified] = useState(false);
  const [initialModalType, setInitialModalType] =
    useState<IAuthClientModalType>("sign up");

  const { data } = useGetMe();

  const handleOpenModal = (type?: IAuthClientModalType) => {
    setOpenModal(true);
    setInitialModalType(type ?? "sign up");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (data) {
      // if (data.notVerified) {
      //   setInitialModalType("confirm email");
      //   setOpenModal(true);
      //   setIsNotVerified(true);
      // } else
      if ((data.data && data.data.verified === false) || data.notVerified) {
        setInitialModalType("confirm email");
        setOpenModal(true);
        setIsNotVerified(true);
      } else {
        setOpenModal(false);
        setIsNotVerified(false);
      }
    }
  }, [data]);

  return (
    <div>
      <Header onOpenModal={handleOpenModal} />
      <div className={styles.layoutChildrenStyles}>{children}</div>
      <Footer />
      <AuthModal
        isOpen={openModal}
        onClose={handleCloseModal}
        initialModalType={initialModalType}
        isNotVerified={isNotVerified}
        setIsNotVerified={setIsNotVerified}
      />
    </div>
  );
};
