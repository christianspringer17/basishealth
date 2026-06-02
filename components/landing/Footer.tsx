import Link from "next/link";
import { primaryCtaHref, primaryCtaLabel, WAITLIST_HREF } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";
import {
  SOCIAL_LABELS,
  SOCIAL_PLATFORMS,
  isExternalSocial,
  socialHref,
} from "@/lib/site";
import { BasalButton } from "./ui";

const FOOTER_NAV = [
  {
    title: "Membership",
    links: [
      { label: "Apply", href: WAITLIST_HREF },
      { label: "What's included", href: ROUTES.membership },
      { label: "Protocols", href: ROUTES.homeProtocols },
    ],
  },
  {
    title: "Therapies",
    links: [
      { label: "GLP–One", href: ROUTES.glpOne },
      { label: "FAQ", href: ROUTES.membershipFaq },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About us", href: ROUTES.about },
      { label: "Unlock living", href: ROUTES.membership },
      { label: "How it works", href: ROUTES.aboutHowItWorks },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Primers", href: ROUTES.learn },
      { label: "Most recent", href: ROUTES.learnFeatured },
      { label: "What to expect", href: ROUTES.learnWhatToExpect },
      { label: "All topics", href: ROUTES.learn },
    ],
  },
  {
    title: "Connect",
    links: SOCIAL_PLATFORMS.map((platform) => ({
      label: SOCIAL_LABELS[platform],
      href: socialHref(platform),
      external: isExternalSocial(platform),
    })),
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: ROUTES.contact },
      { label: "FAQs", href: ROUTES.membershipFaq },
      { label: "Refunds", href: ROUTES.termsRefunds },
    ],
  },
] as const;

export function Footer({ showPrimaryCta = true }: { showPrimaryCta?: boolean }) {
  const year = new Date().getFullYear();
  const ctaLabel = primaryCtaLabel();

  return (
    <footer className="site-footer">
      {showPrimaryCta ? (
        <>
          <div className="site-container">
            <div className="footer-cta">
              <BasalButton href={primaryCtaHref()}>{ctaLabel}</BasalButton>
            </div>
          </div>
          <div className="site-container">
            <div className="footer-divider" aria-hidden />
          </div>
        </>
      ) : null}

      <div className="site-container">
        <nav className="footer-nav" aria-label="Footer">
          {FOOTER_NAV.map((column) => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </nav>

        <div className="footer-legal">
          <div className="footer-legal__links">
            <Link href={ROUTES.terms}>Terms + Conditions</Link>
            <span aria-hidden>|</span>
            <Link href={ROUTES.privacy}>Privacy Policy</Link>
            <span aria-hidden>|</span>
            <Link href={ROUTES.accessibility}>Accessibility</Link>
          </div>
          <p className="footer-legal__copy">
            © {year} Basis Health LLC. All rights reserved.
          </p>
        </div>

        <p className="footer-disclaimer">
          Basis is a physician-supervised membership program. Therapies such as GLP-1
          medications may not be appropriate for everyone. Access is subject to provider
          review, eligibility, and applicable regulations. Results vary.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly {
    label: string;
    href: string;
    external?: boolean;
  }[];
}) {
  return (
    <div className="footer-nav__col">
      <h3 className="footer-nav__title">{title}</h3>
      <ul className="footer-nav__list">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav__link"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                prefetch={link.href === ROUTES.learn ? false : undefined}
                className="footer-nav__link"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
