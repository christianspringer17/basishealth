type WaitlistResult =
  | { ok: true; channel: string }
  | { ok: false; error: string };

function getRepo(): string {
  return process.env.GITHUB_REPO ?? "christianspringer17/basishealth";
}

export type WaitlistLead = {
  email: string;
  phone?: string;
  /** UTM / referrer summary from first touch */
  source?: string;
};

export async function registerWaitlistEmail(
  email: string,
  phone?: string,
): Promise<WaitlistResult> {
  return registerWaitlistLead({ email, phone });
}

export async function registerWaitlistLead({
  email,
  phone,
  source,
}: WaitlistLead): Promise<WaitlistResult> {
  return registerAssessment({
    email,
    goals: [],
    plan: "unknown",
    phone,
    source,
  });
}

export type AssessmentPayload = {
  email: string;
  goals: string[];
  plan: string;
  phone?: string;
  source?: string;
};

async function saveAssessmentViaGitHub(
  payload: AssessmentPayload,
): Promise<WaitlistResult> {
  const token = process.env.WAITLIST_GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  if (!token) return { ok: false, error: "GitHub token not configured" };

  const repo = getRepo();
  const { email, goals, plan, phone, source } = payload;
  const title =
    plan === "unknown"
      ? `Waitlist: ${email}`
      : `Enrollment: ${email} (${plan})`;

  const response = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body: [
        plan === "unknown"
          ? "New Basis Health waitlist signup"
          : "New Basis Health enrollment lead",
        "",
        `- **Email:** ${email}`,
        phone ? `- **Phone (SMS):** ${phone}` : null,
        source ? `- **Source:** ${source}` : null,
        plan !== "unknown" ? `- **Plan:** ${plan}` : null,
        goals.length > 0 ? `- **Goals:** ${goals.join(", ")}` : null,
        `- **Submitted:** ${new Date().toISOString()}`,
      ]
        .filter(Boolean)
        .join("\n"),
      labels: plan === "unknown" ? ["waitlist"] : ["enrollment"],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    if (response.status === 422 && body.includes("label")) {
      const retry = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body: `Enrollment lead for ${email}, plan: ${plan}, goals: ${goals.join(", ")}`,
        }),
      });
      if (retry.ok) return { ok: true, channel: "github" };
    }
    return { ok: false, error: `GitHub API error (${response.status})` };
  }

  return { ok: true, channel: "github" };
}

async function notifyAssessmentViaResend(
  payload: AssessmentPayload,
): Promise<WaitlistResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.WAITLIST_NOTIFY_EMAIL;
  const from = process.env.WAITLIST_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !notifyTo) return { ok: false, error: "Resend not configured" };

  const { email, goals, plan } = payload;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [notifyTo],
      subject: `Basis Health enrollment: ${email} (${plan})`,
      text: [
        `Email: ${email}`,
        `Plan: ${plan}`,
        `Goals: ${goals.join(", ") || "—"}`,
        `Time: ${new Date().toISOString()}`,
      ].join("\n"),
    }),
  });

  if (!response.ok) return { ok: false, error: "Resend delivery failed" };
  return { ok: true, channel: "resend" };
}

async function saveAssessmentViaWeb3Forms(
  payload: AssessmentPayload,
): Promise<WaitlistResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return { ok: false, error: "Web3Forms not configured" };

  const { email, goals, plan } = payload;
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "Basis Health enrollment",
      email,
      message: `Plan: ${plan}\nGoals: ${goals.join(", ")}`,
    }),
  });

  const data = (await response.json()) as { success?: boolean };
  if (!data.success) return { ok: false, error: "Web3Forms submission failed" };
  return { ok: true, channel: "web3forms" };
}

export async function registerAssessment(
  payload: AssessmentPayload,
): Promise<WaitlistResult> {
  const backends = [
    saveAssessmentViaGitHub,
    notifyAssessmentViaResend,
    saveAssessmentViaWeb3Forms,
  ];

  const errors: string[] = [];
  for (const backend of backends) {
    const result = await backend(payload);
    if (result.ok) return result;
    errors.push(result.error);
  }

  return {
    ok: false,
    error:
      "Assessment storage is not configured on the server. Set GITHUB_TOKEN, RESEND_API_KEY, or WEB3FORMS_ACCESS_KEY.",
  };
}
