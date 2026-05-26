"use client";

import { useState } from "react";
import { MEDIA } from "@/lib/media";
import { EditorialModal } from "./EditorialModal";
import { BasalButton, MediaFrame, PlusButton } from "./ui";

const pillars = [
  {
    title: "Eligibility screening & clinician review",
    body: "Structured intake gives providers the data to determine whether GLP-1 therapy is right for you—no rubber-stamp prescriptions.",
  },
  {
    title: "Personalized protocol",
    body: "Dosing, titration, and supportive care tailored to your goals and biology—not a one-size-fits-all template.",
  },
  {
    title: "Ongoing adaptive care",
    body: "Scheduled check-ins and thoughtful adjustments as your body responds over months—not days.",
  },
  {
    title: "Metabolic literacy",
    body: "Education and counseling so you understand the markers that predict long-term health—not just short-term scale change.",
  },
];

export function ProgramSection() {
  const [editorialOpen, setEditorialOpen] = useState(false);

  return (
    <>
      <section id="program" className="section-shell section-gap-lg w-full">
        <div className="site-container site-grid w-full">
          <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-h1-lg leading-100 text-grey-9">One adaptive program.</h2>
              <p className="text-h1-lg leading-100 text-grey-7">
                Clinician-guided from day one.
              </p>
            </div>
            <PlusButton onClick={() => setEditorialOpen(true)} />
          </div>
        </div>

        <div className="site-container site-grid w-full">
          <div className="section-stack-loose col-span-full md:col-span-18 md:col-start-4">
            <MediaFrame
              src={MEDIA.program}
              alt="Provider reviewing a personalized health plan"
              aspect="cinema"
              rounded="2xl"
            />

            <div className="grid w-full gap-6 pt-6 md:grid-cols-2 md:pt-10">
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

            <BasalButton href="/glp-one">Explore GLP–One</BasalButton>
          </div>
        </div>
      </section>

      <EditorialModal open={editorialOpen} onClose={() => setEditorialOpen(false)} />
    </>
  );
}
