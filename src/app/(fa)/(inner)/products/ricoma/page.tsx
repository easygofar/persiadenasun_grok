import CatalogBrowser from "@/components/catalog/CatalogBrowser";
import { createCategoryJsonLD } from "@/utils";

export const metadata = {
  title: "پرشیا دنا سان : محصولات ریکوما  Ricoma",
  description:
    "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",

  alternates: {
    canonical: 'https://persiadenasun.ir/products/ricoma',
  },

  openGraph: {
    siteName: "پرشیا دنا سان - نماینده رسمی ماشین‌آلات نساجی و دوخت صنعتی",
    type: "website",
    locale: "fa_IR",
    title: "پرشیا دنا سان : محصولات ریکوما  Ricoma",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",

    images: ["https://persiadenasun.ir/images/500px/tn_500px_Ricoma_TC-1501-8S.jpg"],
  },
  twitter: {
    title: "پرشیا دنا سان : محصولات ریکوما  Ricoma",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",

    images: ["https://persiadenasun.ir/images/500px/tn_500px_Ricoma_TC-1501-8S.jpg"],
  },
};

const jsonLd = createCategoryJsonLD("Ricoma");

export default function OshimaProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CatalogBrowser
        initialBrand="Ricoma"
        title="محصولات ریکوما"
        lede="ماشین‌های گلدوزی صنعتی و پرس حرارتی ریکوما برای کارگاه و کارخانه."
      />
    </>
  );
}
