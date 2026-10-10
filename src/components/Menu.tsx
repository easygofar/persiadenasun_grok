"use client";

import { usePathname } from "next/navigation";
import PersianMenu from "./MenuFa";
import EnglishMenu from "./MenuEn";
import ArabicMenu from "./MenuAr";

export default function Menu() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const isArabic = pathname.startsWith("/ar");

  // if (isArabic) return <ArabicMenu />
  // else if (isEnglish) return <EnglishMenu />
  // else return <PersianMenu />

  return <PersianMenu />
}
