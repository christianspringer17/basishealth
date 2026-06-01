const STORAGE_KEY = "basis_attribution";

export type Attribution = {
  source?: string;
  medium?: string;
  campaign?: string;
  referrer?: string;
  landingPath?: string;
  capturedAt: string;
};

function readSearchParams(): Partial<Attribution> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source") ?? undefined;
  const medium = params.get("utm_medium") ?? undefined;
  const campaign = params.get("utm_campaign") ?? undefined;
  if (!source && !medium && !campaign) return {};
  return { source, medium, campaign };
}

/** Persist first-touch UTM/referrer for waitlist and analytics. */
export function captureAttribution() {
  if (typeof window === "undefined") return;

  try {
    const existing = sessionStorage.getItem(STORAGE_KEY);
    if (existing) return;

    const fromUrl = readSearchParams();
    const data: Attribution = {
      ...fromUrl,
      referrer: document.referrer || undefined,
      landingPath: window.location.pathname,
      capturedAt: new Date().toISOString(),
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* private mode / blocked storage */
  }
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Attribution;
  } catch {
    return null;
  }
}

export function attributionSummary(): string | undefined {
  const a = getAttribution();
  if (!a) return undefined;
  const parts = [a.source, a.medium, a.campaign].filter(Boolean);
  if (parts.length > 0) return parts.join(" / ");
  if (a.referrer) return `referrer:${a.referrer}`;
  if (a.landingPath) return `landing:${a.landingPath}`;
  return undefined;
}
