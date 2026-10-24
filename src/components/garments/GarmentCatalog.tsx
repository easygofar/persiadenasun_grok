"use client";

import { useMemo, useState } from "react";
import { Search, LayoutGrid, Table as TableIcon, X, Filter } from "lucide-react";
import { garments, type Garment } from "@/data/garments";
import PageHero from "@/components/PageHero";
import { toFa } from "@/lib/site";

type View = "cards" | "table";

function toPersianDigits(n: string | number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

function mediumImage(code: string) {
  return `/images/garments/mth_${code}.jpg`;
}

const ALL_TYPES = Array.from(new Set(garments.map((g) => g.type))).sort();
const ALL_MATERIALS = Array.from(new Set(garments.map((g) => g.material))).sort();

export default function GarmentCatalog() {
  const [q, setQ] = useState("");
  const [view, setView] = useState<View>("cards");
  const [selected, setSelected] = useState<Garment | null>(null);
  const [mainSrc, setMainSrc] = useState<string>("");
  const [zoomed, setZoomed] = useState(false);
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [materialFilter, setMaterialFilter] = useState<string>("");
  const [filtersOpen, setFiltersOpen] = useState(false);


  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return garments.filter((g) => {
      if (typeFilter && g.type !== typeFilter) return false;
      if (materialFilter && g.material !== materialFilter) return false;
      if (!query) return true;
      const hay = `${g.code} ${g.type} ${g.material} ${g.use} ${g.color} ${g.width} ${g.weight}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q, typeFilter, materialFilter]);

  const activeFilters = [typeFilter, materialFilter].filter(Boolean).length;

  function openModal(g: Garment) {
    setSelected(g);
    setMainSrc(g.image ? mediumImage(g.code) : "");
    setZoomed(false);
  }

  function closeModal() {
    setSelected(null);
    setMainSrc("");
    setZoomed(false);
  }

  function clearFilters() {
    setTypeFilter("");
    setMaterialFilter("");
  }

  return (
    <>
      <PageHero
        kicker={`کاتالوگ پارچه‌های آرشید (${toFa(garments.length)} کد)`}
        title="پارچه‌ها و انواع البسه آرشید"
        lede="پارچه‌های برند آرشید، انتخابی ممتاز برای کیفیت و طرح‌های جذاب می‌باشند. با انواع مدل‌ها، دوختی خاص و متمایز خواهید داشت. کیفیت و زیبایی را با پارچه‌های آرشید تجربه کنید. برای دیدن تصاویر بزرگ‌تر و جزئیات بیشتر، روی هر مورد کلیک کنید."
      />

      <section className="bg-paper py-6 sm:py-8">
        <div className="wrap">
          <div className="sticky top-0 z-40 -mx-4 mb-4 bg-paper/95 px-4 py-3 backdrop-blur sm:static sm:mx-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
            <div className="flex flex-col gap-3">
              <div className="relative">
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

              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setFiltersOpen((v) => !v)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium"
                >
                  <Filter className="size-4" />
                  فیلتر
                  {activeFilters > 0 && (
                    <span className="rounded-full bg-brand px-1.5 py-0.5 text-[10px] text-white">
                      {toPersianDigits(activeFilters)}
                    </span>
                  )}
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setView("cards")}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${view === "cards"
                      ? "bg-brand text-white"
                      : "bg-white text-ink border border-line"
                      }`}
                    aria-pressed={view === "cards"}
                  >
                    <LayoutGrid className="size-4" />
                    <span className="hidden sm:inline">کارت</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("table")}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${view === "table"
                      ? "bg-brand text-white"
                      : "bg-white text-ink border border-line"
                      }`}
                    aria-pressed={view === "table"}
                  >
                    <TableIcon className="size-4" />
                    <span className="hidden sm:inline">جدول</span>
                  </button>
                </div>
              </div>

              {filtersOpen && (
                <div className="rounded-xl border border-line bg-white p-3 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium">فیلترها</span>
                    {activeFilters > 0 && (
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="text-xs text-brand hover:underline"
                      >
                        پاک کردن
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="mb-1.5 text-xs text-muted">نوع / بافت</p>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          type="button"
                          onClick={() => setTypeFilter("")}
                          className={`rounded-full px-3 py-1 text-xs ${!typeFilter ? "bg-brand text-white" : "bg-paper text-ink"
                            }`}
                        >
                          همه
                        </button>
                        {ALL_TYPES.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTypeFilter(t === typeFilter ? "" : t)}
                            className={`rounded-full px-3 py-1 text-xs ${typeFilter === t ? "bg-brand text-white" : "bg-paper text-ink"
                              }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-1.5 text-xs text-muted">جنس</p>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          type="button"
                          onClick={() => setMaterialFilter("")}
                          className={`rounded-full px-3 py-1 text-xs ${!materialFilter ? "bg-brand text-white" : "bg-paper text-ink"
                            }`}
                        >
                          همه
                        </button>
                        {ALL_MATERIALS.map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setMaterialFilter(m === materialFilter ? "" : m)}
                            className={`rounded-full px-3 py-1 text-xs ${materialFilter === m ? "bg-brand text-white" : "bg-paper text-ink"
                              }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="mb-4 text-sm text-muted">
            {toPersianDigits(filtered.length)} نتیجه
            {(q || activeFilters > 0) && " (فیلتر شده)"}
          </p>

          {view === "cards" ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((g) => (
                <GarmentCard key={g.code} g={g} onOpen={() => openModal(g)} />
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
                    <tr
                      key={g.code}
                      className="border-t border-line hover:bg-paper/50 cursor-pointer"
                      onClick={() => openModal(g)}
                    >
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
            <div className="py-12 text-center">
              <p className="text-muted">موردی با این جستجو یا فیلتر یافت نشد.</p>
              {(q || activeFilters > 0) && (
                <button
                  type="button"
                  onClick={() => {
                    setQ("");
                    clearFilters();
                  }}
                  className="mt-3 text-sm text-brand hover:underline"
                >
                  پاک کردن جستجو و فیلترها
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="garment-modal-title"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute left-3 top-3 rounded-full bg-paper p-1.5 text-ink hover:bg-line"
              aria-label="بستن"
            >
              <X className="size-5" />
            </button>

            <h2 id="garment-modal-title" className="mb-1 text-lg font-medium">
              کد {toPersianDigits(selected.code)} — {selected.type}
            </h2>
            <p className="mb-4 text-sm text-muted">
              {selected.material}
              {selected.color !== "—" ? ` · ${selected.color}` : ""}
              {selected.use !== "—" ? ` · ${selected.use}` : ""}
            </p>

            <div
              className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-paper transition-all duration-500"
              style={
                zoomed && mainSrc
                  ? {
                    backgroundImage: `url(${mainSrc})`,
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }
                  : undefined
              }
            >
              {mainSrc && (
                <img
                  src={mainSrc}
                  alt={`تصویر بزرگ پارچه کد ${toPersianDigits(selected.code)}`}
                  className={`h-full w-full object-contain transition-opacity duration-500 ${zoomed ? "opacity-0" : "opacity-100"
                    }`}
                />
              )}
              {!mainSrc && (
                <span className="absolute inset-0 flex items-center justify-center text-muted">
                  تصویر موجود نیست
                </span>
              )}
            </div>

            {selected.image && (
              <div className="flex flex-col items-center gap-2">
                <p className="text-xs text-muted">
                  {zoomed
                    ? "برای بازگشت به نمای عادی دوباره کلیک کنید"
                    : "برای زوم روی تصویر کوچک کلیک کنید"}
                </p>
                <button
                  type="button"
                  onClick={() => setZoomed((z) => !z)}
                  className={`overflow-hidden rounded-lg border-2 transition ${zoomed
                    ? "border-brand ring-2 ring-brand/30"
                    : "border-transparent hover:border-brand"
                    }`}
                  aria-label={zoomed ? "بازگشت به نمای عادی" : "زوم تصویر"}
                  aria-pressed={zoomed}
                >
                  <img
                    src={selected.image}
                    alt={`تصویر کوچک کد ${toPersianDigits(selected.code)}`}
                    className="h-20 w-20 object-cover"
                  />
                </button>
              </div>
            )}

            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div>
                <dt className="text-muted">جنس</dt>
                <dd className="font-medium">{selected.material}</dd>
              </div>
              <div>
                <dt className="text-muted">کاربرد / فصل</dt>
                <dd className="font-medium">{selected.use}</dd>
              </div>
              <div>
                <dt className="text-muted">عرض</dt>
                <dd className="font-medium">{selected.width === "—" ? "—" : `${selected.width} سانت`}</dd>
              </div>
              <div>
                <dt className="text-muted">وزن</dt>
                <dd className="font-medium">{selected.weight === "—" ? "—" : `${selected.weight} م/کیلو`}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-muted">رنگ</dt>
                <dd className="font-medium">{selected.color}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
}

function GarmentCard({ g, onOpen }: { g: Garment; onOpen: () => void }) {
  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition active:scale-[0.98] hover:shadow-md"
      onClick={onOpen}
    >
      <div className="relative aspect-[4/3] bg-paper">
        {g.image ? (
          <img
            src={g.image}
            alt={`پارچه کد ${toPersianDigits(g.code)}`}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted text-sm">
            تصویر موجود نیست
          </div>
        )}
        <span className="absolute right-2 top-2 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white shadow">
          کد {toPersianDigits(g.code)}
        </span>
      </div>
      <div className="p-3.5 sm:p-4">
        <h3 className="mb-2 line-clamp-2 text-[15px] font-medium leading-snug text-ink">
          {g.type}
        </h3>
        <div className="flex flex-wrap gap-1.5 text-xs">
          <span className="rounded-md bg-paper px-2 py-0.5 text-muted">{g.material}</span>
          {g.color !== "—" && (
            <span className="rounded-md bg-brand-soft px-2 py-0.5 text-brand">{g.color}</span>
          )}
          {g.use !== "—" && (
            <span className="rounded-md bg-paper px-2 py-0.5 text-muted">{g.use}</span>
          )}
        </div>
      </div>
    </article>
  );
}