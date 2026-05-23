import Image from "next/image";
import { IMAGES } from "./ui";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-svh w-full items-center justify-center overflow-hidden"
    >
      <Image
        src={IMAGES.hero}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div className="site-container site-grid relative z-[2] w-full">
        <div className="col-span-full flex flex-col items-center gap-4 px-2 text-center md:col-span-16 md:col-start-5">
          <h1 className="text-h1-xl max-w-[900px] text-pretty text-grey-1">
            Personalized health protocols for long-term vitality.
          </h1>
        </div>
      </div>
    </section>
  );
}
