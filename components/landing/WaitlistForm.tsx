"use client";

import { FormEvent, useState } from "react";
import { Button, Section, SectionHeading } from "./ui";

type Status = "idle" | "loading" | "success" | "error" | "server-error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok) {
        setStatus("server-error");
        setMessage(
          data.error ??
            "Something went wrong. Please try again or email hello@eonichealth.com.",
        );
        return;
      }

      setStatus("success");
      setMessage("Thank you. We will be in touch with launch updates.");
      setEmail("");
    } catch {
      setStatus("server-error");
      setMessage(
        "Network error. Please try again or email hello@eonichealth.com.",
      );
    }
  }

  return (
    <Section id="waitlist" className="bg-[#f7f5f2]/30">
      <div className="site-container flex flex-col items-center gap-10 md:gap-12">
        <SectionHeading
          title="Join the Eonic Health waitlist."
          subtitle="Get early access updates as we prepare to launch."
        />
        <div className="w-full max-w-lg rounded-3xl border border-[#e8e4df]/80 bg-white p-8 shadow-[0_4px_32px_rgba(23,23,23,0.05)] md:p-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:flex-row sm:items-start"
            noValidate
          >
            <div className="flex-1">
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={status === "loading"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle" && status !== "loading") {
                    setStatus("idle");
                    setMessage("");
                  }
                }}
                placeholder="you@example.com"
                className="h-12 w-full rounded-2xl border border-[#e8e4df] bg-white px-4 text-[#171717] placeholder:text-[#66615c]/60 outline-none transition-colors focus:border-[#C75A2A]/50 focus:ring-2 focus:ring-[#C75A2A]/15 disabled:opacity-60"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="large"
              className="shrink-0 sm:h-12"
              ariaLabel="Join waitlist"
            >
              {status === "loading" ? "Joining…" : "Join waitlist"}
            </Button>
          </form>
          {message && (
            <p
              className={`mt-4 text-sm ${
                status === "success" ? "text-[#A83A24]" : "text-[#A83A24]"
              }`}
              role={status === "success" ? "status" : "alert"}
            >
              {message}
            </p>
          )}
          <p className="mt-4 text-xs leading-relaxed text-[#66615c]">
            By joining, you agree to receive product updates. You can unsubscribe
            at any time. We do not sell your information.
          </p>
        </div>
      </div>
    </Section>
  );
}
