import Link from "next/link";
import { BasalButton } from "./ui";

export function Footer() {
  return (
    <footer className="site-footer relative w-full">
      <div
        className="absolute top-0 z-[3] h-px w-full bg-[var(--grey-3)]"
        aria-hidden
      />

      <div className="site-container site-grid relative z-[2] overflow-hidden rounded-b-[var(--radius-2xl)] bg-white pt-10 shadow-[0_12px_48px_oklch(0%_0_0/0.06)]">
        <div className="col-span-full flex flex-col items-center pb-20 md:col-span-20 md:col-start-3">
          <div className="mb-16 flex w-full flex-col items-center gap-8 text-center">
            <h2 className="text-h1-lg max-w-lg text-pretty text-grey-9">
              Begin with a clearer plan.
            </h2>
            <BasalButton href="#waitlist">Join the waitlist</BasalButton>
          </div>

          <div className="grid w-full gap-12 border-t border-[var(--grey-3)] pt-12 md:grid-cols-3">
            <div>
              <h3 className="text-h5 text-grey-9">Eonic Health</h3>
              <ul className="mt-4 flex flex-col gap-2">
                <li>
                  <Link
                    href="#waitlist"
                    className="text-h5 text-grey-7 transition-colors duration-280 hover:text-grey-9"
                  >
                    Join waitlist
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-h5 text-grey-7 transition-colors duration-280 hover:text-grey-9"
                  >
                    How it works
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-h5 text-grey-9">Legal</h3>
              <ul className="mt-4 flex flex-col gap-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-h5 text-grey-7 transition-colors duration-280 hover:text-grey-9"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-h5 text-grey-7 transition-colors duration-280 hover:text-grey-9"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-h5 text-grey-9">Contact</h3>
              <ul className="mt-4 flex flex-col gap-2">
                <li>
                  <a
                    href="mailto:hello@eonichealth.com"
                    className="text-h5 text-grey-7 transition-colors duration-280 hover:text-grey-9"
                  >
                    hello@eonichealth.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-12 max-w-2xl text-center text-h5 leading-relaxed text-grey-7">
            Information on this site is for educational purposes only and does not
            constitute medical advice. Treatments, if prescribed, require consultation
            with a licensed medical provider and are only available if medically
            appropriate.
          </p>
          <p className="mt-6 text-h5 text-grey-7">
            © {new Date().getFullYear()} Eonic Health
          </p>
        </div>
      </div>
    </footer>
  );
}
