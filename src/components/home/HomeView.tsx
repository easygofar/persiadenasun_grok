import type { ReactNode } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  Factory,
  Headset,
  MapPin,
  Phone,
  ShieldCheck,
  Shirt,
  Sparkles,
  Truck,
  Warehouse,
} from "lucide-react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import PlayFrame from "@/components/PlayFrame";
import { BRANDS, SITE, links, toFa } from "@/lib/site";
import { catalogCounts } from "@/lib/catalog";

const features = [
  {
    icon: BadgeCheck,
    title: "نمایندگی رسمی برندها",
    text: "اوشیما، سیروبا، ریکوما و",
  },
  {
    icon: Headset,
    title: "پشتیبانی فنی تخصصی",
    text: "نصب، آموزش و خدمات پس از فروش",
  },
  {
    icon: Truck,
    title: "تحویل سریع",
    text: "ارسال به سراسر ایران",
  },
  {
    icon: ShieldCheck,
    title: "ضمانت اصالت کالا",
    text: "تأمین مستقیم از برندهای رسمی",
  },
];

const aboutCards = [
  {
    icon: Factory,
    title: "تأمین ماشین‌آلات مدرن",
    text: "چرخ‌های صنعتی سیروبا، گلدوزی ریکوما، پرس و میز مکش اوشیما و برش.",
  },
  {
    icon: Shirt,
    title: "تولید پارچه‌های آرشید",
    text: "پارچه‌های گردباف متنوع شامل ژاکارد دورو، ژاکارد ترنسفر و یکرو در انواع طرح‌ها.",
  },
  {
    icon: Warehouse,
    title: "تجهیز کارخانه‌های پوشاک",
    text: "با تجربه تجهیز کارخانه‌های بزرگ و کوچک، کنار تولیدکننده‌ها می‌مانیم.",
  },
  // {
  //   icon: Sparkles,
  //   title: "سامانه آنلاین بابکاز",
  //   text: "پلتفرمی که متخصصان و فروشندگان را مستقیم به تولیدکننده‌ها وصل می‌کند.",
  // },
];

const tags = [
  "میز مکش و پرس",
  "اتو مخزن‌دار فلت",
  "نرم‌افزار طراحی الگو",
  "بهینه‌سازی خط تولید",
  "چرخ خیاطی صنعتی",
  "ماشین گلدوزی",
  "دستگاه برش",
  "پارچه گردباف ژاکارد",
];

const fabrics = ["ژاکارد دورو", "ژاکارد ترنسفر", "یکرو ژاکارد", "پارچه‌های یکرو"];

export default function HomeView() {
  const total = toFa(catalogCounts.total);

  return (
    <>
      <section className="navy-grid relative overflow-hidden text-white">
        <div
          className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[#c45a2a]/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="wrap grid items-center gap-10 py-14 lg:grid-cols-2 sm:py-20">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/85">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
              نیم قرن تجربه در صنعت نساجی ایران
            </p>
            <h1 className="font-display mt-5 text-[34px] leading-[1.45] text-white sm:text-5xl lg:text-[52px]">
              تأمین‌کننده تخصصی
              <span className="text-brand"> ماشین‌آلات نساجی و </span>
              چرخ خیاطی صنعتی
            </h1>
            <p className="mt-5  text-sm leading-8 text-white/75 md:text-base">
              نمایندگی رسمی برندهای معتبر جهان؛ اوشیما، سیروبا و ریکوما
              به همراه تولید پارچه‌های تخصصی برند آرشید. مشاوره، نصب و پشتیبانی
              فنی کامل خط تولید شما.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/products/" className="btn btn-brand">
                مشاهده محصولات
                <span aria-hidden="true">‹</span>
              </Link>
              <Link href="/contact-us/" className="btn btn-ghost">
                مشاوره رایگان
              </Link>
              {/* <div className="absolute grid -m-4 -ml-10 w-[230px] grid-cols-2 gap-x-3 gap-y-2 rounded-2xl bg-navy/80 p-4 text-center shadow-xl ring-1 ring-white/10 sm:left-0 sm:w-[260px]">
                <span style={{ color: "#CCAA55" }}>
                  <Stat value={`+${total}`} label="محصول موجود" />
                </span>
                <Stat value="+۵۰" label="سال تجربه" />
                <Stat value="٪۹۸" label="کارخانه تجهیزشده" />
                <Stat value="+۵۰۰" label="رضایت مشتریان" />
              </div> */}

            </div>
          </div>

          <div className="relative grid-cols-1 lg:grid-cols-2 md:mb-4 mb-0 lg:pb-2">
            <div className="grid grid-cols-1">
              <img
                src="/images/hero/hero-section.webp"
                alt="دستگاه گلدوزی صنعتی ریکوما مدل TC-1501-8S"
                // width={1100}
                // height={700}
                className="mx-auto h-auto md:max-h-150 sm:max-h-120 max-h-100 w-full object-contain"
                fetchPriority="high"
              />
              <img
                src="/images/hero/barnd-logos.png"
                alt="سه لوگوی اوشیما، سیروبا و ریکوما به عنوان نمایندگی رسمی برندها"
                // width={1100}
                // height={700}
                className="mx-auto h-auto md:max-h-150 sm:max-h-120 max-h-100 w-full object-contain"
                fetchPriority="high"
              />
              {/* <p className="absolute bottom-6 right-6 rounded-xl bg-navy/80 px-3 py-2 text-xs leading-6 backdrop-blur sm:text-sm">
                <span className="font-semibold" dir="ltr">
                  Ricoma TC-1501-8S
                </span>
                <span className="mt-0.5 block text-white/75">
                  دستگاه گلدوزی صنعتی ریکوما
                </span>
              </p> */}
            </div>
          </div>
        </div>

        <div className="wrap grid grid-cols-2 gap-3 pb-14 pt-16 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-brand">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{f.title}</span>
                <span className="block text-xs leading-6 text-white/55">{f.text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20" aria-labelledby="about-heading">
        <div className="wrap">
          <p className="text-center text-sm font-semibold text-brand">درباره شرکت</p>
          <h2
            id="about-heading"
            className="font-display mx-auto mt-2 max-w-3xl text-center text-3xl text-navy md:text-4xl"
          >
            پرشیا دنا سان؛ نیم قرن همراه صنعت پوشاک ایران
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-8 text-muted md:text-base">
            پرشیا دنا سان با نیم قرن تجربه، تأمین‌کننده تخصصی ماشین‌آلات نساجی و
            چرخ خیاطی صنعتی در ایران است. با ارائه خدمات مشاوره، نصب و پشتیبانی
            فنی، بهترین راه‌حل‌های کامل صنعتی را به مشتریان ارائه می‌دهیم؛ از
            تأمین چرخ خیاطی صنعتی و گلدوزی تا تجهیز کامل کارخانه‌های بزرگ و کوچک
            پوشاک.
          </p>
          <div className="mt-10 grid gap-4 xs:grid-cols-1 sm:grid-cols-3">
            {aboutCards.map((c) => (
              <article key={c.title} className="card p-5">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <c.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-4 text-xl text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20" aria-labelledby="brands-heading">
        <div className="wrap">
          <p className="text-center text-sm font-semibold text-brand">نمایندگی‌های رسمی</p>
          <h2
            id="brands-heading"
            className="font-display mx-auto mt-2 max-w-3xl text-center text-3xl text-navy md:text-4xl"
          >
            پرشیا دنا سان ارائه‌دهنده بهترین محصولات و خدمات صنعت پوشاک
          </h2>
          <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDS.map((b) => (
              <article key={b.slug} className="card relative flex flex-col p-4">
                {/* <span
                  className="pointer-events-none absolute top-0 left-0 size-7 border-t-[3px] border-l-[3px] border-brand"
                  aria-hidden="true"
                /> */}
                <div className="grid h-36 place-items-center">
                  <img
                    src={b.image}
                    alt={b.imageAlt}
                    width={220}
                    height={140}
                    className="max-h-32 w-auto object-contain"
                  />
                </div>
                <p className="mt-2 text-xs font-bold tracking-wide text-brand" dir="ltr">
                  {b.name.toUpperCase()}
                </p>
                <h3 className="font-display text-2xl text-navy">{b.fa}</h3>
                <p className="mt-1 flex-1 text-sm leading-7 text-muted">{b.blurb}</p>
                <Link
                  href={`/products/${b.slug}/`}
                  className="mt-3 text-sm font-semibold text-brand"
                >
                  مشاهده محصولات ‹
                </Link>
              </article>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-xs text-muted"
              >
                <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="navy-grid py-16 text-white md:py-20" aria-labelledby="video-heading">
        <div className="wrap">
          <p className="text-center text-sm text-white/70">
            <span className="me-2 inline-block size-1.5 rounded-full bg-brand align-middle" />
            گالری ویدیو
          </p>
          <h2
            id="video-heading"
            className="font-display mt-2 text-center text-3xl md:text-4xl"
          >
            فعالیت‌های شرکت پرشیا دنا سان
          </h2>
          <div className="mx-auto mt-8 max-w-4xl">
            <PlayFrame
              src={`${SITE.aparatEmbed}?autoplay=1`}
              title="ویدیوی معرفی فعالیت‌های شرکت پرشیا دنا سان"
              poster="/images/hero/hero-fabric-1600.webp"
              duration="۰۲:۲۶"
            />
            <p className="mt-4 text-center text-sm text-white/70">
              ویدیوهای بیشتر از کانال آپارات پرشیا دنا سان
            </p>
            <div className="mt-4 text-center">
              <a href={links.aparat} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                مشاهده کانال آپارات
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20" aria-labelledby="arshid-heading">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-brand">تولیدات اختصاصی</p>
            <h2 id="arshid-heading" className="font-display mt-2 text-3xl text-navy md:text-4xl">
              تولید پارچه‌های تخصصی برند آرشید
            </h2>
            <p className="mt-4 text-sm leading-8 text-muted md:text-base">
              تولید پارچه‌های گردباف متنوع برند آرشید شامل ژاکارد دورو، ژاکارد
              ترنسفر، یکرو ژاکارد و پارچه‌های یکرو در انواع طرح‌ها. از مواد اولیه
              مرغوب تا فناوری روز ماشین‌آلات تولید پارچه.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {fabrics.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-[#f3c3a4] bg-white px-4 py-1.5 text-sm text-navy"
                >
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/products/arshid/" className="btn btn-navy mt-6">
              مشاهده پارچه‌های آرشید
              <span aria-hidden="true">‹</span>
            </Link>
          </div>
          <img
            src="/images/hero/arshid-fabric-720.webp"
            alt="پارچه آبی آرشید با دوک نخ و برچسب Fabric Store Arshid"
            width={720}
            height={480}
            className="h-auto w-full rounded-[28px] object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-20" aria-labelledby="contact-heading">
        <div className="wrap">
          <p className="text-center text-sm font-semibold text-brand">راه‌های ارتباطی</p>
          <h2 id="contact-heading" className="font-display mt-2 text-center text-3xl text-navy md:text-4xl">
            ارتباط با شرکت پرشیا دنا سان
          </h2>
          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
            <div className="card overflow-hidden">
              <iframe
                title="نقشه دفتر مرکزی پرشیا دنا سان، خیابان جمهوری تهران"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=51.380,35.691,51.398,35.702&layer=mapnik&marker=${SITE.geo.lat},${SITE.geo.lng}`}
                className="h-[340px] w-full border-0"
                loading="lazy"
              />
              <p className="px-4 py-3 text-center text-xs text-faint">
                {SITE.address.city}، {SITE.address.street}
              </p>
            </div>
            <div className="card p-6 md:p-8">
              <Info
                icon={<MapPin className="size-4" />}
                label="آدرس دفتر مرکزی"
                value={`${SITE.address.city}، ${SITE.address.street}`}
              />
              <Info icon={<Phone className="size-4" />} label="تلفن" value={SITE.phoneDisplay} ltr />
              <Info
                icon={<FaWhatsapp className="size-4" />}
                label="واتساپ / موبایل"
                value={SITE.mobileDisplay}
                ltr
                href={links.whatsapp}
              />
              <Info icon={<span className="text-sm">@</span>} label="ایمیل" value={SITE.email} ltr href={links.mail} />
              <div className="mt-4 border-t border-line pt-4">
                <p className="text-sm font-semibold text-navy">ساعت کاری</p>
                <p className="mt-1 text-sm leading-7 text-muted">{SITE.hoursLine}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-line min-h-10 px-4">
                  <FaInstagram className="size-4" /> اینستاگرام
                </a>
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-line min-h-10 px-4">
                  <FaWhatsapp className="size-4" /> واتساپ
                </a>
                <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-line min-h-10 px-4">
                  <FaTelegram className="size-4" /> تلگرام
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-xl text-[#f66a13]">{value}</dt>
      <dd className="text-[11px] leading-5 text-white/60">{label}</dd>
    </div>
  );
}

function Info({
  icon,
  label,
  value,
  ltr,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  ltr?: boolean;
  href?: string;
}) {
  const body = (
    <span className="flex items-center justify-between gap-3 border-b border-line py-3">
      <span>
        <span className="block text-xs text-faint">{label}</span>
        <span className="block text-sm font-semibold text-navy" dir={ltr ? "ltr" : undefined}>
          {value}
        </span>
      </span>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
        {icon}
      </span>
    </span>
  );
  if (!href) return body;
  return (
    <a href={href} className="block hover:bg-peach/60">
      {body}
    </a>
  );
}
