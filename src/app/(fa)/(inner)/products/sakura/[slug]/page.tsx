import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabel, threadBySlug, threads } from "@/data/sakura";
import { SITE, links } from "@/lib/site";

export function generateStaticParams() {
    return threads.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const t = threadBySlug(slug);
    if (!t) return { title: "نخ ساکورا" };
    return {
        title: t.name,
        description: t.summary,
        alternates: {
            canonical: `/products/sakura/${t.slug}/`,
            languages: {
                "fa-IR": `/products/sakura/${t.slug}/`,
                "x-default": `/products/sakura/${t.slug}/`,
            },
        },
        openGraph: {
            title: `${t.name} | نخ ساکورا`,
            description: t.summary,
            url: `/products/sakura/${t.slug}/`,
            locale: "fa_IR",
            type: "website",
            images: [{ url: t.images[0]?.src ?? SITE.ogImage, alt: t.name }],
        },
    };
}

export default async function SakuraThreadPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const t = threadBySlug(slug);
    if (!t) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: t.name,
        description: t.summary,
        image: t.images.map((img) => `${SITE.url}${img.src}`),
        brand: { "@type": "Brand", name: "Sakura Thread" },
        category: categoryLabel(t.category),
        url: `${SITE.url}/products/sakura/${t.slug}/`,
        manufacturer: { "@type": "Organization", name: "Sakura Thread" },
        seller: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
    };

    return (
        <article className="bg-paper py-8 md:py-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="wrap">
                <nav aria-label="مسیر" className="text-sm text-muted">
                    <Link href="/" className="hover:text-brand">خانه</Link>
                    <span className="px-1.5">/</span>
                    <Link href="/products/sakura/" className="hover:text-brand">نخ ساکورا</Link>
                    <span className="px-1.5">/</span>
                    <span className="text-navy">{t.name}</span>
                </nav>

                <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold text-brand">{categoryLabel(t.category)}</p>
                        <h1 className="font-display mt-2 text-3xl text-navy md:text-4xl">{t.name}</h1>
                        <p className="mt-1 text-sm text-faint" dir="ltr">{t.nameEn}</p>
                        <p className="mt-4 text-sm leading-8 text-muted md:text-base">{t.summary}</p>

                        {t.certs.length ? (
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {t.certs.map((c) => (
                                    <li key={c} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand" dir="ltr">
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        <div className="mt-5 space-y-3 text-sm leading-8 text-ink">
                            {t.body.map((p) => (
                                <p key={p}>{p}</p>
                            ))}
                        </div>

                        <h2 className="font-display mt-6 text-xl text-navy">ویژگی‌ها</h2>
                        <ul className="mt-2 space-y-2 text-sm leading-7 text-muted">
                            {t.points.map((p) => (
                                <li key={p} className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                                    {p}
                                </li>
                            ))}
                        </ul>

                        <h2 className="font-display mt-6 text-xl text-navy">کاربرد</h2>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {t.applications.map((a) => (
                                <li key={a} className="rounded-full border border-line bg-white px-3 py-1 text-sm text-navy">
                                    {a}
                                </li>
                            ))}
                        </ul>

                        {t.spec ? (
                            <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
                                <table className="w-full min-w-[280px] text-sm">
                                    <caption className="sr-only">مشخصات {t.name}</caption>
                                    <thead>
                                        <tr className="bg-navy text-white">
                                            <th className="px-3 py-2 text-right font-medium">مشخصات</th>
                                            {t.spec.headers.map((h) => (
                                                <th key={h} className="px-3 py-2 text-center font-medium" dir="ltr">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {t.spec.rows.map((row) => (
                                            <tr key={row.label} className="border-t border-line">
                                                <th className="px-3 py-2 text-right font-medium text-navy">{row.label}</th>
                                                {row.cells.map((cell, i) => (
                                                    <td key={`${row.label}-${i}`} className="px-3 py-2 text-center text-muted" dir="ltr">
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : null}

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href={links.whatsapp} className="btn btn-brand">استعلام واتساپ</a>
                            <a href={links.tel} className="btn btn-navy">تماس با دفتر</a>
                            <Link href="/products/sakura/" className="btn btn-line">
                                همه نخ‌های ساکورا
                            </Link>
                        </div>
                        <p className="mt-3 text-xs leading-6 text-faint">
                            قیمت روی سایت نیست. موجودی، کد رنگ و نمره را با پرشیا دنا سان هماهنگ کنید. ساکورا سازنده نخ است و پرشیا دنا سان آن را در ایران عرضه می‌کند.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        {t.images.map((img) => (
                            <img
                                key={img.src}
                                src={img.src}
                                alt={img.alt}
                                className="w-full rounded-3xl bg-white object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}