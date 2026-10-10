import { BRANDS, SITE, links } from "@/lib/site";

const base = SITE.url;
export const ids = {
  org: `${base}/#organization`,
  site: `${base}/#website`,
  home: `${base}/#webpage`,
} as const;

const abs = (path: string) => `${base}${path}`;

/** Organization + LocalBusiness node - rendered on every page from the root layout. */
export const organizationNode = {
  "@type": ["Organization", "LocalBusiness"],
  "@id": ids.org,
  name: SITE.fullName,
  alternateName: [SITE.nameEn, "Persia Denasun"],
  url: `${base}/`,
  logo: {
    "@type": "ImageObject",
    url: abs(SITE.logo),
    width: 512,
    height: 512,
  },
  image: [abs(SITE.ogImage)],
  description: SITE.description,
  slogan: SITE.slogan,
  telephone: SITE.phoneIntl,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  hasMap: `https://www.openstreetmap.org/?mlat=${SITE.geo.lat}&mlon=${SITE.geo.lng}#map=19/${SITE.geo.lat}/${SITE.geo.lng}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: { "@type": "Country", name: "Iran" },
  knowsLanguage: ["fa", "en"],
  knowsAbout: [
    "چرخ خیاطی صنعتی",
    "دستگاه گلدوزی صنعتی",
    "ماشین‌آلات نساجی",
    "دستگاه برش و پهن‌کن پارچه",
    "پارچه ژاکارد گردباف",
  ],
  brand: BRANDS.map((b) => ({ "@type": "Brand", name: b.name })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phoneIntl,
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: ["fa", "en"],
    },
  ],
  sameAs: [links.instagram, links.telegram],
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": ids.site,
  url: `${base}/`,
  name: SITE.fullName,
  alternateName: SITE.nameEn,
  inLanguage: "fa-IR",
  publisher: { "@id": ids.org },
};

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, websiteNode],
};

export const homeGraph = (title: string, description: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": ids.home,
      url: `${base}/`,
      name: title,
      description,
      inLanguage: "fa-IR",
      isPartOf: { "@id": ids.site },
      about: { "@id": ids.org },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: abs(SITE.ogImage),
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "ItemList",
      name: "برندها و محصولات پرشیا دنا سان",
      itemListElement: BRANDS.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${b.fa} ${b.name} - ${b.headline}`,
        url: abs(`/products/${b.slug}/`),
      })),
    },
  ],
});
