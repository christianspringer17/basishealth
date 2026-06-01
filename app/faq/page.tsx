import Link from "next/link";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { InfoPageLayout } from "@/components/marketing/InfoPageLayout";
import { GLP_FAQS, MEMBERSHIP_FAQS } from "@/lib/content/faqs";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Basis Health membership, protocols, therapies, and getting started.",
};

export default function FaqPage() {
  return (
    <>
      <InfoPageLayout
        title="FAQs"
        subtitle="Membership, protocols, therapies, and how Basis works."
        backHref={ROUTES.home}
        backLabel="Home"
      >
        <FaqAccordion title="Membership & platform" items={MEMBERSHIP_FAQS} />
        <div className="info-page-block-spacer" />
        <FaqAccordion title="GLP-1 therapy (Basis Metabolic)" items={GLP_FAQS} />
        <p className="text-body-lg text-grey-7 info-page-footnote">
          Still have questions?{" "}
          <Link href={ROUTES.contact} className="info-page-link">
            Contact us
          </Link>{" "}
          or browse{" "}
          <Link href={ROUTES.learn} className="info-page-link">
            Protocol Notes
          </Link>
          .
        </p>
      </InfoPageLayout>
      <ConversionBand />
    </>
  );
}
