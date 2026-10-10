import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { faDigits, links } from "@/lib/site";
import { catalogCounts } from "@/lib/catalog";

export default function HomeHero() {
  const productCount = Math.floor(catalogCounts.total / 10) * 10;

  const stats = [
    { value: "۵۰+", label: "سال تجربه در صنعت پوشاک" },
    { value: faDigits(4), label: "برند بین‌المللی تحت نمایندگی رسمی" },
    { value: `${faDigits(productCount)}+`, label: "محصول در کاتالوگ آنلاین" },
  ];

  return (
    <section
      aria-labelledby="hero-title"
      className="grain relative isolate overflow-hidden bg-ink-950 text-white"
    >
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/images/hero/hero-fabric-800.webp"
          type="image/webp"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/hero-fabric-1600.webp"
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      </picture>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink-950/78"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 28%, rgb(245 130 32 / 0.20), transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-5 pt-14 pb-20 md:grid-cols-12 md:px-8 md:pt-44 md:pb-28">
        <div className="md:col-span-7">
          <p className="eyebrow rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-white/85">
            <span
              aria-hidden="true"
              className="pulse-dot size-2 rounded-full bg-brand-500"
            />
            نمایندگی رسمی <bdi>Oshima</bdi>، <bdi>Ricoma</bdi> و <bdi>Siruba</bdi>
          </p>

          <h1 id="hero-title" className="display mt-6">
            ماشین‌آلات{" "}
            <span className="text-brand-500">دوخت، گلدوزی و برش</span> صنعتی
            برای تولیدکنندگان پوشاک
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/78">
            پرشیا دنا سان با نیم‌قرن تجربه، تامین‌کننده تخصصی ماشین‌آلات نساجی و
            چرخ خیاطی صنعتی در ایران است. از مشاوره و تجهیز خط تولید تا نصب،
            آموزش و پشتیبانی فنی، همراه کارخانه‌ها و کارگاه‌های شما هستیم.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/contact-us/" className="btn btn-primary">
              درخواست مشاوره و قیمت
              <ArrowLeft className="size-5" aria-hidden="true" />
            </Link>
            <Link href="/products/" className="btn btn-ghost">
              مشاهده محصولات
            </Link>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FaWhatsapp className="size-5" aria-hidden="true" />
              واتس‌اپ
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/12 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dd className="order-1 text-3xl font-semibold text-white md:text-4xl">
                  {s.value}
                </dd>
                <dt className="order-2 text-[13px] leading-6 text-white/65 md:text-sm">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Product composition */}
        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="glass float-y absolute inset-x-[10%] top-[6%] bottom-[16%] rounded-[32px]">
              <Image
                src="/images/hero/ricoma.webp"
                alt="دستگاه گلدوزی صنعتی دوکله ریکوما"
                fill
                priority
                sizes="(max-width: 768px) 70vw, 340px"
                className="object-contain p-6"
              />
              <span className="absolute inset-x-4 bottom-4 rounded-xl bg-ink-950/70 px-3 py-2 text-center text-[13px] font-medium text-white/90 backdrop-blur">
                گلدوزی صنعتی <bdi>Ricoma</bdi>
              </span>
            </div>

            <div className="glass float-y-delay absolute -bottom-3 -left-2 aspect-square w-[44%] rounded-3xl">
              <Image
                src="/images/hero/siruba.webp"
                alt="چرخ الیک صنعتی سیروبا"
                fill
                sizes="(max-width: 768px) 32vw, 210px"
                className="object-contain p-3"
              />
            </div>

            <div className="glass float-y-delay absolute -top-3 -right-2 aspect-square w-[34%] rounded-3xl">
              <Image
                src="/images/hero/oshima.webp"
                alt="سیستم وزن‌کشی و برچسب‌زنی اوشیما"
                fill
                sizes="(max-width: 768px) 26vw, 160px"
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
