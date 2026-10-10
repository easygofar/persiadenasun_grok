import CatalogBrowser from "@/components/catalog/CatalogBrowser";

import { createCategoryJsonLD } from "@/utils";

export const metadata = {
  title: "پرشیا دنا سان : چرخ خیاطی های صنعتی سیروبا  Siruba",
  description:
    "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",
  alternates: {
    canonical: 'https://persiadenasun.ir/products/siruba',
  },

  openGraph: {
    siteName: "پرشیا دنا سان - نماینده رسمی ماشین‌آلات نساجی و دوخت صنعتی",
    type: "website",
    locale: "fa_IR",
    title: "پرشیا دنا سان : چرخ خیاطی های صنعتی سیروبا  Siruba",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",
    images: ["https://persiadenasun.ir/images/500px/tn_500px_DL7200C.jpg"],
  },
  twitter: {
    title: "پرشیا دنا سان : چرخ خیاطی های صنعتی سیروبا  Siruba",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",
    images: ["https://persiadenasun.ir/images/500px/tn_500px_DL7200C.jpg"],
  },
};

const jsonLd = createCategoryJsonLD("Siruba");

export default function OshimaProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CatalogBrowser
        initialBrand="Siruba"
        title="محصولات سیروبا"
        lede="چرخ‌های خیاطی صنعتی سیروبا برای خط تولید پوشاک؛ راسته‌دوز، الیک، سردوز و میاندوز."
      />
    </>
  );
}
