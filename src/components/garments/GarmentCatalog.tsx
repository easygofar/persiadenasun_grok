"use client";

import { useMemo, useState } from "react";
import { Search, LayoutGrid, Table as TableIcon } from "lucide-react";
import { garments, type Garment } from "@/data/garments";
import PageHero from "@/components/PageHero";
import { toFa } from "@/lib/site";

type View = "cards" | "table";

function toPersianDigits(n: string | number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

export default function GarmentCatalog() {
  const [q, setQ] = useState("");
  const [view, setView] = useState<View>("cards");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return garments;
    return garments.filter((g) => {
      const hay = `${g.code} ${g.type} ${g.material} ${g.use} ${g.color} ${g.width} ${g.weight}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q]);

  return (
    <>
      <PageHero
        kicker={`کاتالوگ پارچه‌های آرشید (${toFa(garments.length)} کد)`}
        title="پارچه‌ها و انواع البسه آرشید"
        lede="جستجو و مشاهده مشخصات ۴۶ کد پارچه (۲۰۱ تا ۲۴۶) با نمایش کارتی یا جدولی."
      />

      <section className="bg-paper py-8">
        <div className="wrap">
          {/* Controls */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="جستجو بر اساس کد، نوع، جنس، کاربرد یا رنگ…"
                className="w-full rounded-xl border border-line bg-white py-2.5 pr-10 pl-4 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                aria-label="جستجوی پارچه"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted">نمایش:</span>
              <button
                type="button"
                onClick={() => setView("cards")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  view === "cards"
                    ? "bg-brand text-white"
                    : "bg-white text-ink border border-line hover:bg-paper"
                }`}
                aria-pressed={view === "cards"}
              >
                <LayoutGrid className="size-4" />
                کارت
              </button>
              <button
                type="button"
                onClick={() => setView("table")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  view === "table"
                    ? "bg-brand text-white"
                    : "bg-white text-ink border border-line hover:bg-paper"
                }`}
                aria-pressed={view === "table"}
              >
                <TableIcon className="size-4" />
                جدول
              </button>
            </div>
          </div>

          <p className="mb-4 text-sm text-muted">
            {toPersianDigits(filtered.length)} نتیجه
            {q ? ` برای «${q}»` : ""}
          </p>

          {view === "cards" ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((g) => (
                <GarmentCard key={g.code} g={g} />
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-line bg-white">
              <table className="w-full min-w-[800px] text-right text-sm">
                <thead className="bg-navy-2 text-white">
                  <tr>
                    <th className="p-3 font-medium">کد</th>
                    <th className="p-3 font-medium">تصویر</th>
                    <th className="p-3 font-medium">نوع / بافت</th>
                    <th className="p-3 font-medium">جنس</th>
                    <th className="p-3 font-medium">کاربرد / فصل</th>
                    <th className="p-3 font-medium">عرض (سانت)</th>
                    <th className="p-3 font-medium">وزن (م/کیلو)</th>
                    <th className="p-3 font-medium">رنگ</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((g) => (
                    <tr key={g.code} className="border-t border-line hover:bg-paper/50">
                      <td className="p-3 font-medium">{toPersianDigits(g.code)}</td>
                      <td className="p-3">
                        {g.image ? (
                          <img
                            src={g.image}
                            alt={`پارچه کد ${toPersianDigits(g.code)}`}
                            className="h-16 w-16 rounded-lg object-cover"
                          />
                        ) : (
                          <span className="text-xs text-muted">—</span>
                        )}
                      </td>
                      <td className="p-3">{g.type}</td>
                      <td className="p-3">{g.material}</td>
                      <td className="p-3">{g.use}</td>
                      <td className="p-3">{g.width}</td>
                      <td className="p-3">{g.weight}</td>
                      <td className="p-3">{g.color}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted">موردی با این جستجو یافت نشد.</p>
          )}
        </div>
      </section>
    </>
  );
}

function GarmentCard({ g }: { g: Garment }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[4/3] bg-paper">
        {g.image ? (
          <img
            src={g.image}
            alt={`پارچه کد ${toPersianDigits(g.code)}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted text-sm">
            تصویر موجود نیست
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-medium text-brand">
            کد {toPersianDigits(g.code)}
          </span>
        </div>
        <h3 className="mb-1 text-base font-medium text-ink">{g.type}</h3>
        <dl className="space-y-1 text-sm text-muted">
          <div className="flex justify-between gap-2">
            <dt>جنس</dt>
            <dd className="text-ink">{g.material}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt>کاربرد</dt>
            <dd className="text-ink">{g.use}</dd>
          </div>
          {g.width !== "—" && (
            <div className="flex justify-between gap-2">
              <dt>عرض</dt>
              <dd className="text-ink">{g.width} سانت</dd>
            </div>
          )}
          {g.weight !== "—" && (
            <div className="flex justify-between gap-2">
              <dt>وزن</dt>
              <dd className="text-ink">{g.weight} م/کیلو</dd>
            </div>
          )}
          {g.color !== "—" && (
            <div className="flex justify-between gap-2">
              <dt>رنگ</dt>
              <dd className="text-ink">{g.color}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
