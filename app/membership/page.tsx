import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ExplainerSection } from "@/components/landing/ExplainerSection";
import { HomeFaqSection } from "@/components/landing/HomeFaqSection";
import { MembershipPlanSection } from "@/components/landing/MembershipPlanSection";
import { CTA_LABELS } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Membership",
  description:
    "Basis membership includes provider review, protocol recommendations, ongoing support, and access to Basis Metabolic and future protocol tracks.",
};

export default function MembershipPage() {
  return (
    <MarketingShell className="flex flex-col" showFooterCta={false}>
      <section className="membership-page-intro section-shell section-gap-md w-full scroll-mt-28 pt-28">
        <div className="site-container site-grid w-full">
          <div className="col-span-full flex flex-col gap-4 text-center md:col-span-14 md:col-start-6">
            <p className="text-h5 text-grey-7">Membership</p>
            <h1 className="text-h1-lg text-grey-9">Multiple therapies. One membership.</h1>
            <p className="text-body-lg text-pretty text-grey-7">
              Provider review, personalized protocol recommendations, and ongoing support —
              with therapies purchased separately when clinically appropriate.
            </p>
          </div>
        </div>
      </section>

      <ExplainerSection />
      <MembershipPlanSection />
      <HomeFaqSection />

      <ConversionBand
        title="Apply for membership."
        description="Start with Basis Metabolic and build on one connected care relationship over time."
        primaryLabel={CTA_LABELS.applyMembership}
        primaryHref={`${ROUTES.home}#waitlist`}
        showSecondary={false}
      />
    </MarketingShell>
  );
}
