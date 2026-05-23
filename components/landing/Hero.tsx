import Link from "next/link";
import { PrimaryCta } from "./ui";

function ProtocolPreview() {
  return (
    <div
      className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[#e8e4df]/80 bg-gradient-to-br from-[#FFF7F0] via-white to-[#F6C7A8]/30 p-6 shadow-[0_8px_40px_rgba(23,23,23,0.06)] md:p-8"
      aria-hidden
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full border border-[#C75A2A]/20 bg-[#FFF7F0] px-3 py-1 text-xs font-medium text-[#A83A24]">
          Your protocol
        </span>
        <span className="text-xs text-[#66615c]">Provider-guided</span>
      </div>
      <div className="space-y-3">
        {[
          { label: "Energy", value: "In review", width: "72%" },
          { label: "Recovery", value: "Personalized", width: "88%" },
          { label: "Metabolism", value: "Tracking", width: "64%" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[#e8e4df]/60 bg-white/80 p-4"
          >
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-[#171717]">{item.label}</span>
              <span className="text-[#66615c]">{item.value}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#f7f5f2]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#F6C7A8] to-[#C75A2A]"
                style={{ width: item.width }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2">
        {["Sleep", "Labs", "Check-in"].map((pill) => (
          <div
            key={pill}
            className="rounded-xl border border-[#e8e4df]/50 bg-[#f7f5f2]/50 px-2 py-2 text-center text-xs text-[#66615c]"
          >
            {pill}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col justify-end overflow-hidden pt-24 pb-16 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#FFF7F0_0%,#ffffff_55%)]"
        aria-hidden
      />
      <div className="site-container relative z-[1] flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="flex max-w-3xl flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h1 className="text-display-lg text-[#171717] text-pretty">
              Personalized health protocols for long-term vitality.
            </h1>
            <p className="text-lead mx-auto max-w-2xl text-[#66615c] text-pretty lg:mx-0">
              Eonic Health combines clinical oversight, modern diagnostics, and
              personalized protocol design to help you move from guesswork to a
              clearer plan.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <PrimaryCta href="#waitlist">Join the waitlist</PrimaryCta>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-[#66615c] underline-offset-4 transition-colors hover:text-[#C75A2A] hover:underline"
            >
              See how it works
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end lg:pb-4">
          <ProtocolPreview />
        </div>
      </div>
    </section>
  );
}
