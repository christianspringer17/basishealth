"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PLANS, PricingCards, type PlanTerm } from "@/components/marketing/PricingCards";
import { BasalButton, BasalSubmitButton } from "@/components/landing/ui";

const GOALS = [
  "Sustainable weight management",
  "Energy & metabolic health",
  "Long-term vitality",
  "Performance & recovery",
  "Pre-diabetes / insulin sensitivity",
] as const;

function SignupForm() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") as PlanTerm | null;

  const [step, setStep] = useState(1);
  const [goals, setGoals] = useState<string[]>([]);
  const [plan, setPlan] = useState<PlanTerm>(
    initialPlan === "3-month" || initialPlan === "6-month" ? initialPlan : "6-month",
  );
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function toggleGoal(goal: string) {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal],
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, goals, plan }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
    } catch {
      setError("Network error. Please email hello@athenehealth.com.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    const selected = PLANS.find((p) => p.id === plan);
    return (
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-h1-xl text-grey-9">You&apos;re on the list.</h1>
        <p className="text-h3 max-w-[560px] text-pretty text-grey-7">
          Thank you. We&apos;ll contact you at <strong>{email}</strong> with next
          steps for your {selected?.name ?? "protocol"} assessment.
        </p>
        <BasalButton href="/">Return home</BasalButton>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-10">
      <div>
        <p className="text-h5 text-grey-7">Step {step} of 3</p>
        <h1 className="text-h1-xl mt-2 text-grey-9">Clinical assessment</h1>
        <p className="text-h3 mt-4 max-w-[560px] text-pretty text-grey-7">
          A few questions to help us understand your goals and recommend the
          right care plan.
        </p>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-6">
          <h2 className="text-h1-lg text-grey-9">What are you working toward?</h2>
          <div className="flex flex-col gap-3">
            {GOALS.map((goal) => (
              <label
                key={goal}
                className={[
                  "flex cursor-pointer items-center gap-3 rounded-basal-lg border px-5 py-4 text-h5 transition-colors",
                  goals.includes(goal)
                    ? "border-[var(--accent-5)] bg-accent-1 text-grey-9"
                    : "border-[var(--grey-3)] bg-[var(--grey-1)] text-grey-7 hover:bg-white",
                ].join(" ")}
              >
                <input
                  type="checkbox"
                  className="size-4 accent-[var(--accent-5)]"
                  checked={goals.includes(goal)}
                  onChange={() => toggleGoal(goal)}
                />
                {goal}
              </label>
            ))}
          </div>
          <BasalButton
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (goals.length === 0) {
                setError("Select at least one goal to continue.");
                return;
              }
              setError("");
              setStep(2);
            }}
          >
            Continue
          </BasalButton>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-6">
          <h2 className="text-h1-lg text-grey-9">Which protocol term interests you?</h2>
          <p className="text-h5 text-grey-7">
            This helps us prepare for your consultation. No payment is collected here.
          </p>
          <PricingCards selected={plan} onSelect={setPlan} />
          <div className="flex flex-wrap gap-3">
            <BasalButton
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setStep(1);
              }}
            >
              Back
            </BasalButton>
            <BasalButton
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setStep(3);
              }}
            >
              Continue
            </BasalButton>
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-6">
          <h2 className="text-h1-lg text-grey-9">Where should we send next steps?</h2>
          <p className="text-h5 text-grey-7">
            Preferred plan: {PLANS.find((p) => p.id === plan)?.name} (from $
            {PLANS.find((p) => p.id === plan)?.priceMonthly}/mo)
          </p>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-[44px] rounded-[14px] border border-[var(--grey-3)] bg-white px-4 text-body text-grey-9 outline-none focus:border-[var(--accent-5)] focus:ring-2 focus:ring-[var(--accent-5)]/12"
          />
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-h5 text-grey-7 underline-offset-4 hover:underline"
            >
              Back
            </button>
            <BasalSubmitButton disabled={loading} className="shrink-0">
              {loading ? "Submitting…" : "Complete assessment"}
            </BasalSubmitButton>
          </div>
        </form>
      )}

      {error && (
        <p className="text-h5 text-[var(--accent-5)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function SignupPage() {
  return (
    <MarketingShell>
      <section className="marketing-page section-shell w-full min-h-[70svh]">
        <div className="site-container site-grid w-full">
          <div className="col-span-full md:col-span-14 md:col-start-6">
            <Suspense fallback={<p className="text-h5 text-grey-7">Loading…</p>}>
              <SignupForm />
            </Suspense>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
