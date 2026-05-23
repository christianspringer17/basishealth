import type { Metadata } from "next";
import { LegalPage } from "@/components/landing/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Eonic Health",
  description: "How Eonic Health handles your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-sm text-[#66615c]">Last updated: May 23, 2026</p>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Overview</h2>
        <p>
          Eonic Health (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
          policy describes how we collect, use, and protect information when you
          visit our website or join our waitlist.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Information we collect</h2>
        <p>
          When you join the waitlist, we collect your email address and the time
          of submission. We may also collect standard technical data such as
          browser type and page interactions through standard analytics tools if
          enabled.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">How we use information</h2>
        <p>We use waitlist information to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Send product and launch updates you request</li>
          <li>Understand interest in Eonic Health services</li>
          <li>Improve our website and communications</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Health information</h2>
        <p>
          This marketing site does not collect clinical or protected health
          information. Any future clinical services would be governed by separate
          notices and provider relationships.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Sharing</h2>
        <p>
          We do not sell your personal information. We may use service providers
          (such as email or hosting platforms) that process data on our behalf
          under contractual obligations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Your choices</h2>
        <p>
          You may unsubscribe from marketing emails at any time using the link in
          our messages or by contacting{" "}
          <a
            href="mailto:hello@eonichealth.com"
            className="text-[#C75A2A] underline-offset-2 hover:underline"
          >
            hello@eonichealth.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a
            href="mailto:hello@eonichealth.com"
            className="text-[#C75A2A] underline-offset-2 hover:underline"
          >
            hello@eonichealth.com
          </a>
        </p>
      </section>
    </LegalPage>
  );
}
