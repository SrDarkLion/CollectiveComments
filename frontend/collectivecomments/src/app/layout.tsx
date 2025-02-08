import type { Metadata } from "next";
import {Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'] 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable}`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
