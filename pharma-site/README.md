# HandSon — sarlhandson.com

Corporate site for SARL HandSon, an Algerian pharmaceutical laboratory, and its
product Synapgen. Built with Next.js (App Router), React 19 and Tailwind CSS v4.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

`POST /api/contact` sends the contact form through SendGrid and needs two
environment variables:

| Variable            | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `SENDGRID_API_KEY`  | SendGrid API key                                   |
| `ADMIN_EMAIL`       | Recipient — must be a verified SendGrid sender      |

## How it is put together

- `app/page.tsx` — home: hero, product, laboratory, distribution, contact.
- `app/products/synapgen/page.tsx` — product page, including its JSON-LD.
- `app/globals.css` — the design system: colour and type tokens, then the
  layout, typography, control and surface classes everything else composes.
- `components/site-header.tsx`, `site-footer.tsx` — shared chrome.
- `components/announcement-banner.tsx` — distribution notice with the
  scrolling wholesaler list.
- `components/distributors.ts` — single source for the wholesaler names, used
  by the banner, both pages and the footer.
- `components/i18n.tsx` — French/English switching. `<T fr en />` renders both
  locales and CSS reveals the active one, so every page stays static and
  indexable in both languages; `useLang()` is for strings needed as attributes.

## Design system in short

Newsreader for headings, IBM Plex Sans for text, IBM Plex Sans Arabic for the
Arabic script. One green carries the brand; orange is reserved for the
distribution notice. All text pairs meet WCAG AA, motion respects
`prefers-reduced-motion`, and colours are defined once as tokens in
`:root` — style through the tokens rather than hard-coding hex values.
