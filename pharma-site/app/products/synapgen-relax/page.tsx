import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import AnnouncementBanner from "@/components/announcement-banner";
import RelaxDescription, { RELAX_DESCRIPTION } from "@/components/relax-description";
import { T } from "@/components/i18n";

const productUrl = "https://www.sarlhandson.com/products/synapgen-relax";

export const metadata: Metadata = {
  title: "Synapgen Relax — Complément alimentaire · 20 gélules",
  description: RELAX_DESCRIPTION,
  keywords: ["Synapgen Relax", "HandSon", "complément alimentaire", "20 gélules", "stress passager", "sommeil"],
  alternates: { canonical: productUrl, languages: { fr: productUrl, en: productUrl } },
  openGraph: {
    title: "Synapgen Relax — HandSon",
    description: RELAX_DESCRIPTION,
    url: productUrl,
    type: "website",
    images: [{ url: "/synapgen-relax.png", width: 1303, height: 1207, alt: "Synapgen Relax — boîte de 20 gélules" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapgen Relax — HandSon",
    description: RELAX_DESCRIPTION,
    images: ["/synapgen-relax.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Synapgen Relax",
  description: RELAX_DESCRIPTION,
  url: productUrl,
  image: "https://www.sarlhandson.com/synapgen-relax.png",
  brand: { "@type": "Brand", name: "HandSon" },
  category: "Complément alimentaire",
  additionalProperty: [{ "@type": "PropertyValue", name: "Format", value: "20 gélules" }],
};

export default function SynapgenRelaxPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader variant="back" />
      <AnnouncementBanner />
      <main>
        <section className="section">
          <div className="shell">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="product-stage panel-tint px-8 py-10 sm:px-12 sm:py-12">
                <Image src="/synapgen-relax.png" alt="Synapgen Relax — boîte de 20 gélules" width={1303} height={1207} priority className="h-56 w-full max-w-sm object-contain drop-shadow-[0_18px_34px_rgba(12,27,20,0.16)] sm:h-72 lg:h-80" />
              </div>
              <div>
                <p className="eyebrow"><T fr="Complément alimentaire" en="Dietary supplement" /></p>
                <h1 className="display-xl mt-4">Synapgen Relax</h1>
                <p className="mt-3 text-[var(--ink-faint)]">HandSon · <T fr="20 gélules" en="20 capsules" /></p>
                <div className="mt-6"><RelaxDescription /></div>
                <Link href="/#contact" className="btn btn-primary mt-8"><T fr="Nous contacter" en="Contact Us" /><ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section-alt py-10 sm:py-12">
          <div className="shell">
            <div className="max-w-2xl">
              <h2 className="display-md"><T fr="Disponibilité en Algérie" en="Availability in Algeria" /></h2>
              <p className="prose-hs mt-4"><T fr="Synapgen Relax est disponible auprès des mêmes grossistes que Synapgen. Retrouvez la liste des grossistes sur notre page d’accueil ou contactez notre équipe pour toute demande d’approvisionnement." en="Synapgen Relax is available through the same wholesalers as Synapgen. Find the wholesaler list on our homepage or contact our team with supply enquiries." /></p>
              <Link href="/#grossistes" className="link-arrow mt-5"><T fr="Voir les grossistes" en="View wholesalers" /><ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="shell">
            <Link href="/products/synapgen" className="link-arrow"><T fr="Découvrez également Synapgen →" en="Also discover Synapgen →" /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
