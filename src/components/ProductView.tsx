import Link from "next/link";
import { Phone } from "lucide-react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { products } from "@/data";
import { SITE, links, toFa } from "@/lib/site";
import type { Product } from "@/utils/types";

function htmlToText(html: string) {
  return String(html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&/g, "&")
    .replace(/"/g, '"')
    .replace(/&#39;|'/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function introOf(html: string) {
  const cut = String(html || "").split(/<article/i)[0];
  return htmlToText(cut.replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, ""));
}

function variant(html: string, label: string) {
  const re = new RegExp(`${label}[\\s\\S]*?<li>([^<]+)</li>`, "i");
  const m = String(html || "").match(re);
  return m?.[1]?.trim() || "";
}

function filePair(file: string) {
  const base = String(file || "").replace(/\.[^.]+$/, "");
  return {
    webp: `/images/original-jpg/${base}.webp`,
    full: `/images/original-jpg/${file}`,
    thumb: `/images/500px/tn_500px_${base}.webp`,
  };
}

export default function ProductView(props: Product) {
  const slug = props.brand.toLowerCase();
  const html = props.description?.[0] || "";
  const intro = introOf(html);
  const standard = variant(html, "مدل استاندارد");
  const power = variant(html, "مدل قدرتمند");
  const images = props.images?.length ? props.images : [];
  const main = filePair(images[0] || "");
  const related = (products as Product[])
    .filter((p) => p.brand === props.brand && p.id !== props.id)
    .slice(0, 4);

  const crumbs = [
    { href: "/", name: "خانه" },
    { href: "/products/", name: "محصولات" },
    { href: `/products/${slug}/`, name: props.brandFarsi },
    { href: `/products/${slug}/${props.id}/`, name: props.name },
  ];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.href}`,
    })),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <header className="navy-grid text-white">
        <div className="wrap py-12 text-center md:py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            {props.brandFarsi}
          </p>
          <h1 className="font-display mt-4 text-3xl md:text-5xl">
            {props.name} <span dir="ltr">{props.model}</span>
          </h1>
        </div>
      </header>

      <div className="wrap">
        <nav aria-label="مسیر" className="flex flex-wrap items-center gap-1 py-4 text-xs text-faint">
          {crumbs.map((c, i) => (
            <span key={c.href} className="inline-flex items-center gap-1">
              {i > 0 ? <span aria-hidden="true">‹</span> : null}
              {i < crumbs.length - 1 ? (
                <Link href={c.href} className="hover:text-brand">
                  {c.name}
                </Link>
              ) : (
                <span className="text-muted">{c.name}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid items-start gap-5 lg:grid-cols-2">
          <div className="card p-6 md:p-8">
            <p className="text-xs font-bold tracking-wide text-brand" dir="ltr">
              {props.brand.toUpperCase()}
            </p>
            <h2 className="font-display mt-1 text-3xl text-navy">
              {props.name} <span dir="ltr">{props.model}</span>
            </h2>
            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-paper px-4 py-3">
                <dt className="text-faint">برند</dt>
                <dd className="font-semibold">{props.brandFarsi}</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-paper px-4 py-3">
                <dt className="text-faint">مدل</dt>
                <dd className="font-semibold" dir="ltr">
                  {props.model}
                </dd>
              </div>
            </dl>
            {intro ? (
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-navy">معرفی محصول</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-8 text-muted">{intro}</p>
              </div>
            ) : null}
            {standard || power ? (
              <div className="mt-4 space-y-2">
                {standard ? (
                  <p className="flex items-center justify-between rounded-xl bg-peach px-4 py-3 text-sm">
                    <span className="text-muted">مدل استاندارد</span>
                    <span className="font-semibold" dir="ltr">
                      {standard}
                    </span>
                  </p>
                ) : null}
                {power ? (
                  <p className="flex items-center justify-between rounded-xl bg-peach px-4 py-3 text-sm">
                    <span className="text-muted">مدل قدرتمند</span>
                    <span className="font-semibold" dir="ltr">
                      {power}
                    </span>
                  </p>
                ) : null}
              </div>
            ) : null}
            <p className="mt-4 text-xs leading-7 text-muted">
              برای دریافت مشخصات فنی کامل، قیمت روز و موجودی این محصول با کارشناسان
              پرشیا دنا سان در تماس باشید. نصب، آموزش و پشتیبانی فنی در سراسر ایران
              ارائه می‌شود.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-line min-h-11">
                <FaTelegram className="size-4" /> تلگرام
              </a>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-line min-h-11">
                <FaWhatsapp className="size-4" /> واتساپ
              </a>
              <a href={links.mobile} className="btn btn-brand min-h-11">
                <Phone className="size-4" />
                <span dir="ltr">{toFa(SITE.phoneDisplay)}</span>
              </a>
            </div>
          </div>

          <div className="card grid min-h-[420px] place-items-center p-6">
            <picture>
              <source srcSet={main.webp} type="image/webp" />
              <img
                src={main.full}
                alt={`${props.name} ${props.brandFarsi} مدل ${props.model}`}
                width={800}
                height={800}
                className="max-h-[460px] w-auto object-contain"
              />
            </picture>
          </div>
        </div>

        {props.detail?.length ? (
          <section className="mt-12" aria-labelledby="spec-heading">
            <div className="mb-4 flex items-center justify-between">
              <h2 id="spec-heading" className="font-display text-2xl text-navy md:text-3xl">
                جدول مشخصات فنی
              </h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  مشخصات فنی {props.name} {props.brand} {props.model}
                </caption>
                <tbody>
                  <tr className="bg-paper">
                    <th scope="row" className="px-4 py-3 text-right font-semibold text-navy">
                      Model
                    </th>
                    <td className="px-4 py-3 text-left text-muted" dir="ltr">
                      {props.model}
                    </td>
                  </tr>
                  {props.detail.map((row, i) => (
                    <tr key={`${row.name}-${i}`} className={i % 2 ? "bg-paper" : "bg-white"}>
                      <th
                        scope="row"
                        className="w-[34%] px-4 py-3 text-right align-top font-semibold text-navy"
                      >
                        {htmlToText(row.name)}
                      </th>
                      <td className="whitespace-pre-line px-4 py-3 align-top text-muted" dir="auto">
                        {htmlToText(row.value)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {related.length ? (
          <section className="mt-12 mb-4" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display text-2xl text-navy">
              محصولات دیگر {props.brandFarsi}
            </h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => {
                const img = filePair(p.images?.[0] || "");
                const href = `/products/${p.brand.toLowerCase()}/${p.id}/`;
                return (
                  <li key={p.id} className="card p-4 text-center">
                    <Link href={href} className="grid h-32 place-items-center">
                      <img
                        src={img.thumb}
                        alt={`${p.name} ${p.brandFarsi}`}
                        className="max-h-28 w-auto object-contain"
                      />
                    </Link>
                    <p className="mt-2 text-sm font-semibold text-navy">{p.name}</p>
                    <p className="text-xs text-faint" dir="ltr">
                      {p.model}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {images.length > 1 ? (
          <section id="gallery" className="mt-8 mb-6">
            <h2 className="text-center text-sm font-semibold text-brand">
              گالری تصاویر بیشتر
            </h2>
            <ul className="mt-4 flex flex-wrap justify-center gap-3">
              {images.map((file) => {
                const img = filePair(file);
                return (
                  <li key={file} className="card grid size-28 place-items-center p-2">
                    <img src={img.thumb} alt="" className="max-h-24 w-auto object-contain" />
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  );
}
