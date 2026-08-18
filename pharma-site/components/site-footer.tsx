import Image from "next/image";
import { T } from "@/components/i18n";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-alt)]">
      <div className="shell flex flex-col items-center gap-5 py-14">
        <Image
          src="/handson-logo.png"
          alt="HandSon"
          width={2928}
          height={698}
          className="h-7 w-auto"
        />
        <p className="text-[0.9375rem] text-[var(--ink-muted)]">
          <T
            fr="Solutions pharmaceutiques innovantes"
            en="Innovative pharmaceutical solutions"
          />
        </p>
        <hr className="rule w-16" />
        <p className="flex flex-col items-center gap-1 text-[0.8125rem] text-[var(--ink-faint)] sm:flex-row sm:gap-3">
          <span>&copy; {new Date().getFullYear()} HandSon</span>
          <span aria-hidden className="hidden sm:inline">
            &middot;
          </span>
          <span>
            <T fr="Tous droits réservés" en="All rights reserved" />
          </span>
        </p>
      </div>
    </footer>
  );
}
