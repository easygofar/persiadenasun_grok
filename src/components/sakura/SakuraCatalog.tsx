"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SAKURA_CATEGORIES, categoryLabel, threads } from "@/data/sakura";

export default function SakuraCatalog() {
    const [cat, setCat] = useState("all");
    const [q, setQ] = useState("");

    const shown = useMemo(() => {
        const query = q.trim();
        return threads.filter((t) => {
            if (cat !== "all" && t.category !== cat) return false;
            if (!query) return true;
            const hay = `${t.name} ${t.nameEn} ${t.summary} ${categoryLabel(t.category)}`;
            return hay.toLowerCase().includes(query.toLowerCase());
        });
    }, [cat, q]);

    return (
        <section className="bg-paper py-10">
            <div className="wrap">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                        {SAKURA_CATEGORIES.map((c) => {
                            const active = c.id === cat;
                            return (
                                <button
                                    key={c.id}
                                    type="button"
                                    onClick={() => setCat(c.id)}
                                    className={`rounded-full px-3.5 py-1.5 text-sm ${active ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-line"
                                        }`}
                                >
                                    {c.label}
                                </button>
                            );
                        })}
                    </div>
                    <label className="relative block w-full sm:w-64">
                        <span className="sr-only">جستجوی نخ</span>
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="جستجوی نام یا نمره نخ"
                            className="w-full rounded-full border border-line bg-white px-4 py-2 text-sm text-ink outline-none focus:border-brand"
                        />
                    </label>
                </div>

                <p className="mt-4 text-sm text-muted">{shown.length} نخ</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {shown.map((t) => (
                        <Link
                            key={t.slug}
                            href={`/products/sakura/${t.slug}/`}
                            className="card flex flex-col overflow-hidden transition hover:-translate-y-0.5"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-white">
                                <img
                                    src={t.images[0]?.src}
                                    alt={t.images[0]?.alt ?? t.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                                <p className="text-xs font-semibold text-brand">{categoryLabel(t.category)}</p>
                                <h2 className="font-display mt-1 text-xl text-navy">{t.name}</h2>
                                <p className="mt-1 text-xs text-faint" dir="ltr">
                                    {t.nameEn}
                                </p>
                                <p className="mt-2 flex-1 text-sm leading-7 text-muted">{t.summary}</p>
                                <span className="mt-3 text-sm font-semibold text-brand">مشخصات و توضیح ‹</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {shown.length === 0 ? (
                    <p className="mt-8 text-center text-sm text-muted">نخی با این عبارت پیدا نشد.</p>
                ) : null}
            </div>
        </section>
    );
}