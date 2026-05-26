type WaitlistResult =
  | { ok: true; channel: string }
  | { ok: false; error: string };

function getRepo(): string {
  return process.env.GITHUB_REPO ?? "christianspringer17/Athenehealth";
}

async function saveViaGitHubIssue(email: string): Promise<WaitlistResult> {
  const token = process.env.WAITLIST_GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  if (!token) {
    return { ok: false, error: "GitHub token not configured" };
  }

  const repo = getRepo();
  const response = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: `Waitlist: ${email}`,
      body: [
        "New Athene Health waitlist signup",
        "",
        `- **Email:** ${email}`,
        `- **Submitted:** ${new Date().toISOString()}`,
      ].join("\n"),
      labels: ["waitlist"],
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
          title: `Waitlist: ${email}`,
          body: `New waitlist signup for ${email} at ${new Date().toISOString()}`,
        }),
      });
      if (retry.ok) return { ok: true, channel: "github" };
    }
    return { ok: false, error: `GitHub API error (${response.status})` };
  }

  return { ok: true, channel: "github" };
}

async function notifyViaResend(email: string): Promise<WaitlistResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.WAITLIST_NOTIFY_EMAIL;
  const from =
    process.env.WAITLIST_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !notifyTo) {
    return { ok: false, error: "Resend not configured" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [notifyTo],
      subject: `Athene Health waitlist: ${email}`,
      text: `New waitlist signup: ${email}\nTime: ${new Date().toISOString()}`,
    }),
  });

  if (!response.ok) {
    return { ok: false, error: "Resend delivery failed" };
  }

  return { ok: true, channel: "resend" };
}

async function saveViaWeb3Forms(email: string): Promise<WaitlistResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return { ok: false, error: "Web3Forms not configured" };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "Athene Health Waitlist",
      email,
      message: `Waitlist signup: ${email}`,
    }),
  });

  const data = (await response.json()) as { success?: boolean };
  if (!data.success) {
    return { ok: false, error: "Web3Forms submission failed" };
  }

  return { ok: true, channel: "web3forms" };
}

export async function registerWaitlistEmail(
  email: string,
): Promise<WaitlistResult> {
  const backends = [saveViaGitHubIssue, notifyViaResend, saveViaWeb3Forms];

  const errors: string[] = [];

  for (const backend of backends) {
    const result = await backend(email);
    if (result.ok) return result;
    errors.push(result.error);
  }

  return {
    ok: false,
    error:
      "Waitlist storage is not configured on the server. Set GITHUB_TOKEN, RESEND_API_KEY, or WEB3FORMS_ACCESS_KEY.",
  };
}
