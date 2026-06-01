"use client";

import { useState } from "react";
import { MEDIA } from "@/lib/media";
import { CinematicBlock } from "./CinematicBlock";
import { EditorialModal } from "./EditorialModal";
import { BasalButton, PlusButton } from "./ui";

export function ProgramSection() {
  const [editorialOpen, setEditorialOpen] = useState(false);

  return (
    <>
      <section id="program" className="section-shell section-gap-lg w-full">
        <div className="site-container site-grid w-full">
          <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-h1-lg leading-100 text-grey-9">One adaptive program.</h2>
              <p className="text-subtitle leading-100 text-grey-7">
                Clinician-guided from day one.
              </p>
            </div>
            <PlusButton onClick={() => setEditorialOpen(true)} />
          </div>
        </div>

        <div className="site-container site-grid w-full">
          <div className="section-stack col-span-full md:col-span-18 md:col-start-4">
            <CinematicBlock
              poster={MEDIA.programPoster}
              videoSrc={MEDIA.programVideo}
              alt="Clinician-guided metabolic care"
              aspect="cinema"
              rounded="2xl"
              showControls
            />

            <BasalButton href="/glp-one" className="mt-6">
              Explore GLP–One
            </BasalButton>
          </div>
        </div>
      </section>

      <EditorialModal open={editorialOpen} onClose={() => setEditorialOpen(false)} />
    </>
  );
}
