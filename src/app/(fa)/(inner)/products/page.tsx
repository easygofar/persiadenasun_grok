import type { Metadata } from "next";
import CatalogBrowser from "@/components/catalog/CatalogBrowser";
import { SITE } from "@/lib/site";
import { products } from "@/data";

export const metadata: Metadata = {
  title: { absolute: "محصولات پرشیا دنا سان | ماشین‌آلات نساجی و چرخ خیاطی صنعتی" },
  description:
    "کاتالوگ چرخ خیاطی صنعتی سیروبا، ماشین گلدوزی ریکوما، تجهیزات اوشیما، دستگاه برش و پارچه گردباف آرشید در پرشیا دنا سان.",
  alternates: {
    canonical: "/products/",
    languages: { "fa-IR": "/products/", "x-default": "/products/" },
  },
  openGraph: {
    title: "محصولات پرشیا دنا سان",
    description:
      "چرخ‌های خیاطی صنعتی، ماشین‌های گلدوزی، تجهیزات برش و پرس و پارچه‌های آرشید.",
    locale: "fa_IR",
    type: "website",
    url: "/products/",
    images: [SITE.ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "محصولات پرشیا دنا سان",
  url: `${SITE.url}/products/`,
  inLanguage: "fa-IR",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: products.length,
    itemListElement: products.slice(0, 48).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${p.brandFarsi} ${p.name} ${p.model}`,
      url: `${SITE.url}/products/${String(p.brand).toLowerCase()}/${p.id}/`,
    })),
  },
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CatalogBrowser
        title="محصولات پرشیا دنا سان"
        lede="چرخ‌های خیاطی صنعتی سیروبا، ماشین‌های گلدوزی ریکوما، تجهیزات اوشیما، دستگاه برش و پارچه‌های گردباف آرشید"
      />
    </>
  );
}
