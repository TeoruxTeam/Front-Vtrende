"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import { AuthModal } from "@/src/components/Client/Auth/AuthModal/ui/AuthModal";
import { CookiesInfo } from "@/src/shared/types/cookiesInfo";
import { getCookie } from "cookies-next";
import { Header } from "../../Header/ui/Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [openModal, setOpenModal] = useState(false);
  const [initialModalType, setInitialModalType] = useState<"sign up" | "confirm email">("sign up");
  const [isNotVerified, setIsNotVerified] = useState(false);
  const token = getCookie(CookiesInfo.ACCESS_TOKEN);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken: { verified?: boolean } = jwtDecode(token);
        if (decodedToken.verified === false) {
          setInitialModalType("confirm email");
          setOpenModal(true);
          setIsNotVerified(true);
        } else {
          setIsNotVerified(false);
        }
      } catch (error) {
        console.error("Ошибка декодирования токена:", error);
        setIsNotVerified(false);
      }
    }
  }, [token]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
        <Toaster />
        <AuthModal
          isOpen={openModal}
          onClose={handleCloseModal}
          initialModalType={initialModalType}
          isNotVerified={isNotVerified}
          setIsNotVerified={setIsNotVerified}
        />
      </QueryClientProvider>
    </div>
  );
};