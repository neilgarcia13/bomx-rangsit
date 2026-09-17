import type { Metadata } from "next";
import { Geist, Barlow_Condensed } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import MotionProvider from "@/components/motion-provider";

import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BOMX — BOM Rangsit",
    template: "%s | BOMX",
  },
  description:
    "Explore BOMX motorcycle parts built for performance, control, and distinctive custom builds.",
  keywords: [
    "BOMX",
    "BOM Rangsit",
    "BOMX Philippines",
    "motorcycle parts Philippines",
    "aftermarket motorcycle parts",
    "motorcycle performance parts",
    "scooter performance parts",
    "motorcycle brake parts",
  ],
  authors: [{ name: "BOMX — BOM Rangsit" }],
  creator: "BOMX — BOM Rangsit",
  robots: { index: true, follow: true },
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlowCondensed.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
