import { DISTRIBUTOR_WILAYAS } from "@/components/distributors";
import { T } from "@/components/i18n";

/** A clear, static directory for pharmacists to find Synapgen distributors. */
export default function DistributorDirectory() {
  return (
    <section
      aria-labelledby="distributor-directory-title"
      className="bg-[var(--brand-tint)] py-14 sm:py-16 lg:py-20"
    >
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">
            <T fr="Disponibilité" en="Availability" />
          </p>
          <h2 id="distributor-directory-title" className="display-md mt-3">
            <T
              fr="Pharmaciens, retrouvez Synapgen chez les grossistes suivants :"
              en="Pharmacists, find Synapgen at the following wholesalers:"
            />
          </h2>
        </div>

        <div className="mx-auto mt-9 grid max-w-5xl gap-5 md:grid-cols-2 lg:mt-11 lg:gap-7">
          {DISTRIBUTOR_WILAYAS.map(({ wilaya, distributors }) => (
            <article
              key={wilaya}
              className="overflow-hidden rounded-xl border border-[var(--line)] bg-white shadow-[var(--shadow-card)]"
            >
              <header className="border-b border-[var(--line)] bg-[var(--surface-alt)] px-6 py-5 sm:px-7">
                <h3 className="font-sans text-xl font-semibold tracking-[-0.02em] text-[var(--brand-strong)]">
                  {wilaya}
                </h3>
              </header>
              <ul className="divide-y divide-[var(--line)] px-6 sm:px-7">
                {distributors.map((name) => (
                  <li key={name} className="py-3.5 text-[1rem] font-medium text-[var(--ink)]">
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
