"use client"
import { usePathname } from "next/navigation";
import PersianFooter from "./FooterFa";
import EnglishFooter from "./FooterEn";
import ArabicFooter from "./FooterAr";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const isArabic = pathname.startsWith("/ar");

  // if (isArabic) return <ArabicFooter />
  // else if (!isEnglish) return <PersianFooter />
  // else return <EnglishFooter />

  return <PersianFooter />
}