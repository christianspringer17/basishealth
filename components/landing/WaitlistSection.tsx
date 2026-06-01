"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { attributionSummary } from "@/lib/attribution";
import { primaryCtaLabel } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";
import { GHL_FORM_EMBED_URL, isGhlFormEnabled } from "@/lib/ghl";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";
import { BasalSubmitButton } from "./ui";

function GhlFormEmbed() {
  return (
    <div className="w-full max-w-[520px]">
      <iframe
        src={GHL_FORM_EMBED_URL}
        title={`Join the ${SITE_NAME} waitlist`}
        className="min-h-[420px] w-full rounded-basal-lg border border-[var(--grey-3)] bg-white"
        loading="lazy"
      />
      <p className="mt-4 text-h5 text-pretty text-grey-7">
        By joining, you agree to our{" "}
        <Link href={ROUTES.terms} className="underline underline-offset-2">
          Terms
        </Link>{" "}
        and{" "}
        <Link href={ROUTES.privacy} className="underline underline-offset-2">
          Privacy Policy
        </Link>
        . If you provide a mobile number, you also agree to our{" "}
        <Link href={`${ROUTES.terms}#sms-terms`} className="underline underline-offset-2">
          SMS Terms
        </Link>
        .
      </p>
    </div>
  );
}

function NativeWaitlistForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailConsent, setEmailConsent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const phoneProvided = phone.trim().length > 0;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError(true);
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!emailConsent) {
      setError(true);
      setMessage("Please confirm you agree to receive email updates.");
      return;
    }

    const trimmedPhone = phone.trim();
    if (trimmedPhone && !smsConsent) {
      setError(true);
      setMessage("Please confirm SMS consent to use your mobile number.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError(false);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          phone: trimmedPhone || undefined,
          source: attributionSummary(),
        }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(true);
        trackEvent("waitlist_error");
        setMessage(data.error ?? `Please email ${SITE_EMAIL}.`);
        return;
      }

      setEmail("");
      setPhone("");
      setEmailConsent(false);
      setSmsConsent(false);
      trackEvent("waitlist_submit", { has_phone: Boolean(trimmedPhone) });
      setMessage("Thank you. We will be in touch with launch updates.");
    } catch {
      setError(true);
      setMessage(`Network error. Please email ${SITE_EMAIL}.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[480px] flex-col gap-3"
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          disabled={loading}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          placeholder="you@example.com"
          className="h-[44px] w-full rounded-[14px] border border-[var(--grey-3)] bg-white px-4 text-body text-grey-9 outline-none transition-[border-color,box-shadow] focus:border-[var(--accent-button)] focus:ring-2 focus:ring-[var(--accent-button)]/12 disabled:opacity-50"
        />

        <label htmlFor="waitlist-phone" className="sr-only">
          Mobile (optional, for SMS updates)
        </label>
        <input
          id="waitlist-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          disabled={loading}
          onChange={(e) => {
            setPhone(e.target.value);
            if (!e.target.value.trim()) setSmsConsent(false);
            setMessage("");
          }}
          placeholder="Mobile (optional)"
          className="h-[44px] w-full rounded-[14px] border border-[var(--grey-3)] bg-white px-4 text-body text-grey-9 outline-none transition-[border-color,box-shadow] focus:border-[var(--accent-button)] focus:ring-2 focus:ring-[var(--accent-button)]/12 disabled:opacity-50"
        />

        <label className="flex items-start gap-3 text-left text-h5 text-grey-7">
          <input
            type="checkbox"
            name="emailConsent"
            checked={emailConsent}
            disabled={loading}
            onChange={(e) => {
              setEmailConsent(e.target.checked);
              setMessage("");
            }}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent-button)]"
          />
          <span>
            I agree to receive email updates about {SITE_NAME} and accept the{" "}
            <Link href={ROUTES.terms} className="underline underline-offset-2">
              Terms
            </Link>{" "}
            and{" "}
            <Link href={ROUTES.privacy} className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        {phoneProvided ? (
          <label className="flex items-start gap-3 text-left text-h5 text-grey-7">
            <input
              type="checkbox"
              name="smsConsent"
              checked={smsConsent}
              disabled={loading}
              onChange={(e) => {
                setSmsConsent(e.target.checked);
                setMessage("");
              }}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent-button)]"
            />
            <span>
              I agree to receive automated SMS messages from {SITE_NAME} about
              launch updates, appointments, and account notifications. Message
              and data rates may apply. Reply STOP to opt out, HELP for help. See
              our{" "}
              <Link
                href={`${ROUTES.terms}#sms-terms`}
                className="underline underline-offset-2"
              >
                SMS Terms
              </Link>
              .
            </span>
          </label>
        ) : null}

        <BasalSubmitButton disabled={loading} className="w-full sm:w-auto sm:self-center">
          {loading ? "Submitting…" : primaryCtaLabel()}
        </BasalSubmitButton>
      </form>

      {message ? (
        <p className="mt-4 text-body text-grey-8" role={error ? "alert" : "status"}>
          {message}
        </p>
      ) : null}
    </>
  );
}

export function WaitlistSection() {
  const useGhl = isGhlFormEnabled();

  return (
    <section
      id="waitlist"
      className="section-shell section-gap-md flex w-full flex-col items-center"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg leading-100 text-grey-9">Stay in the loop</h2>
          <p className="text-lead max-w-[600px] text-pretty text-grey-7">
            {useGhl
              ? "Join the waitlist for launch updates. When enrollment opens, checkout runs through our clinical partner—no intake form on this site."
              : "Email and optional mobile for launch updates. When enrollment opens, checkout runs through our clinical partner—no intake form on this site."}
          </p>
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center md:col-span-14 md:col-start-6">
          {useGhl ? <GhlFormEmbed /> : <NativeWaitlistForm />}
        </div>
      </div>
    </section>
  );
}
