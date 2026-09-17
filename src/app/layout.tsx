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
  title: "Next.js Template made by Neil Andrei",
  description: "A personal Next.js template built with TypeScript, Tailwind CSS, and shadcn/ui.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${barlowCondensed.variable} ${geist.variable} h-full antialiased`}>
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
