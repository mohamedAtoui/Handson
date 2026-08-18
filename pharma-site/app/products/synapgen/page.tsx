import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, ChevronRight, Mail, Phone } from "lucide-react"
import ProductBox3D from "@/components/product-box-3d"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AnnouncementBanner from "@/components/announcement-banner"
import { DISTRIBUTORS } from "@/components/distributors"
import { T } from "@/components/i18n"

export const metadata: Metadata = {
  title: "Synapgen by HandSon - Complément Alimentaire Magnésium L-Thréonate | Memory Supplement",
  description:
    "Synapgen HandSon - Complément alimentaire à base de Magnésium L-Thréonate pour la mémoire et les fonctions cognitives. Dietary supplement for memory, concentration and cognitive support.",
  keywords: [
    // Primary search terms
    "Synapgen HandSon",
    "Synapgen",
    "HandSon Synapgen",
    "complément alimentaire Synapgen",
    // English
    "Magnesium L-threonate",
    "L-threonate",
    "Mg",
    "MgT",
    "HandSon",
    "memory supplement",
    "cognitive function",
    "concentration",
    "brain health",
    "mental vitality",
    // French (Algeria)
    "Magnésium L-Thréonate",
    "Mémoire",
    "Concentration",
    "Fonctions cognitives",
    "Gériatrie",
    "Examen",
    "complément alimentaire mémoire",
    "soutien cognitif",
    // Arabic (Algeria)
    "مغنزيوم",
    "مغنيزيوم ل ثريونات",
    "ذاكرة",
    "تركيز",
    "اختبار",
    "سينابجين",
  ],
  openGraph: {
    title: "Synapgen by HandSon - Complément Alimentaire Mémoire | Memory Supplement",
    description:
      "Synapgen HandSon - Votre allié pour une mémoire plus claire! Magnésium L-Thréonate pour mémoire, concentration et fonctions cognitives. Your ally for clearer memory and better focus!",
    url: "https://www.sarlhandson.com/products/synapgen",
    type: "website",
    images: [
      {
        url: "/synapgen-landing.png",
        width: 800,
        height: 600,
        alt: "Synapgen HandSon - Memory and Mental Vitality Supplement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapgen by HandSon - Memory & Cognitive Support",
    description:
      "Synapgen HandSon - Magnésium L-Thréonate pour mémoire et fonctions cognitives. Memory support supplement.",
    images: ["/synapgen-landing.png"],
  },
  alternates: {
    canonical: "https://www.sarlhandson.com/products/synapgen",
    languages: {
      "en": "https://www.sarlhandson.com/products/synapgen",
      "fr": "https://www.sarlhandson.com/products/synapgen",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Synapgen",
  alternateName: ["Synapgen HandSon", "Complément Alimentaire Synapgen"],
  description:
    "Synapgen is a dietary supplement with Magnesium L-threonate that supports memory, concentration and cognitive functions for clearer memory and better focus. Synapgen est un complément alimentaire à base de Magnésium L-Thréonate pour la mémoire et les fonctions cognitives.",
  gtin13: "6132632000067",
  sku: "SYNAPGEN-60",
  brand: {
    "@type": "Brand",
    name: "HandSon",
  },
  manufacturer: {
    "@type": "Organization",
    name: "HandSon",
    alternateName: "SARL HandSon",
    url: "https://www.sarlhandson.com",
  },
  category: "Dietary Supplement",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Active Ingredient",
      value: "Magnesium L-Threonate",
    },
    {
      "@type": "PropertyValue",
      name: "Capsules",
      value: "60",
    },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "DZD",
    seller: {
      "@type": "Organization",
      name: "HandSon",
      url: "https://www.sarlhandson.com",
    },
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HandSon",
  alternateName: "SARL HandSon",
  url: "https://www.sarlhandson.com",
  logo: "https://www.sarlhandson.com/handson-logo.png",
  description: "HandSon - Innovative pharmaceutical solutions and dietary supplements",
}

export default function SynapgenPage() {
  const benefits = [
    { fr: "Amélioration de la mémoire", en: "Memory improvement" },
    { fr: "Meilleure concentration", en: "Better concentration" },
    {
      fr: "Optimisation des performances cognitives",
      en: "Optimized cognitive performance",
    },
    { fr: "Soutien des fonctions cérébrales", en: "Brain function support" },
  ]

  /* Catalogue data a pharmacist or buyer looks for before listing. */
  const specs = [
    {
      label: { fr: "Actif principal", en: "Key active" },
      value: { fr: "Magnésium L-thréonate", en: "Magnesium L-threonate" },
    },
    {
      label: { fr: "Conditionnement", en: "Pack size" },
      value: { fr: "60 gélules — 40 g", en: "60 capsules — 40 g" },
    },
    {
      label: { fr: "Conseil d’utilisation", en: "Directions" },
      value: { fr: "3 gélules par jour", en: "3 capsules a day" },
    },
    {
      label: { fr: "Durée du programme", en: "Programme length" },
      value: { fr: "20 jours par boîte", en: "20 days per box" },
    },
    {
      label: { fr: "Étiquetage", en: "Labelling" },
      value: { fr: "Français · Anglais · Arabe", en: "French · English · Arabic" },
    },
    {
      label: { fr: "Code GTIN", en: "GTIN" },
      value: { fr: "6132632000067", en: "6132632000067" },
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <SiteHeader />
        <AnnouncementBanner />

        <main>
          {/* Breadcrumb */}
          <nav aria-label="Fil d’Ariane" className="border-b border-[var(--line)]">
            <div className="shell">
              <ol className="flex items-center gap-2 py-3.5 text-[0.8125rem] text-[var(--ink-faint)]">
                <li>
                  <Link href="/" className="hover:text-[var(--ink)]">
                    <T fr="Accueil" en="Home" />
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                <li>
                  <Link href="/#produits" className="hover:text-[var(--ink)]">
                    <T fr="Produits" en="Products" />
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                <li aria-current="page" className="text-[var(--ink)]">
                  Synapgen
                </li>
              </ol>
            </div>
          </nav>

          {/* ───────────────────── Product hero ──────────────────── */}
          <section className="section pt-10 lg:pt-14">
            <div className="shell">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-6">
                  <div className="product-stage panel-tint min-h-[24rem] lg:sticky lg:top-28 lg:min-h-[30rem]">
                    <ProductBox3D />
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <p className="eyebrow">
                    <T fr="Complément alimentaire" en="Dietary supplement" />
                  </p>
                  <h1 className="display-xl mt-4">Synapgen</h1>
                  <p className="mt-3 text-[1.0625rem] text-[var(--ink-faint)]">
                    <T
                      fr="Mémoire et vitalité mentale — par HandSon"
                      en="Memory and mental vitality — by HandSon"
                    />
                  </p>

                  <p className="lede mt-6 max-w-xl">
                    <T
                      fr="Une approche scientifique ciblée de la mémoire, formulée autour du Magnésium L-thréonate."
                      en="A targeted scientific approach to memory, formulated around Magnesium L-threonate."
                    />
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="chip tnum">
                      <T fr="60 gélules" en="60 capsules" />
                    </span>
                    <span className="chip tnum">
                      <T fr="3 gélules / jour" en="3 capsules / day" />
                    </span>
                    <span className="chip">
                      <T fr="Magnésium L-thréonate" en="Magnesium L-threonate" />
                    </span>
                  </div>

                  <h2 className="eyebrow eyebrow-muted mt-10">
                    <T fr="Bénéfices observés" en="Observed benefits" />
                  </h2>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {benefits.map((benefit) => (
                      <li
                        key={benefit.en}
                        className="flex items-start gap-2.5 text-[0.9375rem] text-[var(--ink-muted)]"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--brand)]" />
                        <span>
                          <T fr={benefit.fr} en={benefit.en} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Link href="/#contact" className="btn btn-primary">
                      <T
                        fr="Demander un référencement"
                        en="Request a listing"
                      />
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href="tel:+213664117011" className="btn btn-secondary tnum">
                      <Phone className="h-4 w-4" />
                      +213 664 11 70 11
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────────── Formula & specs ─────────────────── */}
          <section className="section section-alt">
            <div className="shell">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7">
                  <p className="eyebrow">
                    <T fr="La formule" en="The formula" />
                  </p>
                  <h2 className="display-lg mt-4">
                    <T
                      fr="Agir au cœur des processus cognitifs."
                      en="Acting at the heart of cognitive processes."
                    />
                  </h2>

                  <div
                    data-lang-only="fr"
                    lang="fr"
                    className="prose-hs mt-6 text-[1.0625rem]"
                  >
                    <p>
                      Synapgen est un complément alimentaire conçu pour agir
                      directement au niveau cérébral et soutenir durablement les
                      fonctions cognitives.
                    </p>
                    <p>
                      Sa formule repose sur une technologie avancée permettant
                      une action ciblée sur les mécanismes neuronaux impliqués
                      dans la mémoire et la concentration. Contrairement aux
                      approches classiques, Synapgen se distingue par sa
                      capacité à intervenir au cœur des processus cognitifs.
                    </p>
                    <p>
                      Des études scientifiques, incluant des essais cliniques
                      randomisés en double aveugle, ont mis en évidence une
                      amélioration significative des performances mnésiques
                      ainsi que des fonctions cognitives globales après
                      supplémentation.
                    </p>
                    <p>
                      Les données expérimentales montrent également un effet
                      positif sur la plasticité synaptique, un élément clé dans
                      les processus d&rsquo;apprentissage et de mémorisation.
                    </p>
                  </div>

                  <div
                    data-lang-only="en"
                    lang="en"
                    className="prose-hs mt-6 text-[1.0625rem]"
                  >
                    <p>
                      Synapgen is a dietary supplement designed to act directly
                      at the cerebral level and provide lasting support for
                      cognitive functions.
                    </p>
                    <p>
                      Its formula relies on advanced technology that targets the
                      neuronal mechanisms involved in memory and concentration.
                      Unlike conventional approaches, Synapgen stands out for
                      its ability to act at the heart of cognitive processes.
                    </p>
                    <p>
                      Scientific studies, including randomized double-blind
                      clinical trials, have demonstrated a significant
                      improvement in memory performance as well as overall
                      cognitive function following supplementation.
                    </p>
                    <p>
                      Experimental data also show a positive effect on synaptic
                      plasticity, a key element in learning and memorization
                      processes.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="card bg-white p-6 sm:p-8">
                    <h3 className="font-sans text-[1.0625rem] font-semibold">
                      <T fr="Fiche technique" en="Specifications" />
                    </h3>
                    <dl className="mt-5 divide-y divide-[var(--line)]">
                      {specs.map((spec) => (
                        <div
                          key={spec.label.en}
                          className="flex items-baseline justify-between gap-6 py-3"
                        >
                          <dt className="text-[0.875rem] text-[var(--ink-faint)]">
                            <T fr={spec.label.fr} en={spec.label.en} />
                          </dt>
                          <dd className="tnum text-right text-[0.9375rem] font-medium text-[var(--ink)]">
                            <T fr={spec.value.fr} en={spec.value.en} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-5 text-[0.8125rem] leading-relaxed text-[var(--ink-faint)]">
                      <T
                        fr="À conserver à l’abri de la chaleur et de l’humidité. Ne pas dépasser la dose journalière recommandée."
                        en="Store away from heat and moisture. Do not exceed the recommended daily dose."
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ────────────────────── Availability ─────────────────── */}
          <section className="section">
            <div className="shell">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <p className="eyebrow">
                    <T fr="Disponibilité" en="Availability" />
                  </p>
                  <h2 className="display-lg mt-4">
                    <T
                      fr="Commandez auprès de votre grossiste."
                      en="Order from your wholesaler."
                    />
                  </h2>
                  <p className="lede mt-5">
                    <T
                      fr="Synapgen est référencé auprès des principaux grossistes répartiteurs algériens. Pour le référencement, l’approvisionnement ou toute information commerciale, notre équipe accompagne votre officine."
                      en="Synapgen is listed with Algeria’s main pharmaceutical wholesalers. For listing, supply or commercial information, our team supports your pharmacy."
                    />
                  </p>

                  <div className="mt-8 flex flex-col gap-3 text-[0.9375rem]">
                    <a
                      href="tel:+213664117011"
                      className="inline-flex items-center gap-2.5 font-medium hover:text-[var(--brand)]"
                    >
                      <Phone className="h-4 w-4 text-[var(--brand)]" />
                      <span className="tnum">+213 664 11 70 11</span>
                    </a>
                    <a
                      href="mailto:sarl.handson@gmail.com"
                      className="inline-flex items-center gap-2.5 font-medium hover:text-[var(--brand)]"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-[var(--brand)]" />
                      <span className="break-all">sarl.handson@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
                    {DISTRIBUTORS.map((name) => (
                      <li
                        key={name}
                        className="flex min-h-[4.75rem] items-center bg-white px-5 py-5 text-[0.9375rem] font-medium text-[var(--ink)] transition-colors hover:bg-[var(--brand-tint)]"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
