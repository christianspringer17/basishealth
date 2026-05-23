import Link from "next/link";
import { PrimaryCta } from "./ui";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#e8e4df]/80 bg-white pt-16 pb-10">
      <div className="site-container flex flex-col gap-12">
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-[#e8e4df]/60 bg-[#f7f5f2]/40 px-6 py-12 text-center md:px-12">
          <h2 className="text-section max-w-lg text-[#171717] text-pretty">
            Begin with a clearer plan.
          </h2>
          <p className="max-w-md text-[#66615c] text-pretty">
            See if Eonic Health is right for your goals—join the waitlist for early
            access updates.
          </p>
          <PrimaryCta href="#waitlist">Join the waitlist</PrimaryCta>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold text-[#171717]">Eonic Health</p>
            <p className="mt-2 max-w-sm text-sm text-[#66615c]">
              Personalized, provider-guided protocols for longevity and
              performance—where medically appropriate.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm"
            aria-label="Footer navigation"
          >
            <Link
              href="#"
              className="text-[#66615c] transition-colors hover:text-[#171717]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[#66615c] transition-colors hover:text-[#171717]"
            >
              Terms
            </Link>
            <Link
              href="mailto:hello@eonichealth.com"
              className="text-[#66615c] transition-colors hover:text-[#171717]"
            >
              Contact
            </Link>
          </nav>
        </div>

        <p className="border-t border-[#e8e4df]/60 pt-8 text-xs leading-relaxed text-[#66615c]">
          Information on this site is for educational purposes only and does not
          constitute medical advice. Treatments, if prescribed, require consultation
          with a licensed medical provider and are only available if medically
          appropriate.
        </p>
        <p className="text-xs text-[#66615c]/80">
          © {new Date().getFullYear()} Eonic Health. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
