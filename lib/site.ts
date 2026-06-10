import { ROUTES } from "./routes";

/** Public-facing brand */
export const SITE_NAME = "Basis";
export const SITE_NAME_SHORT = "Basis";
export const SITE_TAGLINE = "Personalized Prescription Health and Wellness";
export const SITE_LEGAL_NAME = "Basis Health LLC";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://basis.care";
export const SITE_EMAIL = "concierge@basis.care";
export const SITE_PHONE = "(888) 341-5138";

export type SocialPlatform = "instagram" | "twitter" | "youtube" | "linkedin";

export const SOCIAL_LABELS: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  twitter: "Twitter",
  youtube: "Youtube",
  linkedin: "LinkedIn",
};

/** Set in .env when profiles are live; otherwise footer links to /contact */
export const SOCIAL_URLS: Record<SocialPlatform, string | undefined> = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
};

export function socialHref(platform: SocialPlatform): string {
  return SOCIAL_URLS[platform] ?? ROUTES.contact;
}

export function isExternalSocial(platform: SocialPlatform): boolean {
  return Boolean(SOCIAL_URLS[platform]);
}

export const SOCIAL_PLATFORMS = Object.keys(SOCIAL_LABELS) as SocialPlatform[];
