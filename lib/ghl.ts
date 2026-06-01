/** GoHighLevel waitlist embed — set NEXT_PUBLIC_GHL_FORM_EMBED_URL when your form is ready */

export const GHL_FORM_EMBED_URL =
  process.env.NEXT_PUBLIC_GHL_FORM_EMBED_URL?.trim() || "";

export function isGhlFormEnabled(): boolean {
  return GHL_FORM_EMBED_URL.length > 0;
}
