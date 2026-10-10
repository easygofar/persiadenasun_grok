import CatalogBrowser from "@/components/catalog/CatalogBrowser";
import { createCategoryJsonLD } from "@/utils";

export const metadata = {
  title: "پرشیا دنا سان : محصولات اوشیما Oshima",
  description:
    "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",
  alternates: {
    canonical: 'https://persiadenasun.ir/products/oshima',
  },
  openGraph: {
    siteName: "پرشیا دنا سان - نماینده رسمی ماشین‌آلات نساجی و دوخت صنعتی",
    type: "website",
    locale: "fa_IR",
    title: "پرشیا دنا سان : محصولات اوشیما Oshima",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",

    images: "https://persiadenasun.ir/images/500px/tn_500px_CWL-300.jpg",
  },
  twitter: {
    title: "پرشیا دنا سان : محصولات اوشیما Oshima",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",

    images: ["https://persiadenasun.ir/images/500px/tn_500px_CWL-300.jpg"],
  },
};

const jsonLd = createCategoryJsonLD("Oshima");

export default function OshimaProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CatalogBrowser
        initialBrand="Oshima"
        title="محصولات اوشیما"
        lede="ماشین‌آلات برش، پرس، پهن‌کن، میز مکش و کنترل کیفیت اوشیما؛ نمایندگی رسمی پرشیا دنا سان."
      />
    </>
  );
}
