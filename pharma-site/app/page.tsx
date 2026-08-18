import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Check,
  FlaskConical,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Store,
} from "lucide-react"
import ContactForm from "@/components/contact-form"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AnnouncementBanner from "@/components/announcement-banner"
import { DISTRIBUTORS } from "@/components/distributors"
import { T } from "@/components/i18n"

/* Four facts that answer the questions a pharmacist asks first. */
const FACTS = [
  {
    label: { fr: "Actif principal", en: "Key active" },
    value: { fr: "Magnésium L-thréonate", en: "Magnesium L-threonate" },
  },
  {
    label: { fr: "Conditionnement", en: "Pack" },
    value: { fr: "60 gélules · 3 par jour", en: "60 capsules · 3 a day" },
  },
  {
    label: { fr: "Distribution", en: "Distribution" },
    value: { fr: "9 grossistes en Algérie", en: "9 wholesalers in Algeria" },
  },
  {
    label: { fr: "Référencement", en: "Listing" },
    value: { fr: "Accompagnement des officines", en: "Support for pharmacies" },
  },
]

const COMMITMENTS = [
  {
    icon: FlaskConical,
    title: { fr: "Formulation documentée", en: "Documented formulation" },
    body: {
      fr: "Nos formules reposent sur des actifs dont l’intérêt cognitif est décrit dans la littérature scientifique, à des dosages tenus constants d’un lot à l’autre.",
      en: "Our formulas use actives whose cognitive relevance is described in the scientific literature, at dosages held constant from batch to batch.",
    },
  },
  {
    icon: ShieldCheck,
    title: { fr: "Exigence pharmaceutique", en: "Pharmaceutical standards" },
    body: {
      fr: "Fabrication, étiquetage trilingue et traçabilité sont pensés pour le circuit officinal et pour le pharmacien qui délivre le produit au comptoir.",
      en: "Manufacturing, trilingual labelling and traceability are built for the pharmacy channel and for the pharmacist handing the product over the counter.",
    },
  },
  {
    icon: Store,
    title: { fr: "Proximité avec l’officine", en: "Close to the pharmacy" },
    body: {
      fr: "Référencement, réapprovisionnement, informations produit : notre équipe répond directement aux grossistes et aux pharmaciens qui nous sollicitent.",
      en: "Listing, restocking, product information: our team answers wholesalers and pharmacists directly.",
    },
  },
]

const BENEFITS = [
  { fr: "Soutien de la fonction mémorielle", en: "Supports memory function" },
  { fr: "Meilleure concentration au quotidien", en: "Better day-to-day concentration" },
  { fr: "Formule au Magnésium L-thréonate", en: "Magnesium L-threonate formula" },
  { fr: "Étiquetage français, anglais et arabe", en: "French, English and Arabic labelling" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <AnnouncementBanner />

      <main>
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="section pb-12 lg:pb-16">
          <div className="shell">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <p className="eyebrow rise-in">
                  <T
                    fr="Laboratoire pharmaceutique · Algérie"
                    en="Pharmaceutical laboratory · Algeria"
                  />
                </p>
                <h1 className="display-xl rise-in delay-1 mt-5">
                  <T
                    fr="Soutenir la mémoire avec une exigence pharmaceutique."
                    en="Supporting memory with pharmaceutical rigour."
                  />
                </h1>
                <p className="lede rise-in delay-2 mt-6 max-w-xl">
                  <T
                    fr="HandSon formule des compléments alimentaires à visée cognitive et les distribue à travers le réseau des grossistes répartiteurs algériens."
                    en="HandSon formulates supplements for cognitive health and distributes them through Algeria’s network of pharmaceutical wholesalers."
                  />
                </p>

                <div className="rise-in delay-3 mt-9 flex flex-wrap items-center gap-3">
                  <Link href="/products/synapgen" className="btn btn-primary">
                    <T fr="Découvrir Synapgen" en="Discover Synapgen" />
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="#contact" className="btn btn-secondary">
                    <T fr="Contacter l’équipe" en="Contact the team" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="product-stage panel-tint min-h-[22rem] px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[26rem]">
                  <Image
                    src="/synapgen-landing.png"
                    alt="Synapgen — boîtes de 60 gélules, étiquetage français et arabe"
                    width={1528}
                    height={698}
                    priority
                    className="h-auto w-full object-contain drop-shadow-[0_22px_44px_rgba(12,27,20,0.18)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────── Facts strip ────────────────────── */}
        <section
          aria-label="Repères produit"
          className="border-y border-[var(--line)] bg-white"
        >
          <div className="shell">
            <dl className="grid grid-cols-1 gap-x-10 gap-y-7 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-9">
              {FACTS.map((fact) => (
                <div key={fact.label.en}>
                  <dt className="eyebrow eyebrow-muted">
                    <T fr={fact.label.fr} en={fact.label.en} />
                  </dt>
                  <dd className="tnum mt-2 text-[0.9375rem] font-medium text-[var(--ink)]">
                    <T fr={fact.value.fr} en={fact.value.en} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ─────────────────────── Produits ─────────────────────── */}
        <section id="produits" className="section section-alt scroll-mt-24 lg:scroll-mt-32">
          <div className="shell">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <T fr="Notre gamme" en="Our range" />
              </p>
              <h2 className="display-lg mt-4">
                <T
                  fr="Un produit, travaillé en profondeur."
                  en="One product, worked through in depth."
                />
              </h2>
              <p className="lede mt-4">
                <T
                  fr="Plutôt qu’un catalogue, HandSon concentre ses moyens sur une formule cognitive et sur sa disponibilité réelle en officine."
                  en="Rather than a catalogue, HandSon concentrates its resources on one cognitive formula and on its real availability in pharmacies."
                />
              </p>
            </div>

            <article className="card card-lift mt-10 overflow-hidden bg-white">
              <div className="grid lg:grid-cols-2">
                <div className="panel-tint flex items-center justify-center border-b border-[var(--line)] px-6 py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-14">
                  <Image
                    src="/synapgen-3d.png"
                    alt="Boîte de Synapgen"
                    width={1080}
                    height={1080}
                    className="h-auto w-full max-w-sm object-contain drop-shadow-[0_18px_34px_rgba(12,27,20,0.16)]"
                  />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <span className="chip chip-brand self-start">
                    <T fr="Complément alimentaire" en="Dietary supplement" />
                  </span>
                  <h3 className="display-md mt-5">Synapgen</h3>
                  <p className="mt-1 text-[0.9375rem] text-[var(--ink-faint)]">
                    <T
                      fr="Mémoire et vitalité mentale"
                      en="Memory and mental vitality"
                    />
                  </p>

                  <p className="prose-hs mt-5">
                    <T
                      fr="Une formule au Magnésium L-thréonate, pensée pour soutenir la mémoire et la concentration au fil de la journée."
                      en="A Magnesium L-threonate formula designed to support memory and concentration through the day."
                    />
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {BENEFITS.map((benefit) => (
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

                  <Link href="/products/synapgen" className="link-arrow mt-8 self-start">
                    <T fr="Fiche produit complète" en="Full product page" />
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ───────────────────── Le laboratoire ─────────────────── */}
        <section id="laboratoire" className="section scroll-mt-24 lg:scroll-mt-32">
          <div className="shell">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <T fr="Le laboratoire" en="The laboratory" />
              </p>
              <h2 className="display-lg mt-4">
                <T
                  fr="Ce à quoi nous tenons."
                  en="What we hold ourselves to."
                />
              </h2>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
              {COMMITMENTS.map((item) => (
                <div key={item.title.en} className="bg-white p-7 lg:p-8">
                  <item.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
                  <h3 className="mt-5 font-sans text-[1.0625rem] font-semibold">
                    <T fr={item.title.fr} en={item.title.en} />
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
                    <T fr={item.body.fr} en={item.body.en} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────────── Distribution ──────────────────── */}
        <section id="distribution" className="section section-alt scroll-mt-24 lg:scroll-mt-32">
          <div className="shell">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">
                  <T fr="Distribution" en="Distribution" />
                </p>
                <h2 className="display-lg mt-4">
                  <T
                    fr="Disponible chez les grossistes répartiteurs."
                    en="Available at pharmaceutical wholesalers."
                  />
                </h2>
                <p className="lede mt-5">
                  <T
                    fr="Synapgen est référencé auprès des grossistes ci-contre. Votre officine peut le commander directement auprès de l’un d’eux."
                    en="Synapgen is listed with the wholesalers shown here. Your pharmacy can order it directly from any of them."
                  />
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] text-[var(--ink-muted)]">
                  <MapPin className="h-4 w-4 text-[var(--brand)]" />
                  <T
                    fr="Réseau national, Algérie"
                    en="Nationwide network, Algeria"
                  />
                </p>
                <div className="mt-8">
                  <Link href="#contact" className="link-arrow">
                    <T
                      fr="Demander un référencement"
                      en="Request a listing"
                    />
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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

        {/* ───────────────────────  Contact ─────────────────────── */}
        <section id="contact" className="section scroll-mt-24 lg:scroll-mt-32">
          <div className="shell">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow">Contact</p>
                <h2 className="display-lg mt-4">
                  <T fr="Parlons de votre besoin." en="Let’s talk." />
                </h2>
                <p className="lede mt-5">
                  <T
                    fr="Grossistes, pharmaciens, professionnels de santé : notre équipe répond aux demandes de référencement, d’approvisionnement et d’information produit."
                    en="Wholesalers, pharmacists, health professionals: our team handles listing, supply and product information requests."
                  />
                </p>

                <dl className="mt-9 space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" />
                    <div>
                      <dt className="eyebrow eyebrow-muted">
                        <T fr="Téléphone" en="Phone" />
                      </dt>
                      <dd className="mt-1">
                        <a
                          href="tel:+213664117011"
                          className="tnum text-[1.0625rem] font-medium hover:text-[var(--brand)]"
                        >
                          +213 664 11 70 11
                        </a>
                        <p className="mt-1 text-[0.875rem] text-[var(--ink-faint)]">
                          <T
                            fr="Dimanche – jeudi, 9h – 18h"
                            en="Sunday – Thursday, 9am – 6pm"
                          />
                        </p>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" />
                    <div>
                      <dt className="eyebrow eyebrow-muted">Email</dt>
                      <dd className="mt-1">
                        <a
                          href="mailto:sarl.handson@gmail.com"
                          className="text-[1.0625rem] font-medium break-all hover:text-[var(--brand)]"
                        >
                          sarl.handson@gmail.com
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
