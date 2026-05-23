import type { Metadata } from "next";
import { LegalPage } from "@/components/landing/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — Eonic Health",
  description: "Terms governing use of the Eonic Health website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p className="text-sm text-[#66615c]">Last updated: May 23, 2026</p>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Agreement</h2>
        <p>
          By accessing the Eonic Health website, you agree to these Terms of Use.
          If you do not agree, please do not use the site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Educational content only</h2>
        <p>
          Information on this website is provided for general educational and
          informational purposes. It does not constitute medical advice,
          diagnosis, or treatment. Always consult a licensed healthcare provider
          for personal medical decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">No guarantees</h2>
        <p>
          We do not guarantee specific health outcomes. Any future services will
          be subject to eligibility review, medical appropriateness, and
          applicable laws.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Waitlist</h2>
        <p>
          Joining the waitlist does not create a provider-patient relationship or
          guarantee access to services. We may modify or discontinue the waitlist
          or launch timeline at any time.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Intellectual property</h2>
        <p>
          Site content, branding, and materials are owned by Eonic Health or its
          licensors and may not be copied or used without permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Eonic Health is not liable for
          damages arising from your use of this website or reliance on its
          content.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#171717]">Contact</h2>
        <p>
          Questions about these terms:{" "}
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
