import { registerAssessment } from "@/lib/waitlist";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_PLANS = new Set(["3-month", "6-month"]);

export async function POST(request: Request) {
  let body: { email?: string; goals?: string[]; plan?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const goals = Array.isArray(body.goals)
    ? body.goals.filter((g) => typeof g === "string").slice(0, 10)
    : [];
  const plan = body.plan?.trim();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!plan || !VALID_PLANS.has(plan)) {
    return NextResponse.json(
      { error: "Please select a 3-month or 6-month plan." },
      { status: 400 },
    );
  }

  if (goals.length === 0) {
    return NextResponse.json(
      { error: "Please select at least one goal." },
      { status: 400 },
    );
  }

  const result = await registerAssessment({ email, goals, plan });

  if (!result.ok) {
    console.error("[assessment]", result.error);
    return NextResponse.json(
      {
        error:
          "We could not save your assessment right now. Please email hello@athenehealth.com.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ success: true, channel: result.channel });
}
