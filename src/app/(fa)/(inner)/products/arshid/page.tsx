import type { Metadata } from "next";
import GarmentCatalog from "@/components/garments/GarmentCatalog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "پارچه‌های آرشید | کاتالوگ کدهای ۲۰۱ تا ۲۴۶",
  description:
    "کاتالوگ کامل پارچه‌های گردباف آرشید تولید شرکت پرشیا دنا سان. جستجو و مشاهده مشخصات ۴۶ کد پارچه (۲۰۱ تا ۲۴۶) با نمایش کارتی و جدولی، تصاویر بزرگ و جزئیات فنی.",
  alternates: {
    canonical: "/products/arshid/",
    languages: {
      "fa-IR": "/products/arshid/",
      "x-default": "/products/arshid/",
    },
  },
  openGraph: {
    title: "پارچه‌های آرشید | پرشیا دنا سان",
    description:
      "کاتالوگ پارچه‌های گردباف آرشید (کدهای ۲۰۱ تا ۲۴۶) با جستجو، نمایش کارتی/جدولی و تصاویر بزرگ.",
    url: "/products/arshid/",
    siteName: SITE.fullName,
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "پارچه‌های گردباف آرشید",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "پارچه‌های آرشید | پرشیا دنا سان",
    description: "کاتالوگ کامل پارچه‌های آرشید با جستجو و نمایش کارتی و جدولی.",
  },
};

export default function ArshidPage() {
  return (
    <main id="main">
      <GarmentCatalog />
    </main>
  );
}