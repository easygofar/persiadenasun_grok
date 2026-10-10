import CatalogBrowser from "@/components/catalog/CatalogBrowser";
import { createCategoryJsonLD } from "@/utils";

export const metadata = {
  title: "پرشیا دنا سان : تولید پارچه برند آرشید",
  description:
    "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",

  alternates: {
    canonical: 'https://persiadenasun.ir/products/arshid',
  },

  openGraph: {
    siteName: "پرشیا دنا سان - نماینده رسمی ماشین‌آلات نساجی و دوخت صنعتی",
    type: "website",
    locale: "fa_IR",
    title: "پرشیا دنا سان : تولید پارچه برند آرشید",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",
    images: "https://persiadenasun.ir/images/500px/tn_500px_0143.jpg",
  },
  twitter: {
    title: "پرشیا دنا سان : تولید پارچه برند آرشید",
    description:
      "مشاهده و خرید انواع ماشین‌آلات نساجی، چرخ‌های خیاطی صنعتی، دستگاه‌های گلدوزی و تجهیزات بافندگی با ضمانت اصالت کالا و خدمات پشتیبانی تخصصی.",
    images: ["https://persiadenasun.ir/images/500px/tn_500px_0143.jpg", "https://persiadenasun.ir/images/500px/tn_500px_0144.jpg", "https://persiadenasun.ir/images/500px/tn_500px_0145.jpg"],
  },
};

const jsonLd = createCategoryJsonLD("Arshid");

export default function OshimaProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CatalogBrowser
        initialBrand="Arshid"
        title="پارچه‌های آرشید"
        lede="پارچه‌های گردباف ژاکارد دورو، ژاکارد ترنسفر، یکرو ژاکارد و پارچه یکرو، تولید برند آرشید."
      />
    </>
  );
}
