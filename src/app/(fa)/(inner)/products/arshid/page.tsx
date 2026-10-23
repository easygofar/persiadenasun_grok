import CatalogBrowser from "@/components/catalog/CatalogBrowser";
import { createCategoryJsonLD } from "@/utils";
import Link from "next/link";

export const metadata = {
  title: "پرشیا دنا سان : تولید پارچه برند آرشید",
  description:
    "پارچه‌های گردباف آرشید. کاتالوگ کامل کدهای ۲۰۱ تا ۲۴۶ با جستجو و نمایش کارتی/جدولی. تولید شرکت پرشیا دنا سان.",

  alternates: {
    canonical: 'https://persiadenasun.ir/products/arshid',
  },

  openGraph: {
    siteName: "پرشیا دنا سان - نماینده رسمی ماشین‌آلات نساجی و دوخت صنعتی",
    type: "website",
    locale: "fa_IR",
    title: "پرشیا دنا سان : تولید پارچه برند آرشید",
    description:
      "کاتالوگ پارچه‌های آرشید (کدهای ۲۰۱ تا ۲۴۶) با جستجو و نمایش کارتی و جدولی.",
    images: "https://persiadenasun.ir/images/500px/tn_500px_0143.jpg",
  },
  twitter: {
    title: "پرشیا دنا سان : تولید پارچه برند آرشید",
    description:
      "کاتالوگ کامل پارچه‌های آرشید.",
    images: ["https://persiadenasun.ir/images/500px/tn_500px_0143.jpg", "https://persiadenasun.ir/images/500px/tn_500px_0144.jpg", "https://persiadenasun.ir/images/500px/tn_500px_0145.jpg"],
  },
};

const jsonLd = createCategoryJsonLD("Arshid");

export default function ArshidPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-brand-soft border-b border-brand/20">
        <div className="wrap py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-medium text-ink">کاتالوگ جدید پارچه‌های آرشید</p>
            <p className="text-sm text-muted">۴۶ کد پارچه (۲۰۱ تا ۲۴۶) با جستجو، کارت و جدول</p>
          </div>
          <Link
            href="/products/arshid/garments/"
            className="inline-flex items-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition"
          >
            مشاهده کاتالوگ کامل
          </Link>
        </div>
      </div>
      <CatalogBrowser
        initialBrand="Arshid"
        title="پارچه‌های آرشید"
        lede="پارچه‌های گردباف ژاکارد دورو، ژاکارد ترنسفر، یکرو ژاکارد و پارچه یکرو، تولید برند آرشید. برای مشاهده کاتالوگ کامل کدها به بخش بالا مراجعه کنید."
      />
    </>
  );
}