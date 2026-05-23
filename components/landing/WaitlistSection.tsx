"use client";

import { FormEvent, useState } from "react";
import { BasalButton } from "./ui";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(
          data.error ??
            "Something went wrong. Email hello@eonichealth.com to join.",
        );
        return;
      }
      setStatus("success");
      setMessage("Thank you. We will be in touch with launch updates.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try hello@eonichealth.com.");
    }
  }

  return (
    <section
      id="waitlist"
      className="flex w-full flex-col items-center gap-y-32 py-100"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg leading-100 text-grey-9">Begin with clarity.</h2>
          <p className="text-h3 max-w-[600px] text-pretty text-grey-7">
            Join the Eonic Health waitlist for early access updates as we prepare
            to launch.
          </p>
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center md:col-span-12 md:col-start-7">
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email
            </label>
            <input
              id="waitlist-email"
              type="email"
              name="email"
              value={email}
              disabled={status === "loading"}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle" && status !== "loading") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              placeholder="you@example.com"
              className="h-11 flex-1 rounded-[14px] border border-[var(--grey-3)] bg-white px-4 text-body text-grey-9 outline-none focus:border-[var(--accent-button)] focus:ring-2 focus:ring-[var(--accent-button)]/15 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-11 shrink-0 rounded-[14px] border border-[var(--accent-button)] bg-[var(--accent-button)] px-6 text-h5 text-white transition-colors hover:bg-[var(--accent-5)] disabled:opacity-50"
            >
              {status === "loading" ? "Joining…" : "Join waitlist"}
            </button>
          </form>
          {message && (
            <p
              className="mt-4 text-body text-accent-5"
              role={status === "success" ? "status" : "alert"}
            >
              {message}
            </p>
          )}
          <p className="mt-4 max-w-md text-center text-h5 text-grey-7">
            By joining, you agree to receive product updates. Unsubscribe anytime.
          </p>
          <div className="mt-8">
            <BasalButton href="#how-it-works">See how it works</BasalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
