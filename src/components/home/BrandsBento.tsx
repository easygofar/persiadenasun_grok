import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { brandBySlug, faDigits, type BrandSlug } from "@/lib/site";
import { catalogCounts } from "@/lib/catalog";

const style: Record<
  BrandSlug,
  { card: string; muted: string; span: string; imgBox: string; unit: string }
> = {
  ricoma: {
    card: "bg-ink-900 text-white",
    muted: "text-white/70",
    span: "md:col-span-3 md:row-span-2",
    imgBox: "h-64 md:h-80",
    unit: "محصول",
  },
  siruba: {
    card: "bg-white text-ink-900 border border-ink-900/10",
    muted: "text-ink-900/70",
    span: "md:col-span-3",
    imgBox: "h-52 md:h-44",
    unit: "محصول",
  },
  oshima: {
    card: "bg-white text-ink-900 border border-ink-900/10",
    muted: "text-ink-900/70",
    span: "md:col-span-3",
    imgBox: "h-52 md:h-44",
    unit: "محصول",
  },
  arshid: {
    card: "bg-brand-100 text-ink-900",
    muted: "text-ink-900/75",
    span: "md:col-span-4",
    imgBox: "h-52 md:h-full md:min-h-60",
    unit: "نمونه پارچه",
  },
};

export default function BrandsBento() {
  const order: BrandSlug[] = ["ricoma", "siruba", "oshima", "arshid"];

  return (
    <section
      id="brands"
      aria-labelledby="brands-title"
      className="defer-render bg-paper py-20 text-ink-900 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-brand-700">برندهای تحت نمایندگی</p>
          <h2 id="brands-title" className="title-xl mt-3">
            برندهای معتبر جهانی، در یک مجموعه
          </h2>
          <p className="mt-4 text-lg leading-9 text-ink-900/70">
            هر برند را برای نیاز مشخصی از خط تولید پوشاک انتخاب کرده‌ایم؛ از
            گلدوزی و دوخت تا برش، پهن‌کردن و کنترل کیفیت پارچه.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-6">
          {order.map((slug) => {
            const b = brandBySlug(slug);
            const s = style[slug];
            const count = catalogCounts.per[b.dataName] ?? 0;
            const wide = slug === "arshid";
            return (
              <Link
                key={slug}
                href={`/products/${slug}/`}
                aria-label={`${b.fa} ${b.name}: ${b.headline}`}
                className={`reveal group relative flex flex-col gap-6 overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15 md:p-8 ${wide ? "md:flex-row md:items-stretch" : ""} ${s.card} ${s.span}`}
              >
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      dir="ltr"
                      className="font-sans text-3xl font-bold md:text-4xl"
                    >
                      {b.name}
                    </span>
                    <span className="rounded-full border border-current/20 px-3 py-1 text-xs font-medium opacity-80">
                      {faDigits(count)} {s.unit}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold leading-8">
                    {b.fa} — {b.headline}
                  </h3>
                  <p className={`text-[15px] leading-8 ${s.muted}`}>
                    {b.blurb}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[15px] font-semibold">
                    مشاهده محصولات
                    <ArrowLeft
                      className="size-5 transition-transform group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div
                  className={`relative w-full ${wide ? "md:w-[45%]" : ""} ${s.imgBox}`}
                >
                  <Image
                    src={b.image}
                    alt={b.imageAlt}
                    fill
                    sizes={
                      wide
                        ? "(max-width: 768px) 90vw, 440px"
                        : "(max-width: 768px) 90vw, 360px"
                    }
                    className={`transition-transform duration-500 group-hover:scale-105 ${wide ? "rounded-2xl object-cover" : "object-contain"}`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
