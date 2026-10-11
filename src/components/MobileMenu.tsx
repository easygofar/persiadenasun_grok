"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { BRANDS, SITE, links, toFa } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

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
                  <Link
                    href={href}
                    onClick={close}
                    className="block rounded-xl px-3 py-1 text-lg"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 px-3 text-sm text-white/50">برندها</p>
            <ul className="mt-1">
              {BRANDS.map((b) => (
                <li key={b.slug} className="mt-1 border-b border-white/15">
                  <Link
                    href={`/products/${b.slug}/`}
                    onClick={close}
                    className="block rounded-xl px-3 py-2 text-white/85"
                  >
                    {b.fa}
                  </Link>
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
