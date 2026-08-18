import Image from "next/image";

/** Wholesalers distributing Synapgen in Algeria. */
const DISTRIBUTORS = [
  "Pharmainvest",
  "UPROmedic",
  "Somepharm",
  "Setid Medic 2",
  "Setifismed",
  "Timelouka",
  "Setif Medic",
  "Attia Pharm",
  "Youghorta",
];

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

export default function AnnouncementBanner() {
  return (
    <aside
      aria-label="Distribution notice"
      className="sticky top-16 z-40 bg-gradient-to-r from-[var(--handson-orange)] to-[var(--handson-orange-dark)] text-white shadow-md py-2.5 sm:py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-4 font-semibold tracking-tight text-[12px] sm:text-[15px]">
          {/* Fixed lead-in: product chip + headline stay put so the
              scrolling names always keep their context. */}
          <span className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <span className="synapgen-dance inline-flex items-center justify-center h-8 sm:h-10 aspect-square drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              <Image
                src="/synapgen-3d.png"
                alt="Synapgen"
                width={64}
                height={64}
                className="h-full w-full object-contain"
                priority
              />
            </span>

            <span data-lang-only="fr" lang="fr" className="whitespace-nowrap">
              <span className="hidden sm:inline">Synapgen — </span>
              Disponible en Algérie chez&nbsp;:
            </span>
            <span data-lang-only="en" lang="en" className="whitespace-nowrap">
              <span className="hidden sm:inline">Synapgen — </span>
              Available in Algeria at:
            </span>

            <span
              aria-hidden
              className="hidden xl:inline-block w-px h-4 bg-white/40"
            />
            <span
              dir="rtl"
              lang="ar"
              className="hidden xl:inline whitespace-nowrap"
            >
              متوفر في الجزائر لدى&nbsp;:
            </span>
          </span>

          <span
            aria-hidden
            className="hidden lg:inline-block w-px h-4 bg-white/40 shrink-0"
          />

          {/* Continuously scrolling distributor list. */}
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
