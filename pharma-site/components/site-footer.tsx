import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { T } from "@/components/i18n";
import { DISTRIBUTORS } from "@/components/distributors";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-alt)]">
      <div className="shell py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/handson-logo.png"
              alt="HandSon"
              width={2928}
              height={698}
              className="h-7 w-auto"
            />
            <p className="lede mt-4 max-w-sm text-[0.9375rem]">
              <T
                fr="Laboratoire pharmaceutique algérien. Nous formulons et distribuons des compléments alimentaires destinés au circuit officinal."
                en="Algerian pharmaceutical laboratory. We formulate and distribute dietary supplements for the pharmacy channel."
              />
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-[0.8125rem] font-semibold tracking-[0.1em] text-[var(--ink)] uppercase">
              <T fr="Navigation" en="Navigation" />
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem] text-[var(--ink-muted)]">
              <li>
                <Link href="/#produits" className="nav-link">
                  <T fr="Produits" en="Products" />
                </Link>
              </li>
              <li>
                <Link href="/products/synapgen" className="nav-link">
                  Synapgen
                </Link>
              </li>
              <li>
                <Link href="/#distribution" className="nav-link">
                  <T fr="Distribution" en="Distribution" />
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-[0.8125rem] font-semibold tracking-[0.1em] text-[var(--ink)] uppercase">
              <T fr="Nous joindre" en="Reach us" />
            </h2>
            <ul className="mt-4 space-y-3 text-[0.9375rem] text-[var(--ink-muted)]">
              <li>
                <a
                  href="tel:+213664117011"
                  className="inline-flex items-center gap-2.5 hover:text-[var(--ink)]"
                >
                  <Phone className="h-4 w-4 text-[var(--brand)]" />
                  <span className="tnum">+213 664 11 70 11</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sarl.handson@gmail.com"
                  className="inline-flex items-center gap-2.5 hover:text-[var(--ink)]"
                >
                  <Mail className="h-4 w-4 text-[var(--brand)]" />
                  <span className="break-all">sarl.handson@gmail.com</span>
                </a>
              </li>
              <li className="text-[var(--ink-faint)]">
                <T fr="Dimanche – jeudi, 9h – 18h" en="Sunday – Thursday, 9am – 6pm" />
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule my-10" />

        <p className="text-[0.8125rem] leading-relaxed text-[var(--ink-faint)]">
          <T
            fr={`Distribué en Algérie par ${DISTRIBUTORS.join(", ")}.`}
            en={`Distributed in Algeria by ${DISTRIBUTORS.join(", ")}.`}
          />
        </p>
        <p className="mt-3 max-w-3xl text-[0.8125rem] leading-relaxed text-[var(--ink-faint)]">
          <T
            fr="Les compléments alimentaires ne se substituent pas à une alimentation variée et équilibrée ni à un mode de vie sain. Tenir hors de portée des jeunes enfants."
            en="Food supplements are not a substitute for a varied, balanced diet or a healthy lifestyle. Keep out of reach of young children."
          />
        </p>

        <div className="mt-8 flex flex-col gap-2 text-[0.8125rem] text-[var(--ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} SARL HandSon</span>
          <span>
            <T fr="Tous droits réservés" en="All rights reserved" />
          </span>
        </div>
      </div>
    </footer>
  );
}
