import type { Metadata } from "next";
import { Geist, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { JSX, ReactNode } from "react";
import Footer from "@/components/Footer";

export const urbanist = Urbanist({
  subsets: ["latin-ext"],
  variable: "--urbanist",
});

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--geist",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element | ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} ${geistSans.className} overflow-x-hidden antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
