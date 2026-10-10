import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlayFrame from "@/components/PlayFrame";
import { SITE, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "ویدیوها",
  description:
    "ویدیوهای معرفی ماشین‌آلات، فعالیت‌ها و رویدادهای شرکت پرشیا دنا سان در کانال آپارات.",
  alternates: { canonical: "/products/video/" },
  openGraph: {
    title: "ویدیوهای پرشیا دنا سان",
    description: "ویدیوهای معرفی ماشین‌آلات، فعالیت‌ها و رویدادهای شرکت در کانال آپارات.",
    locale: "fa_IR",
    type: "website",
    url: "/products/video/",
    images: ["/images/hero/hero-fabric-1600.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "ویدیوی معرفی فعالیت‌های شرکت پرشیا دنا سان",
  description: "معرفی فعالیت‌ها، ماشین‌آلات و رویدادهای شرکت پرشیا دنا سان.",
  thumbnailUrl: `${SITE.url}/images/hero/hero-fabric-1600.webp`,
  embedUrl: SITE.aparatEmbed,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "fa-IR",
};

export default function Videos() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        kicker="گالری ویدیو"
        title="ویدیوهای پرشیا دنا سان"
        lede="ویدیوهای معرفی ماشین‌آلات، فعالیت‌ها و رویدادهای شرکت در کانال آپارات ما"
      />
      <section className="bg-paper py-12">
        <div className="wrap">
          <PlayFrame
            src={SITE.aparatEmbed}
            title="ویدیوی معرفی فعالیت‌های شرکت پرشیا دنا سان"
            poster="/images/hero/hero-fabric-1600.webp"
            duration="۰۲:۲۶"
          />
          <p className="mt-4 text-center text-sm text-muted">
            ویدیوی معرفی فعالیت‌های شرکت پرشیا دنا سان
          </p>

          <div className="card mx-auto mt-8 max-w-3xl px-6 py-10 text-center">
            <h2 className="font-display text-2xl text-navy md:text-3xl">
              کانال آپارات پرشیا دنا سان
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-8 text-muted">
              ویدیوهای بیشتر از ماشین‌آلات، نمایشگاه‌ها و آموزش‌های فنی در کانال آپارات ما منتشر می‌شود.
            </p>
            <a
              href={links.aparat}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand mt-6"
            >
              مشاهده کانال آپارات
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
