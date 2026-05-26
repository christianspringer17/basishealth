import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://athenehealth.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Athene Health — Personalized health protocols",
    template: "%s | Athene Health",
  },
  description:
    "Provider-guided longevity and performance protocols designed to support energy, recovery, metabolism, and long-term vitality.",
  openGraph: {
    title: "Athene Health — Personalized health protocols",
    description:
      "Provider-guided longevity and performance protocols for energy, recovery, metabolism, and long-term vitality.",
    siteName: "Athene Health",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athene Health",
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
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-white font-sans text-[var(--grey-9)] antialiased">
        {children}
      </body>
    </html>
  );
}
