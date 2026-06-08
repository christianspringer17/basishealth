import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { SiteChrome } from "@/components/analytics/SiteChrome";
import { MEDIA } from "@/lib/media";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Protocol-based metabolic care`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Protocol-based metabolic care with physician-guided protocols, ongoing support, and therapies when clinically appropriate.",
  openGraph: {
    title: `${SITE_NAME} — Protocol-based metabolic care`,
    description:
      "Physician-guided GLP-1 and metabolic protocols with ongoing support and therapies when clinically appropriate.",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: MEDIA.openGraphImage,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Health`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Protocol-based metabolic care with physician-guided protocols and ongoing support.",
    images: [MEDIA.openGraphImage],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full bg-white font-sans text-secondary antialiased">
        <AnalyticsScripts />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
