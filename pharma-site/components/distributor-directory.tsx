import Image from "next/image";
import { DISTRIBUTORS, DISTRIBUTOR_LOGOS } from "@/components/distributors";
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

        <ul className="mx-auto mt-5 grid max-w-4xl grid-cols-2 overflow-hidden rounded-lg border border-[var(--line)] bg-white sm:grid-cols-3 lg:grid-cols-4">
          {DISTRIBUTORS.map((name) => {
            const logo = DISTRIBUTOR_LOGOS[name];
            return (
              <li
                key={name}
                className="flex min-h-12 min-w-0 flex-col items-center justify-center gap-1 border-b border-[var(--line)] px-3 py-2 text-center"
              >
                {logo && (
                  <Image
                    src={logo}
                    alt=""
                    width={120}
                    height={32}
                    className="h-8 w-full max-w-[120px] object-contain"
                  />
                )}
                <span className="text-sm font-semibold leading-5 text-[var(--ink)]">
                  {name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
