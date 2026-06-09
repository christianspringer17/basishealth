import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { SITE_NAME } from "@/lib/site";

const LINKS = [
  { label: "Pricing", href: ROUTES.pricing },
  { label: "About", href: ROUTES.about },
  { label: "Learn", href: ROUTES.learn },
  { label: "FAQ", href: ROUTES.homeFaq },
  { label: "Contact", href: ROUTES.contact },
  { label: "Privacy", href: ROUTES.privacy },
  { label: "Terms", href: ROUTES.terms },
  { label: "Accessibility", href: ROUTES.accessibility },
];

export function EdenFooter() {
  return (
    <footer className="eden-footer">
      <p className="eden-footer__brand">{SITE_NAME}</p>
      <nav className="eden-footer__nav" aria-label="Footer">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="eden-footer__legal">
        Compounded medications are not FDA-approved as finished drug products.
        Prescriptions require provider review.
      </p>
    </footer>
  );
}
