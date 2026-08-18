"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Menu, X } from "lucide-react";
import { T, LanguageToggle } from "@/components/i18n";

const NAV = [
  { href: "/#products", fr: "Produits", en: "Products" },
  { href: "/#contact", fr: "Contact", en: "Contact" },
];

/**
 * Shared chrome for both pages. `variant="back"` swaps the section nav
 * for the return link the product page carries.
 */
export default function SiteHeader({
  variant = "nav",
}: {
  variant?: "nav" | "back";
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/92 backdrop-blur">
      <div className="shell">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" aria-label="HandSon" className="-my-2 shrink-0 py-2">
            <Image
              src="/handson-logo.png"
              alt="HandSon"
              width={2928}
              height={698}
              priority
              className="h-6 w-auto sm:h-7"
            />
          </Link>

          {variant === "nav" ? (
            <nav aria-label="Principal" className="hidden items-center gap-7 sm:flex">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  <T fr={item.fr} en={item.en} />
                </Link>
              ))}
            </nav>
          ) : (
            <Link
              href="/"
              className="nav-link ml-auto inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="max-sm:sr-only">
                <T fr="Retour à l'accueil" en="Back to Home" />
              </span>
            </Link>
          )}

          <div className="flex items-center gap-3">
            <LanguageToggle />
            {variant === "nav" ? (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="menu-mobile"
                aria-label="Menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line-strong)] text-[var(--ink-muted)] sm:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {variant === "nav" && open ? (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="border-t border-[var(--line)] bg-white sm:hidden"
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
