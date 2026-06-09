import Link from "next/link";
import { EdenGlpOneStatement } from "@/components/eden/EdenGlpOneStatement";
import { EdenPageShell } from "@/components/eden/EdenPageShell";
import { EdenReveal } from "@/components/eden/EdenReveal";
import { ROUTES } from "@/lib/routes";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Basis for plans, billing, and clinical questions.",
};

const CONTACT_BLOCKS = [
  {
    id: "support",
    title: "General support",
    body: "For help with the website, your assessment, or getting started:",
    link: { label: SITE_EMAIL, href: `mailto:${SITE_EMAIL}` },
  },
  {
    id: "clinical",
    title: "Clinical questions",
    body: "Questions about eligibility, protocols, or your care plan are answered by licensed clinicians once you enroll through your assessment.",
  },
  {
    id: "billing",
    title: "Billing & refunds",
    body: `Subscription and refund policies are outlined in our Terms of Use. For billing questions after enrollment, contact ${SITE_EMAIL} with your account email.`,
    link: { label: "Terms of Use", href: ROUTES.termsRefunds },
  },
  {
    id: "faq",
    title: "FAQs",
    body: "Many common questions about GLP-One, plans, and billing are already answered on our FAQ and pricing pages.",
    links: [
      { label: "Common questions", href: ROUTES.homeFaq },
      { label: "Pricing questions", href: ROUTES.pricingFaq },
    ],
  },
] as const;

export default function ContactPage() {
  return (
    <EdenPageShell>
      <section className="eden-contact-hero site-container">
        <p className="eden-pricing-hero__eyebrow">Contact</p>
        <h1 className="eden-pricing-hero__title">We&apos;re here to help.</h1>
        <p className="eden-pricing-hero__lead">
          Program questions, updates, and care — reach the right team below.
        </p>
      </section>

      <section className="eden-contact site-container" aria-label="Contact options">
        <EdenReveal>
          <div className="eden-contact__grid">
            {CONTACT_BLOCKS.map((block) => (
              <article key={block.id} className="eden-contact-card eden-dash-card">
                <h2 className="eden-contact-card__title">{block.title}</h2>
                <p className="eden-contact-card__body">{block.body}</p>
                {"link" in block && block.link ? (
                  <Link href={block.link.href} className="eden-contact-card__link">
                    {block.link.label}
                  </Link>
                ) : null}
                {"links" in block && block.links ? (
                  <div className="eden-contact-card__links">
                    {block.links.map((link) => (
                      <Link key={link.href} href={link.href} className="eden-contact-card__link">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </EdenReveal>
      </section>

      <EdenGlpOneStatement />
    </EdenPageShell>
  );
}
