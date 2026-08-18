import Image from "next/image";
import { DISTRIBUTORS } from "@/components/distributors";

function DistributorGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {DISTRIBUTORS.map((name) => (
        <li key={name} className="marquee-item">
          <span aria-hidden className="marquee-dot" />
          {name}
        </li>
      ))}
    </ul>
  );
}

/**
 * Distribution notice — where the product can actually be sourced.
 * The lead-in stays put; only the wholesaler names travel.
 */
export default function AnnouncementBanner() {
  return (
    <aside
      aria-label="Distribution"
      className="z-40 text-white lg:sticky lg:top-16"
      style={{ background: "var(--accent-strong)" }}
    >
      <div className="shell">
        <div className="flex flex-col items-center gap-1 py-2 text-[12.5px] sm:text-sm lg:flex-row lg:gap-5 lg:py-2.5">
          <span className="flex shrink-0 items-center gap-2.5">
            <span className="synapgen-dance inline-flex aspect-square h-7 items-center justify-center sm:h-8">
              <Image
                src="/synapgen-3d.png"
                alt=""
                width={64}
                height={64}
                className="h-full w-full object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
                priority
              />
            </span>

            <span className="font-semibold whitespace-nowrap">
              <span data-lang-only="fr" lang="fr">
                <span className="hidden sm:inline">Synapgen · </span>
                Disponible en Algérie chez&nbsp;:
              </span>
              <span data-lang-only="en" lang="en">
                <span className="hidden sm:inline">Synapgen · </span>
                Available in Algeria at:
              </span>
            </span>

            <span
              aria-hidden
              className="hidden h-3.5 w-px bg-white/40 xl:inline-block"
            />
            <span
              dir="rtl"
              lang="ar"
              className="hidden font-medium whitespace-nowrap xl:inline"
            >
              متوفر في الجزائر لدى&nbsp;:
            </span>
          </span>

          <span
            aria-hidden
            className="hidden h-3.5 w-px shrink-0 bg-white/40 lg:inline-block"
          />

          <div className="marquee w-full min-w-0 lg:flex-1">
            <div className="marquee-track">
              <DistributorGroup />
              <DistributorGroup hidden />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
