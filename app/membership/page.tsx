import { ConversionBand } from "@/components/marketing/ConversionBand";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ExplainerSection } from "@/components/landing/ExplainerSection";
import { HomeFaqSection } from "@/components/landing/HomeFaqSection";
import { MembershipPlanSection } from "@/components/landing/MembershipPlanSection";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Plans",
  description:
    "Physician-guided GLP-1 plans with provider review, protocol recommendations, ongoing support, and access to Basis Metabolic.",
};

export default function MembershipPage() {
  return (
    <MarketingShell className="flex flex-col" showFooterCta={false}>
      <section className="membership-page-intro section-shell section-gap-md w-full scroll-mt-28 pt-28">
        <div className="site-container site-grid w-full">
          <div className="col-span-full flex flex-col gap-4 text-center md:col-span-14 md:col-start-6">
            <p className="text-h5 text-grey-7">Plans</p>
            <h1 className="text-h1-lg text-grey-9">Physician-guided GLP-1 protocols.</h1>
            <p className="text-body-lg text-pretty text-grey-7">
              Provider review, personalized dosing, and ongoing support — with therapies
              included in or added to your plan when clinically appropriate.
            </p>
          </div>
        </div>
      </section>

      <ExplainerSection />
      <MembershipPlanSection />
      <HomeFaqSection />

      <ConversionBand
        primaryHref={`${ROUTES.home}#waitlist`}
      />
    </MarketingShell>
  );
}
