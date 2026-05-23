import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://eonichealth.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eonic Health — Personalized health protocols",
    template: "%s | Eonic Health",
  },
  description:
    "Provider-guided longevity and performance protocols designed to support energy, recovery, metabolism, and long-term vitality.",
  openGraph: {
    title: "Eonic Health — Personalized health protocols",
    description:
      "Provider-guided longevity and performance protocols for energy, recovery, metabolism, and long-term vitality.",
    siteName: "Eonic Health",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eonic Health",
    description:
      "Personalized, provider-guided health protocols for long-term vitality.",
  },
  robots: { index: true, follow: true },
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
