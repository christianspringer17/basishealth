import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { SiteChrome } from "@/components/analytics/SiteChrome";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Protocol-based care`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Membership-based protocol care for metabolic health, longevity, and performance. Physician-guided protocols with therapies when clinically appropriate.",
  openGraph: {
    title: `${SITE_NAME} — Protocol-based care`,
    description:
      "Membership-based protocol care for metabolic health, longevity, and performance.",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
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
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-white font-sans text-secondary antialiased">
        <AnalyticsScripts />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
