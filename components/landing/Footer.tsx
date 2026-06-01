import Link from "next/link";
import { PROTOCOL_NOTES_LABEL } from "@/lib/positioning";
import {
  primaryCtaHref,
  primaryCtaLabel,
} from "@/lib/cta";
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
    title: "Platform",
    links: [
      { label: "How it works", href: ROUTES.homeHowItWorks },
      { label: "Protocols", href: ROUTES.homeProtocols },
      { label: "Membership", href: ROUTES.homeMembership },
      { label: "Diagnostics", href: ROUTES.homeDiagnostics },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About us", href: ROUTES.about },
      { label: "Philosophy", href: ROUTES.homePhilosophy },
      { label: "Basis Metabolic", href: ROUTES.glpOne },
    ],
  },
  {
    title: PROTOCOL_NOTES_LABEL,
    links: [
      { label: "All notes", href: ROUTES.learn },
      { label: "Most recent", href: ROUTES.learnFeatured },
      { label: "What to expect", href: ROUTES.learnWhatToExpect },
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
      { label: "FAQs", href: ROUTES.faq },
      { label: "Refunds", href: ROUTES.termsRefunds },
    ],
  },
] as const;

export function Footer({ showPrimaryCta = true }: { showPrimaryCta?: boolean }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {showPrimaryCta ? (
        <>
          <div className="site-container">
            <div className="footer-cta">
              <BasalButton href={primaryCtaHref()}>{primaryCtaLabel()}</BasalButton>
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
          Basis Health is a membership-based protocol platform. All therapies are
          subject to provider review and clinical appropriateness. Membership does not
          include medications, peptides, labs, or supplements unless purchased
          separately when appropriate.
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
