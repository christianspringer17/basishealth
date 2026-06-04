import Link from "next/link";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { InfoPageLayout } from "@/components/marketing/InfoPageLayout";
import { ROUTES } from "@/lib/routes";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Basis for plans, billing, and clinical questions.",
};

export default function ContactPage() {
  return (
    <>
      <InfoPageLayout
        title="Contact"
        subtitle="We're here to help with program questions, updates, and care."
        backHref={ROUTES.home}
        backLabel="Home"
      >
        <div className="info-page-sections">
          <section className="info-page-block">
            <h2 className="info-page-heading">General support</h2>
            <p className="text-body-lg text-grey-7">
              For help with the website, your assessment, or getting started:
            </p>
            <p>
              <a href={`mailto:${SITE_EMAIL}`} className="info-page-link">
                {SITE_EMAIL}
              </a>
            </p>
          </section>

          <section className="info-page-block">
            <h2 className="info-page-heading">Clinical questions</h2>
            <p className="text-body-lg text-grey-7">
              Questions about eligibility, protocols, or your care plan are answered by
              licensed clinicians when you enroll through checkout.
            </p>
          </section>

          <section className="info-page-block">
            <h2 className="info-page-heading">Billing & refunds</h2>
            <p className="text-body-lg text-grey-7">
              Subscription and refund policies are outlined in our{" "}
              <Link href={ROUTES.termsRefunds} className="info-page-link">
                Terms of Use
              </Link>
              . For billing questions after enrollment, contact {SITE_EMAIL} with your
              account email.
            </p>
          </section>

          <section className="info-page-block">
            <h2 className="info-page-heading">FAQs</h2>
            <p className="text-body-lg text-grey-7">
              Many common questions about GLP–One and our program are answered on our{" "}
              <Link href={ROUTES.membershipFaq} className="info-page-link">
                FAQ page
              </Link>{" "}
              and the{" "}
              <Link href={ROUTES.glpOne} className="info-page-link">
                GLP–One overview
              </Link>
              .
            </p>
          </section>
        </div>
      </InfoPageLayout>
      <ConversionBand />
    </>
  );
}
