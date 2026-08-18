import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

/* Display serif — headlines only. Reads as a laboratory monograph
   rather than another geometric-sans landing page. */
const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Text face — clinical, highly legible at small sizes. */
const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Same family, Arabic script — the distribution notice is trilingual. */
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sarlhandson.com"),
  title: {
    default: "HandSon - Innovative Pharmaceutical Solutions",
    template: "%s | HandSon",
  },
  description:
    "HandSon - Innovative pharmaceutical solutions including dietary supplements for memory, cognitive function and mental vitality.",
  keywords: [
    "HandSon",
    "pharmaceutical",
    "supplements",
    "Synapgen",
    "Magnesium",
    "memory",
    "cognitive function",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sarlhandson.com",
    siteName: "HandSon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var l=localStorage.getItem('hs_lang');if(l==='en'||l==='fr'){document.documentElement.dataset.lang=l;document.documentElement.lang=l;}}catch(e){}})();",
          }}
        />
      </head>
      <body
        className={`${newsreader.variable} ${plexSans.variable} ${plexArabic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
