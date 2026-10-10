"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Phone, Search } from "lucide-react";
import { products } from "@/data";
import { BRANDS, SITE, links, toFa } from "@/lib/site";
import type { Product } from "@/utils/types";
import PageHero from "@/components/PageHero";

const PAGE = 24;

const FILTERS = [
  { brand: "", label: "همه محصولات", href: "/products/" },
  ...BRANDS.map((b) => ({
    brand: b.dataName,
    label: b.slug === "arshid" ? "پارچه آرشید" : b.fa,
    href: `/products/${b.slug}/`,
  })),
];

function thumbOf(file: string) {
  const base = String(file || "").replace(/\.[^.]+$/, "");
  return {
    webp: `/images/500px/tn_500px_${base}.webp`,
    full: `/images/original-jpg/${file}`,
  };
}

export default function CatalogBrowser({
  initialBrand = "",
  title,
  lede,
}: {
  initialBrand?: string;
  title: string;
  lede: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(PAGE);
  const list = products as Product[];

  const counts = useMemo(() => {
    const per: Record<string, number> = {};
    for (const p of list) {
      if (!p.brand) continue;
      per[p.brand] = (per[p.brand] ?? 0) + 1;
    }
    return { total: list.filter((p) => p.brand).length, per };
  }, [list]);

  const matched = useMemo(() => {
    const query = q.trim().toLowerCase();
    return list.filter((p) => {
      if (!p.brand) return false;
      if (initialBrand && p.brand !== initialBrand) return false;
      if (!query) return true;
      const hay = `${p.name} ${p.model} ${p.title} ${p.brandFarsi} ${p.brand}`.toLowerCase();
      return hay.includes(query);
    });
  }, [list, q, initialBrand]);

  const shown = matched.slice(0, limit);

  return (
    <>
      <PageHero
        kicker={`+${toFa(counts.total)} محصول موجود `}
        title={title}
        lede={lede}
      />
      <section className="bg-paper py-10">
        <div className="wrap">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => {
              const active = f.brand === initialBrand;
              const n = f.brand ? counts.per[f.brand] ?? 0 : counts.total;
              return (
                <button
                  key={f.href}
                  type="button"
                  onClick={() => router.push(f.href)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${active ? "bg-brand text-white" : "bg-white text-ink shadow-sm"
                    }`}
                  aria-pressed={active}
                >
                  {f.label}
                  <span className={active ? "text-white/80" : "text-faint"}>{toFa(n)}</span>
                </button>
              );
            })}
          </div>

          <form
            className="mx-auto mt-5 max-w-xl"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="relative block">
              <span className="sr-only">جستجوی محصول</span>
              <Search
                className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-faint"
                aria-hidden="true"
              />
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setLimit(PAGE);
                }}
                placeholder="جستجوی نام محصول یا مدل، مثل ۷۵۷ یا پرس"
                className="w-full rounded-full border border-line bg-white py-3 pr-5 pl-11 text-sm outline-none"
              />
            </label>
          </form>

          <p className="mt-6 text-sm text-muted">
            نمایش {toFa(shown.length)} از {toFa(matched.length)} محصول
          </p>

          {shown.length === 0 ? (
            <p className="card mt-6 p-8 text-center text-muted">
              محصولی با این مشخصات پیدا نشد. عبارت دیگری را امتحان کنید یا با
              کارشناسان تماس بگیرید.
            </p>
          ) : (
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {shown.map((p) => {
                const img = thumbOf(p.images?.[0] || "");
                const href = `/products/${p.brand.toLowerCase()}/${p.id}/`;
                return (
                  <li key={`${p.brand}-${p.id}`}>
                    <article className="card flex h-full flex-col p-4">
                      <Link href={href} className="grid h-40 place-items-center">
                        <img
                          src={img.webp}
                          alt={`${p.name} ${p.brandFarsi} مدل ${p.model}`}
                          width={240}
                          height={160}
                          className="max-h-36 w-auto object-contain"
                          onError={(e) => {
                            const el = e.currentTarget;
                            if (el.src.endsWith(img.full)) return;
                            el.src = img.full;
                          }}
                        />
                      </Link>
                      <p className="mt-2 text-[11px] font-bold tracking-wide text-brand" dir="ltr">
                        {p.brand.toUpperCase()}
                      </p>
                      <h2 className="text-sm font-semibold leading-7 text-navy">
                        <Link href={href}>{p.name}</Link>
                      </h2>
                      <p className="text-xs text-faint" dir="ltr">
                        {p.model}
                      </p>
                      <Link href={href} className="mt-auto pt-3 text-sm font-semibold text-brand">
                        جزئیات محصول ‹
                      </Link>
                    </article>
                  </li>
                );
              })}
            </ul>
          )}

          {matched.length > shown.length ? (
            <div className="mt-8 text-center">
              <button
                type="button"
                className="btn btn-line"
                onClick={() => setLimit((n) => n + PAGE)}
              >
                نمایش محصولات بیشتر
              </button>
            </div>
          ) : null}

          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[28px] bg-navy px-6 py-6 text-white md:flex-row md:px-8">
            <div>
              <h2 className="font-display text-2xl">قیمت و موجودی محصولات را استعلام کنید</h2>
              <p className="mt-1 text-sm text-white/70">
                کارشناسان ما مشخصات دقیق خط تولید شما را بررسی کرده و بهترین پیشنهاد را ارائه می‌دهند.
              </p>
            </div>
            <a href={links.mobile} className="btn btn-brand shrink-0">
              <Phone className="size-4" aria-hidden="true" />
              <span dir="rtl">{toFa(SITE.phoneDisplay)}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
