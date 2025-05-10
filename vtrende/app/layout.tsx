"use client";
import { Layout } from "@/src/app/layout/Layout/ui/Layout";
import { YANDEX_MAP_API_KEY } from "@/src/shared/const/map";
import "@styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Script
          src={`https://api-maps.yandex.ru/v3/?apikey=${YANDEX_MAP_API_KEY}&lang=ru_RU`}
          strategy="beforeInteractive"
        />
        <QueryClientProvider client={queryClient}>
          <Layout>{children}</Layout>
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
