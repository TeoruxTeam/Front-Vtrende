"use client";

import { Layout } from "@/src/app/layout/Layout/ui/Layout";
import "@styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Roboto } from "next/font/google";
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
  const queryClient = new QueryClient();
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <QueryClientProvider client={queryClient}>
          <Layout>{children}</Layout>
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
