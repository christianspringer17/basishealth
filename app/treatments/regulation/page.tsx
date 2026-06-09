import { EdenPageShell } from "@/components/eden/EdenPageShell";

export const metadata = {
  title: "Regulation",
  description: "Hormonal balance and optimization protocols from Basis Health.",
};

export default function RegulationTreatmentPage() {
  return (
    <EdenPageShell>
      <section className="eden-treatment-page site-container">
        <h1 className="eden-treatment-page__title">Regulation</h1>
        <p className="eden-treatment-page__lead">
          Clinician-guided protocols for hormonal balance and long-term optimization.
        </p>
      </section>
    </EdenPageShell>
  );
}
