import Image from "next/image";
import { DISTRIBUTORS, DISTRIBUTOR_LOGOS } from "@/components/distributors";
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

        <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:mt-7">
          {DISTRIBUTORS.map((name) => {
            const logo = DISTRIBUTOR_LOGOS[name];
            return (
              <li
                key={name}
                className="flex min-h-14 w-[calc(50%-0.75rem)] min-w-0 flex-col items-center justify-center gap-1.5 text-center sm:w-32"
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
                <span className={logo ? "text-xs font-medium leading-4 text-[var(--ink-muted)]" : "text-base font-semibold leading-5 text-[var(--ink-muted)]"}>
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
