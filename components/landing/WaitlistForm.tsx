"use client";

import { FormEvent, useState } from "react";
import { Button, Section, SectionHeading } from "./ui";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="you@example.com"
                className="h-12 w-full rounded-2xl border border-[#e8e4df] bg-white px-4 text-[#171717] placeholder:text-[#66615c]/60 outline-none transition-colors focus:border-[#C75A2A]/50 focus:ring-2 focus:ring-[#C75A2A]/15"
              />
            </div>
            <Button type="submit" variant="primary" size="large" className="shrink-0 sm:h-12">
              Join waitlist
            </Button>
          </form>
          {status === "success" && (
            <p className="mt-4 text-sm text-[#A83A24]" role="status">
              Thank you. We will be in touch with launch updates.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-[#A83A24]" role="alert">
              Please enter a valid email address.
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
