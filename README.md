# persiadenasun.ir — Persian site (Next.js 16 + Tailwind CSS 4)

B2B website of **Persia Dena Sun PLC** (پرشیا دنا سان): official representative of
Oshima, Ricoma, Siruba and Orox, and producer of Arshid fabrics.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out  (next.config.ts -> output: "export")
npm run lint
```

Optional environment variable (build time):

| Variable                       | Purpose                                              |
| ------------------------------ | ---------------------------------------------------- |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console verification meta tag content. |

## Structure

```
src/
  app/
    (fa)/
      layout.tsx        html/body, fonts, global metadata, header + footer
      (home)/page.tsx   home
      (inner)/          about, contact, products, videos — same redesign
      not-found.tsx
    sitemap.ts · robots.ts · manifest.ts
  components/
    SiteHeader.tsx · MobileMenu.tsx · SiteFooter.tsx · JsonLd.tsx
    home/               one file per home-page section
  lib/
    site.ts             company facts, brands, FAQ  (safe for client components)
    catalog.ts          reads src/data (server components only)
    schema.ts           JSON-LD graph (Organization, WebSite, WebPage, FAQPage, ItemList)
public/images/hero/     web-optimised versions of the site's own photos
public/images/og/       1200×630 social-share image
```

### Company facts live in one place

Phone, address, hours, social links, brand list and FAQ are all in `src/lib/site.ts`.
Header, footer, home page and structured data read from it, so a change is made once.

## Design

Pages follow the Persia Dena Sun redesign: navy `#0f1629`, header `#252c3e`, paper `#f3f4f8`, orange `#f66a13`.
Titles use **Lalezar**. Body copy uses **Vazirmatn**. Layout is Persian, `lang="fa"` `dir="rtl"`.

Home, about, contact, videos, the product catalogue and every product page share that system.
Company facts stay in `src/lib/site.ts`. Catalogue data stays in `src/data/index.js`.

## SEO

- Metadata, canonical, `hreflang`, Open Graph and Twitter cards
- JSON-LD: Organization + LocalBusiness, WebSite, WebPage, ItemList, Product, BreadcrumbList, ContactPage, AboutPage, VideoObject
- `sitemap.xml`, `robots.txt` (including common AI crawlers), `public/llms.txt` for answer engines
- Semantic headings, one `h1` per page, real spec tables

- Metadata API: title template, description, canonical (`./` per page), `hreflang` (`fa-IR`, `x-default`),
  Open Graph + Twitter large image (1200×630), robots with `max-image-preview: large`.
- JSON-LD: `Organization + LocalBusiness` (address, geo, opening hours, brands, sameAs) on every page;
  `WebSite`, `WebPage`, `ItemList` and `FAQPage` on the home page.
- `sitemap.xml` (priorities, change frequency, every brand and product URL), `robots.txt`, web manifest
  — all pointing at `https://persiadenasun.ir`.
- Semantic HTML: one `h1`, ordered `h2`/`h3`, landmarks (`header`, `nav`, `main`, `footer`), `address`,
  skip link, `lang="fa" dir="rtl"`, descriptive Persian `alt` text.
- Performance: fonts through `next/font/local`, LCP image is a `<picture>` with `fetchpriority="high"`,
  all other sections render server-side with no client JS (only the mobile menu and the video
  facade are client components), the video player loads only after a click, below-the-fold sections use
  `content-visibility: auto`, motion respects `prefers-reduced-motion`.
- Persian typography: no letter-spacing (it breaks joined letters), generous line height, Persian digits.

## After deploying

1. Submit `https://persiadenasun.ir/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
2. Check the home page with Google's Rich Results Test (FAQ + LocalBusiness) and PageSpeed Insights.
3. Verify the phone number: the site shows `021-63414`, which looks incomplete for a Tehran landline.
