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

        <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-2 items-start gap-x-4 gap-y-5 sm:mt-7 sm:grid-cols-3 lg:grid-cols-6">
          {DISTRIBUTORS.map((name) => {
            const logo = DISTRIBUTOR_LOGOS[name];
            return (
              <li
                key={name}
                className="flex min-w-0 flex-col items-center gap-2 text-center"
              >
                <div aria-hidden="true" className="flex h-9 w-full items-center justify-center">
                  {logo && (
                    <Image
                      src={logo}
                      alt=""
                      width={120}
                      height={32}
                      className="h-8 w-full max-w-[120px] object-contain"
                    />
                  )}
                </div>
                <span className="text-sm font-semibold leading-5 text-[var(--ink-muted)]">
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
