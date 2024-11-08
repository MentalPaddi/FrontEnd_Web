import Head from "next/head";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/provider";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "Mental Paddi",
  description: "A platform where students can seek mental health support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="">
        <ReduxProvider>
          {children}
          <Toaster position="top-right" />
        </ReduxProvider>
      </body>
    </html>
  );
}
