import { registerWaitlistLead } from "@/lib/waitlist";
import { SITE_EMAIL } from "@/lib/site";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: string; phone?: string; source?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const phone = body.phone?.trim();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const source = body.source?.trim().slice(0, 240);
  const result = await registerWaitlistLead({
    email,
    phone: phone || undefined,
    source: source || undefined,
  });

  if (!result.ok) {
    console.error("[waitlist]", result.error);
    return NextResponse.json(
      {
        error:
          `We could not save your signup right now. Please email ${SITE_EMAIL} and we will add you manually.`,
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ success: true, channel: result.channel });
}
