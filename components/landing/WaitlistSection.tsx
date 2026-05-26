"use client";

import { FormEvent, useState } from "react";
import { BasalButton, BasalSubmitButton } from "./ui";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError(true);
      setMessage("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setMessage("");
    setError(false);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(true);
        setMessage(data.error ?? "Please email hello@athenehealth.com.");
        return;
      }
      setEmail("");
      setMessage("Thank you. We will be in touch with launch updates.");
    } catch {
      setError(true);
      setMessage("Network error. Please email hello@athenehealth.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="waitlist"
      className="flex w-full flex-col items-center section-shell section-gap-md w-full"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg leading-100 text-grey-9">Begin with clarity.</h2>
          <p className="text-h3 max-w-[600px] text-pretty text-grey-7">
            See if Athene Health is right for your goals. Join the waitlist for early
            access updates.
          </p>
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center md:col-span-12 md:col-start-7">
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[420px] flex-col gap-3 sm:flex-row sm:items-center"
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              disabled={loading}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              placeholder="you@example.com"
              className="h-[44px] flex-1 rounded-[14px] border border-[var(--grey-3)] bg-white px-4 text-body text-grey-9 outline-none transition-[border-color,box-shadow] focus:border-[var(--accent-button)] focus:ring-2 focus:ring-[var(--accent-button)]/12 disabled:opacity-50"
            />
            <BasalSubmitButton disabled={loading} className="shrink-0">
              {loading ? "Joining…" : "Join waitlist"}
            </BasalSubmitButton>
          </form>
          {message && (
            <p
              className={`mt-4 text-h5 ${error ? "text-[var(--accent-5)]" : "text-[var(--accent-5)]"}`}
              role={error ? "alert" : "status"}
            >
              {message}
            </p>
          )}
        </div>
      </div>

      <BasalButton href="/learn/what-to-expect">
        See how it works
      </BasalButton>
    </section>
  );
}
