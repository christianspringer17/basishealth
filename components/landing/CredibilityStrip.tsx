const items = [
  "Clinician-guided",
  "Personalized protocols",
  "Built for prevention",
  "Designed for long-term health",
];

export function CredibilityStrip() {
  return (
    <section className="w-full border-y border-[#e8e4df]/60 bg-[#f7f5f2]/40 py-8 md:py-10">
      <div className="site-container">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center justify-center gap-2 text-center text-sm font-medium text-[#171717] md:text-[0.9375rem]"
            >
              <span
                className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-[#C75A2A] md:block"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
