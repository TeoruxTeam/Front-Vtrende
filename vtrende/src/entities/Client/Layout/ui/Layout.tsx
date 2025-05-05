"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Header } from "../../Header/ui/Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
        <Toaster />
      </QueryClientProvider>
    </div>
  );
};
