"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import MobileMenu from "@/components/MobileMenu";
import { BRANDS, SITE, links, toFa } from "@/lib/site";

const items = [
  { href: "/", label: "خانه", match: (p: string) => p === "/" },
  {
    href: "/products/",
    label: "محصولات",
    menu: true,
    match: (p: string) => p.startsWith("/products") && !p.startsWith("/products/video"),
  },
  {
    href: "/about-us/",
    label: "درباره شرکت",
    match: (p: string) => p.startsWith("/about-us"),
  },
  {
    href: "/contact-us/",
    label: "تماس با ما",
    match: (p: string) => p.startsWith("/contact-us"),
  },
  {
    href: "/products/video/",
    label: "ویدیوها",
    match: (p: string) => p.startsWith("/products/video"),
  },
];

export default function SiteHeader() {
  const path = usePathname() || "/";

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/5 bg-navy-2">
        <div className="wrap flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-6 lg:gap-8">
            <Link href="/" aria-label={`${SITE.fullName}، صفحه اصلی`}>
              <BrandLogo />
            </Link>
            <nav className="hidden lg:block" aria-label="منوی اصلی">
              <ul className="flex items-center gap-1">
                {items.map((item) => {
                  const active = item.match(path);
                  return (
                    <li key={item.href} className={item.menu ? "group relative" : ""}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`relative inline-flex items-center gap-1 px-3 py-2 text-[15px] font-medium ${active ? "text-white" : "text-white/80 hover:text-white"
                          }`}
                      >
                        {item.label}
                        {item.menu ? (
                          <ChevronDown className="size-4 opacity-70" aria-hidden="true" />
                        ) : null}
                        <span
                          className={`absolute bottom-0 h-[3px] rounded-full bg-brand ${active ? "inset-x-2" : "hidden"
                            }`}
                        />
                      </Link>
                      {item.menu ? (
                        <div className="invisible absolute top-full right-0 z-20 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                          <ul className="w-72 rounded-2xl border border-line bg-white p-2 shadow-xl">
                            {BRANDS.map((b) => (
                              <li key={b.slug}>
                                <Link
                                  href={`/products/${b.slug}/`}
                                  className="block rounded-xl px-3 py-2.5 hover:bg-paper"
                                >
                                  <span className="block text-sm font-semibold text-ink">
                                    {b.fa}
                                  </span>
                                  <span className="block text-xs text-muted">{b.headline}</span>
                                </Link>
                              </li>
                            ))}
                            <li>
                              <Link
                                href="/products/"
                                className="mt-1 block rounded-xl bg-brand-soft px-3 py-2.5 text-center text-sm font-semibold text-brand"
                              >
                                مشاهده همه محصولات
                              </Link>
                            </li>
                          </ul>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={links.tel}
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white sm:inline-flex"
            >
              <Phone className="size-3.5 text-brand" aria-hidden="true" />
              <span dir="ltr">{toFa(SITE.phoneDisplay)}</span>
            </a>
            <a
              href={links.en}
              hrefLang="en"
              className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-bold tracking-wide text-white"
            >
              EN
            </a>
            <a
              href={links.ar}
              hrefLang="ar"
              className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-bold tracking-wide text-white"
            >
              AR
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
      <div className="h-[3px] bg-brand" />
    </header>
  );
}
