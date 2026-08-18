"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { T, LanguageToggle } from "@/components/i18n";

const NAV = [
  { href: "/#produits", fr: "Produits", en: "Products" },
  { href: "/#laboratoire", fr: "Le laboratoire", en: "The laboratory" },
  { href: "/#distribution", fr: "Distribution", en: "Distribution" },
  { href: "/#contact", fr: "Contact", en: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/92 backdrop-blur">
      <div className="shell">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" aria-label="HandSon — accueil" className="shrink-0">
            <Image
              src="/handson-logo.png"
              alt="HandSon"
              width={2928}
              height={698}
              priority
              className="h-6 w-auto sm:h-7"
            />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                <T fr={item.fr} en={item.en} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line-strong)] text-[var(--ink-muted)] md:hidden"
            >
              <span className="sr-only">
                <T fr="Ouvrir le menu" en="Open menu" />
              </span>
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="border-t border-[var(--line)] bg-white md:hidden"
        >
          <ul className="shell flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-[var(--line)] py-3 text-[0.9375rem] text-[var(--ink-muted)] last:border-0"
                >
                  <T fr={item.fr} en={item.en} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
