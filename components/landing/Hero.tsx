export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-svh w-full items-center justify-center overflow-hidden"
    >
      <div className="hero-grain absolute inset-0 bg-[#0f0e0d]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f1a17]/80 via-[#141210] to-[#0a0908]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(199,90,42,0.12),transparent)]" />
      </div>

      <div className="site-container site-grid relative z-[2] w-full">
        <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
          <h1 className="text-h1 max-w-[900px] text-pretty text-white md:text-[clamp(2rem,5vw,3.5rem)] md:leading-[1.05] md:tracking-[-0.03em]">
            Personalized health protocols for long-term vitality.
          </h1>
        </div>
      </div>
    </section>
  );
}
