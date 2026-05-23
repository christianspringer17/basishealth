import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eonic Health — Personalized health protocols",
  description:
    "Provider-guided longevity and performance protocols designed to support energy, recovery, metabolism, and long-term vitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-[#171717] antialiased">
        {children}
      </body>
    </html>
  );
}
