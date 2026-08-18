import Image from "next/image";
import { T } from "@/components/i18n";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-alt)]">
      <div className="shell flex flex-col items-start gap-5 py-12 sm:items-center sm:py-14">
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
        <hr className="rule w-16 self-stretch sm:self-auto" />
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] text-[var(--ink-faint)]">
          <span>&copy; {new Date().getFullYear()} HandSon</span>
          <span aria-hidden>&middot;</span>
          <span>
            <T fr="Tous droits réservés" en="All rights reserved" />
          </span>
        </p>
      </div>
    </footer>
  );
}
