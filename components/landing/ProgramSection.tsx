"use client";

import { useState } from "react";
import { PROTOCOL_CARDS } from "@/lib/content/protocol-cards";
import { MEDIA } from "@/lib/media";
import { CinematicBlock } from "./CinematicBlock";
import { EditorialModal } from "./EditorialModal";
import { cn, PlusButton } from "./ui";

export function ProgramSection() {
  const [editorialOpen, setEditorialOpen] = useState(false);

  return (
    <>
      <section id="protocols" className="section-shell section-gap-lg w-full scroll-mt-28">
        <div className="site-container site-grid w-full">
          <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-h1-lg leading-100 text-grey-9">
                Protocols for metabolic health.
              </h2>
              <p className="text-subtitle leading-100 text-grey-7">
                Physician-guided care, built for long-term progress.
              </p>
            </div>
            <PlusButton onClick={() => setEditorialOpen(true)} />
          </div>
        </div>

        <div className="site-container site-grid w-full">
          <div className="col-span-full grid gap-4 sm:grid-cols-2 md:col-span-18 md:col-start-4 lg:grid-cols-4">
            {PROTOCOL_CARDS.map((protocol) => (
              <article
                key={protocol.name}
                className={cn(
                  "flex flex-col gap-3 rounded-basal-lg border border-[var(--grey-3)] p-6 text-left",
                  protocol.status === "coming-soon" && "opacity-80",
                )}
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-h5 text-grey-9">{protocol.name}</h3>
                  <p
                    className={cn(
                      "text-h5",
                      protocol.status === "available"
                        ? "text-grey-8"
                        : "text-grey-6",
                    )}
                  >
                    {protocol.statusLabel}
                  </p>
                </div>
                <p className="text-body text-pretty text-grey-7">
                  {protocol.description}
                </p>
              </article>
            ))}
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
          </div>
        </div>
      </section>

      <EditorialModal open={editorialOpen} onClose={() => setEditorialOpen(false)} />
    </>
  );
}
