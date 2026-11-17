"use client";

import Image from "next/image";
import { useState } from "react";
import colors from "@/data/pds-thread-colors.json";

function normalizeDigits(value: string) {
  return value.replace(/[۰-۹٠-٩]/g, (digit) =>
    String("۰۱۲۳۴۵۶۷۸۹".includes(digit) ? digit.charCodeAt(0) - 1776 : digit.charCodeAt(0) - 1632),
  );
}

export default function PdsColorCardViewer() {
  const [query, setQuery] = useState("");
  const matchingColors = colors.filter(({ code }) => code.includes(normalizeDigits(query.trim())));

  return (
    <section id="color-card" aria-labelledby="colors-heading" className="wrap py-12 md:py-16">
      <div className="rounded-3xl border border-line bg-paper p-5 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 border-b border-line pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand">مجموعه رنگ‌های نخ گلدوزی</p>
            <h2 id="colors-heading" className="font-display mt-2 text-3xl text-navy md:text-4xl">رنگ های مورد نظرتان را انتخاب کنید</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">نمونه‌ها را مقایسه کنید و با کد زیر هر رنگ برای استعلام موجودی تماس بگیرید.</p>
          </div>
          <div className="w-full md:max-w-xs">
            {/* <label htmlFor="thread-search" className="mb-2 block text-sm font-semibold text-navy">جستجو با کد رنگ</label>
            <input id="thread-search" type="search" inputMode="numeric" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="مثلاً ۲۱۶۹" className="w-full rounded-xl border border-line bg-white px-4 py-3 text-navy outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" /> */}
          </div>
        </div>
        <p className="mt-5 text-sm text-muted" aria-live="polite">{matchingColors.length.toLocaleString("fa-IR")} رنگ برای انتخاب:</p>
        {matchingColors.length ? (
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {matchingColors.map(({ code, image }) => (
              <li key={code} className="rounded-2xl border border-line bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <Image src={`/images/pds-threads/${image}`} alt={`نمونه رنگ نخ ${code}`} width={110} height={32} unoptimized className="aspect-[110/32] w-full rounded-lg object-cover" />
                <div className="mt-3 flex items-center justify-between gap-2"><span className="text-xs text-muted">کد رنگ</span><span dir="ltr" className="font-semibold tracking-wide text-navy">{code}</span></div>
              </li>
            ))}
          </ul>
        ) : <p className="py-10 text-center text-sm text-muted">رنگی با این کد پیدا نشد. کد دیگری را امتحان کنید.</p>}
        <p className="mt-7 text-xs leading-6 text-muted">رنگ‌های نمایش داده‌شده ممکن است با نمونه واقعی تفاوت داشته باشند؛ برای انتخاب نهایی، نمونه فیزیکی را بررسی کنید.</p>
      </div>
    </section>
  );
}
