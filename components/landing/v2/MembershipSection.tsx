import { HOME_MEMBERSHIP } from "@/lib/content/home";
import { MEMBERSHIP } from "@/lib/pricing";
import { primaryCtaHref, primaryCtaLabel } from "@/lib/cta";
import { BasalButton } from "../ui";
import { HomeBodyCopy, HomeSection, HomeSectionIntro } from "./HomeSection";

export function MembershipSection() {
  return (
    <HomeSection id="membership" className="section-shell section-gap-lg w-full bg-[var(--grey-1)]">
      <HomeSectionIntro
        title={HOME_MEMBERSHIP.headline}
        subtitle={HOME_MEMBERSHIP.priceLine}
      />
      <HomeBodyCopy>{HOME_MEMBERSHIP.body}</HomeBodyCopy>
      <div className="site-container site-grid mt-10 w-full">
        <div className="col-span-full grid gap-8 md:col-span-18 md:col-start-4 md:grid-cols-2">
          <div className="rounded-basal-2xl border border-[var(--grey-3)] bg-white p-6 md:p-8">
            <h3 className="text-h4 font-semibold text-grey-9">Membership includes</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {MEMBERSHIP.includes.map((item) => (
                <li key={item} className="text-body text-grey-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-basal-2xl border border-[var(--grey-3)] bg-white p-6 md:p-8">
            <h3 className="text-h4 font-semibold text-grey-9">Purchased separately</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {MEMBERSHIP.excludes.map((item) => (
                <li key={item} className="text-body text-grey-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <HomeBodyCopy>{HOME_MEMBERSHIP.clarifying}</HomeBodyCopy>
      <div className="site-container site-grid mt-6 w-full">
        <div className="col-span-full flex justify-center md:col-span-16 md:col-start-5">
          <BasalButton href={primaryCtaHref()}>{primaryCtaLabel()}</BasalButton>
        </div>
      </div>
    </HomeSection>
  );
}
