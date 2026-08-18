import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Mail, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AnnouncementBanner from "@/components/announcement-banner"
import { T } from "@/components/i18n"

const FEATURES = [
  { fr: "Soutien de la fonction mémorielle", en: "Supports memory function" },
  { fr: "Améliore la concentration", en: "Enhances concentration" },
  { fr: "Contient du Magnésium L-Thréonate", en: "Contains Magnesium L-thréonate" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <AnnouncementBanner />

      <main>
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="section">
          <div className="shell">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <h1 className="display-lg rise-in max-w-xl">
                  <T
                    fr="Des solutions pharmaceutiques innovantes pour votre santé et votre bien-être"
                    en="Innovative pharmaceutical solutions for your health and well-being"
                  />
                </h1>

                <div className="rise-in delay-2 mt-9 flex flex-wrap items-center gap-3">
                  <Link href="#products" className="btn btn-primary w-full sm:w-auto">
                    <T fr="Voir les produits" en="View Products" />
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="#contact" className="btn btn-secondary w-full sm:w-auto">
                    <T fr="Nous contacter" en="Contact Us" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="product-stage panel-tint min-h-[18rem] px-5 py-10 sm:min-h-[22rem] sm:px-10 sm:py-16 lg:min-h-[26rem]">
                  <Image
                    src="/synapgen-landing.png"
                    alt="Synapgen - Memory and Mental Vitality Supplement"
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

        {/* ─────────────────────── Products ─────────────────────── */}
        <section
          id="products"
          className="section section-alt scroll-mt-24 lg:scroll-mt-32"
        >
          <div className="shell">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <T fr="Nos produits" en="Our Products" />
              </p>
              <h2 className="display-lg mt-4">
                <T fr="Découvrez nos solutions" en="Discover Our Solutions" />
              </h2>
              <p className="lede mt-4">
                <T
                  fr="Des produits pharmaceutiques de qualité conçus pour soutenir votre santé et votre bien-être cognitif."
                  en="Quality pharmaceutical products designed to support your health and cognitive well-being."
                />
              </p>
            </div>

            <article className="card card-bleed card-lift mt-8 overflow-hidden bg-white sm:mt-10">
              <div className="grid lg:grid-cols-2">
                <div className="panel-tint flex items-center justify-center border-b border-[var(--line)] px-5 py-9 sm:px-6 sm:py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-14">
                  <Image
                    src="/synapgen-3d.png"
                    alt="Synapgen - Memory and Mental Vitality Supplement"
                    width={1080}
                    height={1080}
                    className="h-auto w-full max-w-sm object-contain drop-shadow-[0_18px_34px_rgba(12,27,20,0.16)]"
                  />
                </div>

                <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-10">
                  <span className="chip chip-brand self-start">
                    <T fr="Complément Alimentaire" en="Dietary Supplement" />
                  </span>
                  <h3 className="display-md mt-5">Synapgen</h3>

                  <p className="prose-hs mt-4">
                    <T
                      fr="Votre allié pour une mémoire plus claire et une meilleure concentration. Soutient la mémoire, la concentration et les fonctions cognitives grâce au Magnésium L-thréonate."
                      en="Your ally for clearer memory and better focus. Supports memory, concentration and cognitive functions with Magnesium L-thréonate."
                    />
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {FEATURES.map((feature) => (
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

                  <Link href="/products/synapgen" className="link-arrow mt-8 self-start">
                    <T fr="En savoir plus" en="Learn More" />
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ─────────────────────── Contact ──────────────────────── */}
        <section id="contact" className="section scroll-mt-24 lg:scroll-mt-32">
          <div className="shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Contact</p>
              <h2 className="display-lg mt-4">
                <T fr="Entrons en contact" en="Get In Touch" />
              </h2>
              <p className="lede mt-4">
                <T
                  fr="Notre équipe est à votre disposition pour répondre à vos questions et accompagner vos projets."
                  en="Our team is at your disposal to answer your questions and support your projects."
                />
              </p>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h3 className="font-sans text-[1.0625rem] font-semibold">
                  <T fr="Informations de contact" en="Contact Information" />
                </h3>

                <dl className="mt-6 space-y-6">
                  <div>
                    <dt className="eyebrow eyebrow-muted flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[var(--brand)]" />
                      Email
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href="mailto:contact@handson.com"
                        className="inline-block py-1 text-[1.0625rem] font-medium break-all hover:text-[var(--brand)]"
                      >
                        contact@handson.com
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="eyebrow eyebrow-muted flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[var(--brand)]" />
                      <T fr="Téléphone" en="Phone" />
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href="tel:+213664117011"
                        className="tnum inline-block py-1 text-[1.0625rem] font-medium hover:text-[var(--brand)]"
                      >
                        +213 (0) 664117011
                      </a>
                      <p className="mt-1 text-[0.875rem] text-[var(--ink-faint)]">
                        <T fr="Dim–Jeu : 9h – 18h" en="Sun–Thu: 9:00 AM – 6:00 PM" />
                      </p>
                    </dd>
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
