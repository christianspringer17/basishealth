import Link from "next/link";
import { HOME_PROTOCOLS } from "@/lib/content/home";
import { PROTOCOLS } from "@/lib/content/protocols";
import { CTA_LABELS } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";
import { BasalButton } from "../ui";
import { HomeSection, HomeSectionIntro } from "./HomeSection";

export function ProtocolsSection() {
  return (
    <HomeSection id="protocols">
      <HomeSectionIntro
        title={HOME_PROTOCOLS.headline}
        subtitle={HOME_PROTOCOLS.subheadline}
      />
      <div className="site-container site-grid mt-10 w-full">
        <ul className="col-span-full grid gap-5 md:col-span-20 md:col-start-3 md:grid-cols-2 lg:grid-cols-3">
          {PROTOCOLS.map((protocol) => (
            <li
              key={protocol.id}
              className="flex flex-col gap-4 rounded-basal-2xl border border-[var(--grey-3)] bg-white p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-h4 font-semibold text-grey-9">{protocol.name}</h3>
                <span
                  className={
                    protocol.status === "available"
                      ? "shrink-0 rounded-full bg-[var(--grey-1)] px-3 py-1 text-body text-grey-8"
                      : "shrink-0 rounded-full border border-[var(--grey-3)] px-3 py-1 text-body text-grey-7"
                  }
                >
                  {protocol.statusLabel}
                </span>
              </div>
              <p className="text-body text-pretty text-grey-7">{protocol.description}</p>
              <ul className="flex flex-wrap gap-2">
                {protocol.focusAreas.slice(0, 3).map((area) => (
                  <li
                    key={area}
                    className="rounded-full bg-[var(--grey-1)] px-3 py-1 text-body text-grey-7"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              {protocol.href && protocol.status === "available" ? (
                <Link
                  href={protocol.href}
                  className="mt-auto text-h5 text-grey-8 underline underline-offset-2 hover:text-grey-9"
                >
                  {CTA_LABELS.exploreMetabolic} →
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <div className="site-container site-grid mt-8 w-full">
        <div className="col-span-full flex justify-center md:col-span-16 md:col-start-5">
          <BasalButton href={ROUTES.glpOne}>{CTA_LABELS.exploreMetabolic}</BasalButton>
        </div>
      </div>
    </HomeSection>
  );
}
