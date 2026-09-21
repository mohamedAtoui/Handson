import type { Metadata } from "next"
import { Check, Clock, Mail, Phone, Pill } from "lucide-react"
import ProductBox3D from "@/components/product-box-3d"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AnnouncementBanner from "@/components/announcement-banner"
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
  const features = [
    { en: "Memory improvement", fr: "Amélioration de la mémoire" },
    { en: "Better concentration", fr: "Meilleure concentration" },
    {
      en: "Optimized cognitive performance",
      fr: "Optimisation des performances cognitives",
    },
    { en: "Brain function support", fr: "Soutien des fonctions cérébrales" },
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
        <SiteHeader variant="back" />
        <AnnouncementBanner />

        <main>
          {/* ───────────────────── Product hero ──────────────────── */}
          <section className="section">
            <div className="shell">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-6">
                  <div className="product-stage panel-tint min-h-[19rem] sm:min-h-[24rem] lg:sticky lg:top-28 lg:min-h-[30rem]">
                    <ProductBox3D />
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <p className="eyebrow">
                    <T fr="Complément Alimentaire" en="Dietary Supplement" />
                  </p>
                  <h1 className="display-xl mt-4">Synapgen</h1>
                  <p className="mt-3 text-[1.0625rem] text-[var(--ink-faint)]">
                    by HandSon
                  </p>

                  <p className="lede mt-6 max-w-xl">
                    <T
                      fr="Une approche scientifique ciblée de la mémoire"
                      en="A targeted scientific approach to memory"
                    />
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="chip tnum">
                      <Pill className="h-4 w-4 text-[var(--brand)]" />
                      <T fr="60 gélules" en="60 capsules" />
                    </span>
                    <span className="chip tnum">
                      <Clock className="h-4 w-4 text-[var(--accent)]" />
                      <T fr="3 gélules / jour" en="3 capsules / day" />
                    </span>
                  </div>

                  <h2 className="eyebrow eyebrow-muted mt-10">
                    <T fr="Bénéfices observés" en="Observed benefits" />
                  </h2>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {features.map((feature) => (
                      <li
                        key={feature.en}
                        className="flex items-start gap-2.5 text-[0.9375rem] text-[var(--ink-muted)]"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--brand)]" />
                        <span>
                          <T fr={feature.fr} en={feature.en} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ──────────── Description & availability ─────────────── */}
          <section className="section section-alt">
            <div className="shell">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7">
                  <div
                    data-lang-only="fr"
                    lang="fr"
                    className="prose-hs text-[1.0625rem]"
                  >
                    <p>
                      Synapgen est un complément alimentaire innovant conçu pour
                      agir directement au niveau cérébral et soutenir durablement
                      les fonctions cognitives.
                    </p>
                    <p>
                      Sa formule repose sur une technologie avancée permettant une
                      action ciblée sur les mécanismes neuronaux impliqués dans la
                      mémoire et la concentration. Contrairement aux approches
                      classiques, Synapgen se distingue par sa capacité à
                      intervenir au cœur des processus cognitifs.
                    </p>
                    <p>
                      Des études scientifiques, incluant des essais cliniques
                      randomisés en double aveugle, ont mis en évidence une
                      amélioration significative des performances mnésiques ainsi
                      que des fonctions cognitives globales après supplémentation.
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
                    className="prose-hs text-[1.0625rem]"
                  >
                    <p>
                      Synapgen is an innovative dietary supplement designed to
                      act directly at the cerebral level and provide lasting
                      support for cognitive functions.
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
                  <div
                    className="card card-bleed p-5 sm:p-7"
                    style={{
                      background: "var(--brand-tint)",
                      borderColor: "rgba(16,122,68,0.2)",
                    }}
                  >
                    <h2 className="eyebrow">
                      <T fr="Disponibilité" en="Availability" />
                    </h2>

                    <p
                      data-lang-only="fr"
                      lang="fr"
                      className="mt-4 text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]"
                    >
                      Synapgen est disponible auprès des principaux grossistes
                      pharmaceutiques. Pour toute demande de référencement,
                      d&rsquo;approvisionnement ou d&rsquo;informations
                      commerciales, notre équipe reste à votre disposition afin de
                      vous accompagner dans l&rsquo;intégration du produit au sein
                      de votre officine.
                    </p>
                    <p
                      data-lang-only="en"
                      lang="en"
                      className="mt-4 text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]"
                    >
                      Synapgen is available through leading pharmaceutical
                      wholesalers. For any inquiries about listing, supply, or
                      commercial information, our team is at your disposal to
                      support the integration of the product into your pharmacy.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 text-[0.9375rem]">
                      <a
                        href="tel:+213664117011"
                        className="inline-flex items-center gap-2.5 py-1 font-medium hover:text-[var(--brand-strong)]"
                      >
                        <Phone className="h-4 w-4 text-[var(--brand)]" />
                        <span className="tnum">+213 664 11 70 11</span>
                      </a>
                      <a
                        href="mailto:sarl.handson@gmail.com"
                        className="inline-flex items-center gap-2.5 py-1 font-medium hover:text-[var(--brand-strong)]"
                      >
                        <Mail className="h-4 w-4 shrink-0 text-[var(--brand)]" />
                        <span className="break-all">sarl.handson@gmail.com</span>
                      </a>
                    </div>
                  </div>
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
