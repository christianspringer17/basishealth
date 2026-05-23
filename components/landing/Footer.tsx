import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer relative w-full">
      <div className="absolute top-0 z-[3] h-px w-full bg-[var(--grey-3)]" aria-hidden />
      <div className="site-container site-grid relative z-[2] items-center overflow-hidden rounded-b-2xl bg-white pt-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
        <div className="col-span-full flex flex-col items-center pb-16 md:col-span-20 md:col-start-3">
          <div className="grid w-full gap-12 md:grid-cols-2">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-h5 text-grey-9">Eonic Health</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  <li>
                    <Link
                      href="#waitlist"
                      className="text-h5 text-grey-7 transition-colors hover:text-grey-9"
                    >
                      Join waitlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#how-it-works"
                      className="text-h5 text-grey-7 transition-colors hover:text-grey-9"
                    >
                      How it works
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-h5 text-grey-9">Company</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-h5 text-grey-7 transition-colors hover:text-grey-9"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-h5 text-grey-7 transition-colors hover:text-grey-9"
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
                      className="text-h5 text-grey-7 transition-colors hover:text-grey-9"
                    >
                      hello@eonichealth.com
                    </a>
                  </li>
                </ul>
              </div>
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
