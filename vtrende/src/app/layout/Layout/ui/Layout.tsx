"use client";
import { AuthModal } from "@/src/components/Client/Auth";
import { IAuthClientModalType } from "@/src/components/Client/Auth/AuthModal/ui/AuthModal";
import { Footer } from "@/src/components/Client/MainPage/Footer/ui/Footer";
import { Header } from "@/src/components/Client/MainPage/Header/ui/Header";
import { useGetMe } from "@/src/entities/Client/modal/hooks/getMe";
import { useSearchParams } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isNotVerified, setIsNotVerified] = useState(false);
  const [initialModalType, setInitialModalType] =
    useState<IAuthClientModalType>("sign up");
  const searchParams = useSearchParams();
  const resetCode = searchParams.get("reset_code");
  const { data } = useGetMe();

  const handleOpenModal = (type?: IAuthClientModalType) => {
    setOpenModal(true);
    setInitialModalType(type ?? "sign up");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (resetCode) {
      handleOpenModal("password recovery passwords");
    }
  }, [resetCode]);

  useEffect(() => {
    if (data) {
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
