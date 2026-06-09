import { EdenPageShell } from "@/components/eden/EdenPageShell";

export const metadata = {
  title: "Vitality",
  description: "Cellular energy and healthy aging protocols from Basis Health.",
};

export default function VitalityTreatmentPage() {
  return (
    <EdenPageShell>
      <section className="eden-treatment-page site-container">
        <h1 className="eden-treatment-page__title">Vitality</h1>
        <p className="eden-treatment-page__lead">
          NAD+ and longevity-focused care for cellular energy and healthy aging.
        </p>
      </section>
    </EdenPageShell>
  );
}
