import { MediaPanel } from "./ui";

export function VisualSection() {
  return (
    <section className="flex w-full flex-col items-center gap-y-80 py-100">
      <div className="site-container site-grid w-full place-items-center">
        <div className="col-span-full w-full md:col-span-22 md:col-start-2">
          <MediaPanel aspect="tall" />
        </div>
      </div>
    </section>
  );
}
