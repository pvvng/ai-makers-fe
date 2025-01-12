// / The following import prevents a Font Awesome icon server-side rendering bug,
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
/* eslint-disable import/first */
config.autoAddCss = false;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// css
import "./globals.css";
// components
import Navbar from "@/components/Navbar/Navbar";
import ReactQueryProvider from "@/util/provider/ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | AIM",
    default: "AI-MAKERS",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-[1280px]`}
      >
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
