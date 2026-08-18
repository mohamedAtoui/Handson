"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type Lang = "fr" | "en";
const STORAGE_KEY = "hs_lang";

/**
 * Renders both locales and lets CSS reveal the active one, so the
 * markup stays static and indexable. Use `useLang` when a string is
 * needed as an attribute rather than as visible text.
 */
export function T({ fr, en }: { fr: ReactNode; en: ReactNode }) {
  return (
    <>
      <span data-lang-only="fr">{fr}</span>
      <span data-lang-only="en">{en}</span>
    </>
  );
}

/** The active locale, tracked from the <html data-lang> attribute. */
export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const read = () =>
      setLang(document.documentElement.dataset.lang === "en" ? "en" : "fr");
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-lang"],
    });
    return () => observer.disconnect();
  }, []);

  return lang;
}

export function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" &&
        (localStorage.getItem(STORAGE_KEY) as Lang | null)) ||
      null;
    if (stored === "fr" || stored === "en") setLang(stored);
  }, []);

  const choose = (next: Lang) => {
    setLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next;
  };

  return (
    <div
      role="group"
      aria-label="Langue"
      className="inline-flex items-center rounded-md border border-[var(--line-strong)] p-0.5 text-[0.6875rem] font-semibold tracking-[0.08em]"
    >
      {(["fr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => choose(code)}
          aria-pressed={lang === code}
          className={`rounded px-2 py-1 transition-colors ${
            lang === code
              ? "bg-[var(--ink)] text-white"
              : "text-[var(--ink-faint)] hover:text-[var(--ink)]"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
