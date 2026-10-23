import type { Metadata } from "next";
import GarmentCatalog from "@/components/garments/GarmentCatalog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "کاتالوگ پارچه‌های آرشید | کدهای ۲۰۱ تا ۲۴۶",
  description:
    "جستجو و مشاهده مشخصات کامل پارچه‌های گردباف آرشید (کدهای ۲۰۱ تا ۲۴۶) با نمایش کارتی و جدولی. تولید شرکت پرشیا دنا سان.",
  alternates: {
    canonical: "/products/arshid/garments/",
    languages: {
      "fa-IR": "/products/arshid/garments/",
      "x-default": "/products/arshid/garments/",
    },
  },
  openGraph: {
    title: "کاتالوگ پارچه‌های آرشید",
    description: "مشخصات ۴۶ کد پارچه آرشید با جستجو و نمایش کارتی/جدولی.",
    url: "/products/arshid/garments/",
  },
};

export default function GarmentsPage() {
  return (
    <main id="main">
      <GarmentCatalog />
    </main>
  );
}
