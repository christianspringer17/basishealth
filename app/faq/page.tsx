import Link from "next/link";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { InfoPageLayout } from "@/components/marketing/InfoPageLayout";
import { GLP_FAQS, GENERAL_FAQS, MEMBERSHIP_FAQS } from "@/lib/content/faqs";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Basis membership, protocols, GLP–One, and getting started.",
};

export default function FaqPage() {
  return (
    <>
      <InfoPageLayout
        title="FAQs"
        subtitle="Answers about membership, protocols, therapies, and how to get started."
        backHref={ROUTES.home}
        backLabel="Home"
      >
        <FaqAccordion title="Membership & Basis" items={MEMBERSHIP_FAQS} />
        <div className="info-page-block-spacer" />
        <FaqAccordion title="GLP–One & therapies" items={GLP_FAQS} />
        <div className="info-page-block-spacer" />
        <FaqAccordion title="Getting started" items={GENERAL_FAQS} />
        <p className="text-body-lg text-grey-7 info-page-footnote">
          Access to therapies is subject to provider review, eligibility, and applicable
          regulations. Results vary. Still have questions?{" "}
          <Link href={ROUTES.contact} className="info-page-link">
            Contact us
          </Link>{" "}
          or explore{" "}
          <Link href={ROUTES.learn} className="info-page-link">
            Learn
          </Link>
          .
        </p>
      </InfoPageLayout>
      <ConversionBand />
    </>
  );
}
