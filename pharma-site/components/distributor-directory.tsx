import { DISTRIBUTORS } from "@/components/distributors";
import { T } from "@/components/i18n";

/** A clear, static directory for pharmacists to find Synapgen distributors. */
export default function DistributorDirectory() {
  return (
    <section
      aria-labelledby="distributor-directory-title"
      className="bg-white py-8 sm:py-10"
    >
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="distributor-directory-title" className="font-sans text-lg font-medium leading-relaxed sm:text-xl">
            <T
              fr="Pharmaciens, retrouvez Synapgen chez les grossistes suivants :"
              en="Pharmacists, find Synapgen at the following wholesalers:"
            />
          </h2>
        </div>

        <ul className="mx-auto mt-6 grid max-w-5xl grid-cols-2 items-start gap-x-4 gap-y-5 sm:mt-7 sm:grid-cols-3 lg:grid-cols-4">
          {DISTRIBUTORS.map((name) => (
            <li
              key={name}
              className="min-w-0 text-center text-base font-semibold leading-6 text-[var(--ink-muted)]"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
