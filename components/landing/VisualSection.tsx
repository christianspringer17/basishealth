import { IMAGES, MediaFrame } from "./ui";

export function VisualSection() {
  return (
    <section className="flex w-full flex-col items-center py-100">
      <div className="site-container site-grid w-full place-items-center">
        <div className="col-span-full w-full md:col-span-22 md:col-start-2">
          <MediaFrame
            src={IMAGES.visual}
            alt="Health and diagnostics"
            aspect="portrait"
            rounded="2xl"
            showControls
          />
        </div>
      </div>
    </section>
  );
}
