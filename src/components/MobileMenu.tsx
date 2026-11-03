"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { BRANDS, SITE, links, toFa } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const close = () => {
    setOpen(false);
    setSub(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="باز کردن منو"
        aria-expanded={open}
        className="grid size-11 place-items-center rounded-xl border border-white/15 text-white"
      >
        <Menu className="size-5" />
      </button>
      {open ? (
        <div className="fixed inset-0 z-[70] bg-navy text-white" id="mobile-menu">
          <div className="flex items-center justify-between px-4 py-4">
            <span className="font-display text-2xl">{SITE.name}</span>
            <button
              type="button"
              onClick={close}
              aria-label="بستن منو"
              className="grid size-11 place-items-center rounded-xl border border-white/15"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="px-4" aria-label="منوی موبایل">
            <ul className="flex flex-col">
              {[
                ["/", "خانه"],
                ["/products/", "محصولات"],
                ["/about-us/", "درباره شرکت"],
                ["/contact-us/", "تماس با ما"],
                ["/products/video/", "ویدیوها"],
              ].map(([href, label]) => (
                <li key={href} className="mt-1 border-b border-white/15">
                  {href === "/products/" ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setSub((v) => !v)}
                        aria-expanded={sub}
                        aria-controls="mobile-products-sub"
                        className="flex w-full items-center justify-between rounded-xl px-3 py-1 text-lg"
                      >
                        {label}
                        <ChevronDown
                          className={`size-5 transition-transform duration-300 ${sub ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        id="mobile-products-sub"
                        className={`grid transition-all duration-300 ease-in-out ${sub ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <ul className="overflow-hidden pr-4">
                          {BRANDS.map((b) => (
                            <li key={b.slug}>
                              <Link
                                href={`/products/${b.slug}/`}
                                onClick={close}
                                tabIndex={sub ? 0 : -1}
                                className="block rounded-xl px-3 py-2 text-white/85"
                              >
                                {b.fa}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/products/sakura/"
                              onClick={close}
                              tabIndex={sub ? 0 : -1}
                              className="block rounded-xl px-3 py-2 text-white/85"
                            >
                              نخ ساکورا
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/"
                              onClick={close}
                              tabIndex={sub ? 0 : -1}
                              className="block rounded-xl px-3 py-2 font-semibold text-brand"
                            >
                              مشاهده همه محصولات
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link href={href} onClick={close} className="block rounded-xl px-3 py-1 text-lg">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <a
              href={links.mobile}
              className="btn btn-brand mt-6 w-full"
            >
              <Phone className="size-4" aria-hidden="true" />
              <span dir="ltr">{toFa(SITE.phoneDisplay)}</span>
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
