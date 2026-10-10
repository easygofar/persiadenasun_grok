import CatalogBrowser from "@/components/catalog/CatalogBrowser";
import { products } from "@/data/index";
import { createCategoryJsonLD } from "@/utils";

export const metadata = {
  title: "پرشیا دنا سان : محصولات اوروکس Orox",
  description:
    "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",

  alternates: {
    canonical: 'https://persiadenasun.ir/products/orox',
  },

  openGraph: {
    siteName: "پرشیا دنا سان - نماینده رسمی ماشین‌آلات نساجی و دوخت صنعتی",
    type: "website",
    locale: "fa_IR",
    title: "پرشیا دنا سان : محصولات اوروکس Orox",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",
    images: "https://persiadenasun.ir/images/original-jpg/orox-spreader-isign.jpg",
  },
  twitter: {
    title: "پرشیا دنا سان : محصولات اوروکس Orox",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",
    images: ["https://persiadenasun.ir/images/original-jpg/orox-spreader-isign.jpg"],
  },
};

const jsonLd = createCategoryJsonLD("Orox");

export default function OroxProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CatalogBrowser
        initialBrand="Orox"
        title="محصولات اوروکس"
        lede="دستگاه‌های برش و آماده‌سازی پارچه با فناوری ایتالیایی اوروکس."
      />
    </>
  );
}
