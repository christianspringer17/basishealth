import { MEDIA } from "@/lib/media";
import { primaryCtaHref, primaryCtaLabel } from "@/lib/cta";
import { BasalButton, TextBlock } from "./ui";

export function IntroSection() {
  return (
    <section id="intro" className="section-shell section-gap-lg w-full scroll-mt-28">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 md:col-span-16 md:col-start-5">
          <TextBlock
            title="Introducing Basis Metabolic"
            subtitle="Take a short online assessment. A licensed provider reviews your eligibility and, if clinically appropriate, prescribes physician-guided GLP-1 care with personalized dosing and a plan that evolves as you do."
          />
          <div className="flex justify-center pt-1">
            <BasalButton href={primaryCtaHref()}>{primaryCtaLabel()}</BasalButton>
          </div>
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="intro-product col-span-full md:col-span-22 md:col-start-2">
          <figure className="intro-product__shot">
            {/* Native img — full 2048px asset, no optimizer downscale */}
            <img
              src={MEDIA.homeIntroProduct}
              alt="GLP-One prescription kit with packaging, vial, and syringe"
              width={1183}
              height={769}
              decoding="async"
              fetchPriority="high"
              className="intro-product__img"
              draggable={false}
            />
          </figure>
          <p className="intro-product__disclaimer">
            Prescription-only if a provider determines treatment is appropriate. Product
            appearance may vary by pharmacy partner. Compounded medications are prepared
            per prescriber direction.
          </p>
        </div>
      </div>
    </section>
  );
}
