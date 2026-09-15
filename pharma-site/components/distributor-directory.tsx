import { DISTRIBUTOR_WILAYAS } from "@/components/distributors";
import { T } from "@/components/i18n";

/** A clear, static directory for pharmacists to find Synapgen distributors. */
export default function DistributorDirectory() {
  return (
    <section
      aria-labelledby="distributor-directory-title"
      className="border-y border-[var(--line)] bg-[var(--brand-tint)] py-8 sm:py-10"
    >
      <div className="shell">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">
            <T fr="Disponibilité" en="Availability" />
          </p>
          <h2 id="distributor-directory-title" className="mt-2 max-w-3xl font-sans text-xl font-medium leading-snug sm:text-2xl">
            <T
              fr="Pharmaciens, retrouvez Synapgen chez les grossistes suivants :"
              en="Pharmacists, find Synapgen at the following wholesalers:"
            />
          </h2>
        </div>

        <div className="mx-auto mt-5 grid max-w-4xl items-start gap-4 md:grid-cols-2 sm:mt-6 sm:gap-5">
          {DISTRIBUTOR_WILAYAS.map(({ wilaya, distributors }) => (
            <article
              key={wilaya}
              className="overflow-hidden rounded-lg border border-[var(--line-strong)] bg-white"
            >
              <header className="border-b border-[var(--line)] bg-[var(--surface-alt)] px-5 py-3">
                <h3 className="font-sans text-lg font-semibold text-[var(--brand-strong)]">
                  {wilaya}
                </h3>
              </header>
              <ul className="divide-y divide-[var(--line)] px-5">
                {distributors.map((name) => (
                  <li key={name} className="py-2 text-[0.9375rem] font-medium leading-6 text-[var(--ink)]">
                    {name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
