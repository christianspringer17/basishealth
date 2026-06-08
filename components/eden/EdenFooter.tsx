import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { SITE_NAME } from "@/lib/site";

const LINKS = [
  { label: "GLP-One", href: ROUTES.glpOne },
  { label: "Plans", href: ROUTES.glpOnePlans },
  { label: "Our approach", href: ROUTES.ourApproach },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Contact", href: ROUTES.contact },
  { label: "Privacy", href: ROUTES.privacy },
  { label: "Terms", href: ROUTES.terms },
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
