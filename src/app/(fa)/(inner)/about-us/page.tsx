import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "درباره شرکت",
  description:
    "شرکت پرشیا دنا سان با بیش از نیم قرن تجربه در ماشین‌آلات چرخ دوخت، نمایندگی سیروبا، اوشیما و ریکوما، و تولید پارچه تخصصی برند آرشید.",
  alternates: {
    canonical: "/about-us/",
    languages: { "fa-IR": "/about-us/", "x-default": "/about-us/" },
  },
  openGraph: {
    title: "درباره شرکت پرشیا دنا سان",
    description:
      "بیش از نیم قرن تجربه در صنعت ماشین‌آلات چرخ دوخت و راه‌اندازی کارخانه‌های بزرگ پوشاک.",
    locale: "fa_IR",
    type: "website",
    url: "/about-us/",
    images: [SITE.ogImage],
  },
};

const points = [
  "نرم‌افزارهای طراحی الگو، الگوساز، گلدوزی و بهینه‌سازی خط تولید",
  "مشاوره، آموزش و سرویس توسط کادر مجرب",
  "همکاری با دانشگاه‌ها، مراکز تربیت مربی و فنی‌حرفه‌ای و آموزشگاه‌ها",
  "تأمین رضایت مشتریان و آموزش تکنسین‌ها به‌ویژه در شهرستان‌ها",
];

const blocks = [
  {
    n: "۱",
    title: "تولید پارچه‌های متنوع گردباف با برند آرشید",
    items: ["ژاکارد دورو", "ژاکارد ترنسفر", "دورو و طرح‌دار در انواع ریزی‌ها", "یکرو ژاکارد در انواع ریزی‌ها", "انواع پارچه یکرو"],
  },
  {
    n: "۲",
    title: "ماشین‌آلات مدرن و باکیفیت",
    items: [
      "چرخ‌های دوخت صنعتی برند تایوانی سیروبا",
      "چرخ‌های گلدوزی حرفه‌ای برندهای آمریکایی ریکوما و ژاپنی تاجیما",
      "دستگاه پرس و میز مکش تایوانی اوشیما",
      "اتوهای مخزن‌دار برند ایتالیایی فلت",
    ],
  },
  {
    n: "۳",
    title: "تجهیز کارخانه‌های تولیدی بزرگ و کوچک",
    items: ["با شعبه‌هایی در شهرهای فعال صنعت پوشاک، همیشه برای تجهیز و راه‌اندازی و تجهیز کارخانه‌ها کنار تولیدکننده‌ها هستیم"],
  },
  // {
  //   n: "۴",
  //   title: "سامانه آنلاین بابکاز",
  //   items: ["پلتفرم هوشمند که متخصصان و فروشندگان محصولات را مستقیم به تولیدکننده‌ها وصل می‌کند"],
  // },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "درباره شرکت پرشیا دنا سان",
  url: `${SITE.url}/about-us/`,
  description: metadata.description,
  mainEntity: { "@id": `${SITE.url}/#organization` },
  inLanguage: "fa-IR",
};

export default function AboutUs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        kicker="درباره ما"
        title="شرکت پرشیا دنا سان"
        lede="بیش از نیم قرن تجربه در صنعت ماشین‌آلات چرخ دوخت و راه‌اندازی کارخانه‌های بزرگ پوشاک"
      />

      <section className="bg-paper py-12">
        <div className="wrap">
          <div className="card grid items-center gap-8 p-6 md:p-10 lg:grid-cols-2">
            <div className="text-sm leading-8 text-muted md:text-base">
              <p>
                پرشیا دنا سان با بیش از نیم قرن تجربه در صنعت ماشین‌آلات چرخ دوخت و
                تجربه‌های متعدد در راه‌اندازی کارخانه‌های بزرگ پوشاک با رویکردی نوین،
                اقدام به همکاری و دریافت نمایندگی از برندهای معتبر نظیر{" "}
                <strong className="text-navy">سیروبا، اوشیما و ریکوما</strong> کرده
                است؛ برندهایی که دارای استانداردهای جهانی و پشتیبانی معتبر هستند و در
                این صنعت کماکان پویایی خود را حفظ کرده‌اند.
              </p>
              <p className="mt-4">
                این شرکت در بخش‌های نرم‌افزاری و با بهره‌گیری از کادری مجرب در بخش‌های
                مشاوره، آموزش و سرویس، و همکاری با دانشگاه‌ها و مراکز فنی‌حرفه‌ای،
                گام‌های مؤثری در مسیر شکوفایی صنعت پوشاک ایران برداشته است.
              </p>
              <p className="mt-4">
                برای این شرکت، فروش آغاز مسئولیت است و تأمین رضایت خاطر مشتریان از
                مهم‌ترین وظایف آن به شمار می‌رود.
              </p>
              <ul className="mt-5 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-navy">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full w-full overflow-hidden rounded-3xl bg-navy hero-image">
              <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
            </div>
            {/* <img
              src="/images/hero/hero-fabric-1600.webp"
              alt="پارچه و نخ در خط تولید نساجی پرشیا دنا سان"
              width={800}
              height={520}
              className="h-full max-h-[420px] w-full rounded-3xl object-cover"
            /> */}
          </div>
        </div>
      </section >

      <section className="navy-grid py-16 text-white">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-brand">گام جدید</p>
            <h2 className="font-display mt-2 text-3xl md:text-4xl">
              تولید پارچه‌های تخصصی برند آرشید
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/75 md:text-base">
              در گام جدید، پرشیا دنا سان اقدام به تولید انواع پارچه‌های تخصصی پوشاک
              کرده است؛ پارچه‌هایی که از لحاظ مواد اولیه، هم تکنیک‌های جدید تولید و هم
              از نوع ماشین‌آلات استفاده شده کم‌نظیر هستند. قادر به تولید و تکمیل انواع
              پارچه ژاکارد، طرح‌دار دورو، یکرو، کتن و راشل.
            </p>
          </div>
          <img
            src="/images/hero/arshid-fabric-720.webp"
            alt="دوک نخ و پارچه برند آرشید"
            width={720}
            height={480}
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="wrap">
          <h2 className="font-display text-center text-3xl text-navy md:text-4xl">
            تولیدات، محصولات و خدمات ما
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {blocks.map((b) => (
              <article key={b.n} className="card p-6">
                <h3 className="font-display text-xl text-navy">
                  {b.n}. {b.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
                  {b.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-3xl bg-peach px-6 py-5 md:flex-row">
            <p className="text-sm text-navy">
              برای آشنایی بیشتر با ماشین‌آلات و پارچه‌های موجود، کاتالوگ کامل محصولات را ببینید.
            </p>
            <Link href="/products/arshid/" className="btn btn-navy">
              اطلاعات بیشتر درباره آرشید
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
