import { PlusButton } from "./ui";

export function ProgramSection() {
  return (
    <section className="flex w-full flex-col items-center py-100">
      <div className="px-horz flex w-full flex-col items-center gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-h1-lg leading-100 text-grey-9">One guided program.</h2>
          <p className="text-h1-lg leading-100 text-grey-7">
            Clinician-guided from day one.
          </p>
        </div>
        <PlusButton />
      </div>
    </section>
  );
}
