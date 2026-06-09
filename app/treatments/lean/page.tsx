import { EdenPageShell } from "@/components/eden/EdenPageShell";

export const metadata = {
  title: "Lean",
  description: "Body composition and metabolic health protocols from Basis Health.",
};

export default function LeanTreatmentPage() {
  return (
    <EdenPageShell>
      <section className="eden-treatment-page site-container">
        <h1 className="eden-treatment-page__title">Lean</h1>
        <p className="eden-treatment-page__lead">
          Physician-guided programs for body composition and sustainable metabolic health.
        </p>
      </section>
    </EdenPageShell>
  );
}
