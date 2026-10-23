"use client";

import { useMemo, useState } from "react";
import { Search, LayoutGrid, Table as TableIcon, X } from "lucide-react";
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

export default function GarmentCatalog() {
  const [q, setQ] = useState("");
  const [view, setView] = useState<View>("cards");
  const [selected, setSelected] = useState<Garment | null>(null);
  const [mainSrc, setMainSrc] = useState<string>("");
  const [bgSrc, setBgSrc] = useState<boolean>(false);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return garments;
    return garments.filter((g) => {
      const hay = `${g.code} ${g.type} ${g.material} ${g.use} ${g.color} ${g.width} ${g.weight}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q]);

  function openModal(g: Garment) {
    setSelected(g);
    setMainSrc(g.image ? mediumImage(g.code) : "");
  }

  function onBgSrc(value: boolean) {
    setBgSrc(value);
    // if (value && selected) {
    //   setMainSrc("");
    // } else if (!value && selected) {
    //   setMainSrc(mediumImage(selected.code));
    // }
  }

  function closeModal() {
    setSelected(null);
    setMainSrc("");
  }

  return (
    <>
      <PageHero
        kicker={`کاتالوگ پارچه‌های آرشید (${toFa(garments.length)} کد)`}
        title="پارچه‌ها و انواع البسه آرشید"
        lede="پارچه‌های برند آرشید، انتخابی ممتاز برای کیفیت و طرح‌های جذاب می‌باشند. با انواع مدل‌ها، دوختی خاص و متمایز خواهید داشت. کیفیت و زیبایی را با پارچه‌های آرشید تجربه کنید. برای دیدن تصاویر بزرگ‌تر و جزئیات بیشتر، روی هر مورد کلیک کنید."
      />

      <section className="bg-paper py-8">
        <div className="wrap">
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
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${view === "cards"
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
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${view === "table"
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
            <p className="py-12 text-center text-muted">موردی با این جستجو یافت نشد.</p>
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

            <div className="relative mb-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-gray-300"

              style={bgSrc ? { backgroundImage: `url(${mainSrc})`, opacity: 1, transition: "all 0.4s ease" } : undefined}
            >
              {mainSrc && (
                <img
                  src={mainSrc}
                  alt={`تصویر بزرگ پارچه کد ${toPersianDigits(selected.code)}`}
                  className="max-h-full max-w-full object-contain"
                  style={bgSrc ? { opacity: 0, transition: "all 0.4s ease" } : undefined}
                />
              )}
              {/* //  : (
              //   <span className="text-muted">تصویر موجود نیست</span>
              // )} */}
            </div>

            {selected.image && (
              <div className="flex flex-col items-center gap-2">
                <p className="text-xs text-muted">برای مشاهده تصویر بزرگ‌تر روی تصویر نگهدارید</p>
                <button
                  type="button"
                  // onClick={() => setMainSrc(mediumImage(selected.code))}
                  onMouseEnter={() => onBgSrc(true)}
                  onMouseLeave={() => onBgSrc(false)}
                  className="overflow-hidden rounded-lg border-2 border-transparent ring-offset-2 hover:border-brand focus:border-brand focus:outline-none"
                  aria-label="نمایش تصویر بزرگ"
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
                <dt className="font-medium">جنس</dt>
                <dd className="text-muted">{selected.material}</dd>
              </div>
              <div>
                <dt className="font-medium">کاربرد / فصل</dt>
                <dd className="text-muted">{selected.use}</dd>
              </div>
              <div>
                <dt className="font-medium">عرض</dt>
                <dd className="text-muted">{selected.width === "—" ? "—" : `${selected.width} سانت`}</dd>
              </div>
              <div>
                <dt className="font-medium">وزن</dt>
                <dd className="text-muted">{selected.weight === "—" ? "—" : `${selected.weight} م/کیلو`}</dd>
              </div>
              <div className="col-span-2">
                <dt className="font-medium">رنگ</dt>
                <dd className="text-muted">{selected.color}</dd>
              </div>
            </dl>
          </div>
        </div >
      )
      }
    </>
  );
}

function GarmentCard({ g, onOpen }: { g: Garment; onOpen: () => void }) {
  return (
    <article
      className="cursor-pointer overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:shadow-md"
      onClick={onOpen}
    >
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