import { registerWaitlistEmail } from "@/lib/waitlist";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const result = await registerWaitlistEmail(email);

  if (!result.ok) {
    console.error("[waitlist]", result.error);
    return NextResponse.json(
      {
        error:
          "We could not save your signup right now. Please email hello@athenehealth.com and we will add you manually.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ success: true, channel: result.channel });
}
