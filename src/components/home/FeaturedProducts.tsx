import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { featuredProducts } from "@/lib/catalog";

export default function FeaturedProducts() {
  const items = featuredProducts();

  return (
    <section
      aria-labelledby="featured-title"
      className="defer-render bg-paper py-20 text-ink-900 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-700">محصولات منتخب</p>
            <h2 id="featured-title" className="title-xl mt-3">
              نمونه‌ای از ماشین‌آلات پرکاربرد در خطوط تولید
            </h2>
          </div>
          <Link
            href="/products/"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700 hover:text-ink-900"
          >
            مشاهده همه محصولات
            <ArrowLeft className="size-5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {items.map((p) => (
            <li key={`${p.brand.slug}-${p.id}`} className="reveal">
              <Link
                href={p.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
              >
                <div className="relative aspect-square bg-white">
                  <Image
                    src={p.image}
                    alt={`${p.name} ${p.brand.name} ${p.model}`}
                    fill
                    sizes="(max-width: 1024px) 45vw, 280px"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 border-t border-ink-900/8 p-4 md:p-5">
                  <span className="text-xs font-semibold text-brand-700">
                    {p.brand.fa} <bdi>{p.brand.name}</bdi>
                  </span>
                  <h3 className="text-base font-semibold leading-7 md:text-lg">
                    {p.name}
                  </h3>
                  <span
                    dir="ltr"
                    className="text-start text-sm text-ink-900/60 font-sans"
                  >
                    {p.model}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
