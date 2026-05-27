import Link from "next/link";
import { BasalButton } from "./ui";

const FOOTER_LINKS = {
  glpOne: [
    { label: "Get started", href: "/signup" },
    { label: "Learn more", href: "/glp-one" },
  ],
  about: [
    { label: "Our story", href: "/about" },
    { label: "How it works", href: "/about/how-it-works" },
    { label: "Built for vitality", href: "/about/vitality" },
  ],
  learn: [
    { label: "All topics", href: "/learn" },
    { label: "What to expect", href: "/learn/what-to-expect" },
    { label: "What we measure", href: "/learn/what-we-measure" },
  ],
  support: [
    { label: "Contact", href: "mailto:hello@athenehealth.com" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="site-footer relative w-full">
      <div className="absolute top-0 z-[3] h-px w-full bg-[var(--grey-3)]" aria-hidden />

      <div className="site-container site-grid relative z-[2] overflow-hidden rounded-b-[var(--radius-2xl)] bg-white pt-10 shadow-[0_12px_48px_oklch(0%_0_0/0.06)]">
        <div className="col-span-full flex flex-col items-center pb-20 md:col-span-20 md:col-start-3">
          <div className="mb-16 flex w-full flex-col items-center gap-8 text-center">
            <h2 className="text-h1-lg max-w-lg text-pretty text-grey-9">Begin with clarity.</h2>
            <p className="text-h3 max-w-[520px] text-pretty text-grey-7">
              See if GLP–One is right for your body and your goals.
            </p>
            <BasalButton href="/signup">Begin your clinical assessment</BasalButton>
          </div>

          <div className="grid w-full gap-10 border-t border-[var(--grey-3)] pt-12 sm:grid-cols-2 md:grid-cols-4">
            <FooterColumn title="GLP–One" links={FOOTER_LINKS.glpOne} />
            <FooterColumn title="About" links={FOOTER_LINKS.about} />
            <FooterColumn title="Learn" links={FOOTER_LINKS.learn} />
            <FooterColumn title="Support" links={FOOTER_LINKS.support} />
          </div>

          <p className="mt-12 max-w-2xl text-center text-h5 leading-relaxed text-grey-7">
            This is a physician-supervised program. GLP-1 therapies are prescription
            medications and may not be appropriate for everyone. All treatment decisions
            are made by licensed clinicians based on individual health data.
          </p>
          <p className="mt-6 text-h5 text-grey-7">
            © {new Date().getFullYear()} Athene Health, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-h5 font-medium text-grey-9">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-h5 text-grey-7 transition-colors duration-280 hover:text-grey-9"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
