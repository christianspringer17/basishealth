"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef } from "react";
import { MEDIA } from "@/lib/media";
import { BasalButton } from "./ui";

type EditorialModalProps = {
  open: boolean;
  onClose: () => void;
};

export function EditorialModal({ open, onClose }: EditorialModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="editorial-modal-root" role="presentation">
      <button
        type="button"
        className="editorial-modal-backdrop"
        aria-label="Close dialog"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="editorial-modal-panel"
      >
        <button
          type="button"
          className="editorial-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden>
            <path d="M6.4 6.4 17.6 17.6M17.6 6.4 6.4 17.6" stroke="currentColor" strokeWidth={1.5} />
          </svg>
        </button>

        <div className="editorial-modal-scroll">
          <header className="editorial-modal-intro">
            <h2 id={titleId} className="editorial-modal-title">
              Introducing GLP–One
            </h2>
            <p className="editorial-modal-lead text-grey-9">
              We don&apos;t just prescribe the molecule.
              <br />
              We manage the metabolic environment it enters.
            </p>
            <p className="editorial-modal-body text-grey-7">
              GLP-One is a physician-supervised metabolic care program built around
              modern GLP-1 therapeutics, diagnostics, and ongoing clinical oversight.
              Your protocol adapts as your body responds.
            </p>
            <div className="pt-2">
              <BasalButton href="/#waitlist" onClick={onClose}>
                Get started
              </BasalButton>
            </div>
          </header>

          <div className="editorial-modal-figure">
            <div className="editorial-modal-image-wrap">
              <Image
                src={MEDIA.editorialModal}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 860px) 100vw, 720px"
              />
            </div>
          </div>

          <section className="editorial-modal-section">
            <p className="editorial-modal-eyebrow">Why this matters</p>
            <h3 className="editorial-modal-heading">Metabolism is the foundation</h3>
            <p className="editorial-modal-body text-grey-7">
              Your metabolism is a conversation, a constant cellular dialogue
              coordinating every system in your body. When it flows, everything works
              as it should. When it breaks down, systems dysregulate, symptoms stack,
              and treatments underperform. Managing the metabolic environment is the
              foundational step to improving health.
            </p>
          </section>

          <section className="editorial-modal-section">
            <h3 className="editorial-modal-heading">
              A one-size-fits-all approach won&apos;t work.
            </h3>
            <p className="editorial-modal-body text-grey-7">
              Your metabolism is as unique as your fingerprint. GLP–One is a
              personalized protocol built to help you improve the five markers of your
              metabolic health. In addition to medication, your clinician will prescribe
              lifestyle changes. There is no magic pill. No miracle injection. Just
              research-backed tools, excellent clinician partners, and ongoing
              collaboration to measure your treatment outcomes and tailor protocols
              accordingly.
            </p>
          </section>

          <section className="editorial-modal-section editorial-modal-section--last">
            <h3 className="editorial-modal-heading">The untapped power of GLP-1s</h3>
            <p className="editorial-modal-body text-grey-7">
              GLP-1 medications were developed to treat diabetes and obesity. And they
              do. But the mechanisms they engage — blood sugar regulation, inflammation,
              cardiovascular function, appetite — suggest untapped therapeutic potential.
              GLP–One™ leverages the metabolic benefits of the drug to match your unique
              physiology and health goals.
            </p>
          </section>
        </div>

        <div className="editorial-modal-scroll-hint" aria-hidden />
      </div>
    </div>
  );
}
