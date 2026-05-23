"use client";

import { useState } from "react";
import { MEDIA } from "@/lib/media";
import { EditorialModal } from "./EditorialModal";
import { BasalButton, MediaFrame, PlusButton } from "./ui";

const pillars = [
  {
    title: "Clinical intake",
    body: "Structured assessment and eligibility review with licensed providers.",
  },
  {
    title: "Personalized protocol",
    body: "A plan aligned to your goals and health context—not a generic template.",
  },
  {
    title: "Ongoing adaptation",
    body: "Check-ins and adjustments as your biomarkers and priorities evolve.",
  },
];

export function ProgramSection() {
  const [editorialOpen, setEditorialOpen] = useState(false);

  return (
    <>
      <section
        id="program"
        className="section-shell section-gap-lg w-full"
      >
        <div className="site-container site-grid w-full">
          <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-h1-lg leading-100 text-grey-9">One guided program.</h2>
              <p className="text-h1-lg leading-100 text-grey-7">
                Clinician-guided from day one.
              </p>
            </div>
            <PlusButton onClick={() => setEditorialOpen(true)} />
          </div>
        </div>

        <div className="site-container site-grid w-full place-items-center gap-y-80">
          <div className="col-span-full w-full md:col-span-18 md:col-start-4">
            <MediaFrame
              src={MEDIA.program}
              alt="Provider reviewing a personalized health plan"
              aspect="cinema"
              rounded="2xl"
            />
          </div>

          <div className="col-span-full grid w-full gap-8 md:col-span-20 md:col-start-3 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col gap-2 rounded-basal-lg border border-[var(--grey-3)] bg-[var(--grey-1)] p-6"
              >
                <h3 className="text-h4 text-grey-9">{pillar.title}</h3>
                <p className="text-h5 text-pretty text-grey-7">{pillar.body}</p>
              </div>
            ))}
          </div>

          <div className="col-span-full flex justify-center md:col-span-16 md:col-start-5">
            <BasalButton href="#how-it-works" tone="grey">
              See how it works
            </BasalButton>
          </div>
        </div>
      </section>

      <EditorialModal open={editorialOpen} onClose={() => setEditorialOpen(false)} />
    </>
  );
}
