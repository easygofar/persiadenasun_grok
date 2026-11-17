import Image from "next/image";
import type { Metadata } from "next";
import PdsColorCardViewer from "@/components/PdsColorCardViewer";

const path = "/products/pds-threads/";
export const metadata: Metadata = {
  title: "نخ‌های گلدوزی پرشیا دنا سان | کارت رنگ نخ های گلدوزیپرشیا دنا سان",
  description: "معرفی نخ‌های گلدوزی پرشیا دنا سان و مشاهده کارت رنگ رسمی. فایل کارت رنگ اصلی برای بررسی رنگ‌ها و انتخاب دقیق قابل دریافت است.",
  alternates: { canonical: path, languages: { "fa-IR": path, "x-default": path } },
  openGraph: { title: "نخ‌های گلدوزی پرشیا دنا سان", description: "کارت رنگ رسمی نخ‌های گلدوزی پرشیا دنا سان و راهنمای انتخاب رنگ.", url: path, locale: "fa_IR", type: "website", images: [{ url: "/images/pds-color-card-preview.jpg", alt: "پیش‌نمایش کارت رنگ نخ های گلدوزی پرشیا دنا سان" }] },
};

const steps = [
  { n: "۱", title: "کارت رنگ را ببینید", text: "در کارت رنگ رسمی، نمونه‌ها را کنار هم مقایسه کنید و رنگ نزدیک به نیاز پروژه را بیابید." },
  { n: "۲", title: "کد را از مرجع بردارید", text: "کد رنگ را عیناً از فایل اصلی کارت رنگ یادداشت کنید؛ در این صفحه کد یا نامی به‌صورت حدسی درج نشده است." },
  { n: "۳", title: "برای موجودی استعلام بگیرید", text: "با ارسال کد ثبت‌شده از روی کارت، موجودی و مشخصات نخ را از پرشیا دنا سان پیگیری کنید." },
];

export default function PDSThreadsPage() {
  return (
    <main id="main" dir="rtl" className="bg-white">
      <section className="overflow-hidden border-b border-line bg-paper py-12 md:py-16">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_0.70fr]">
          <div>
            <p className="text-sm font-semibold text-brand">پرشیا دنا سان · مجموعه نخ</p>
            <h1 className="font-display mt-3 max-w-2xl text-4xl leading-tight text-navy md:text-5xl">نخ‌های گلدوزی<br className="hidden sm:block" /> پرشیا دنا سان</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">رنگ، بخش مهمی از هویت هر طرح گلدوزی است. کارت رنگ نخ های گلدوزی پرشیا دنا سان را برای مقایسه طیف‌ها ببینید و کد دقیق را مستقیماً از مرجع اصلی بردارید.</p>
            {/* <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-brand" href="/downloads/PDS-COLOR-CARD.pdf" download>دانلود فایل رنگ نخ های گلدوزی</a>
            </div> */}
          </div>
          <div className="relative mx-auto aspect-[746/767] w-full max-w-md overflow-hidden rounded-2xl bg-white/60">
            <Image
              src="/images/pds-threads/persiadenasun_thread.webp"
              alt="نخ‌های گلدوزی پرشیا دنا سان"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 380px"
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <PdsColorCardViewer />
      <section className="wrap py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand">انتخاب دقیق، با مرجع اصلی</p>
          <h2 className="font-display mt-2 text-3xl text-navy">کارت رنگ نخ های گلدوزی پرشیا دنا سان</h2>
          <p className="mt-4 text-sm leading-8 text-muted md:text-base">این کارت رنگ مرجع مشاهده طیف نخ‌های پرشیا دنا سان است. برای سفارش، کد چاپ‌شده روی کارت را بررسی و پیش از ثبت سفارش موجودی و تطابق رنگ را استعلام کنید.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((item) => <article key={item.n} className="border-t-2 border-brand bg-paper p-5"><span className="font-display text-2xl text-brand">{item.n}</span><h3 className="mt-2 font-semibold text-navy">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{item.text}</p></article>)}
        </div>
        <p className="mt-5 text-xs leading-6 text-muted">رنگ‌های نمایشی ممکن است با رنگ واقعی نخ یا چاپ کارت تفاوت داشته باشند. انتخاب نهایی را بر پایه نمونه فیزیکی یا تأیید فروشنده انجام دهید.</p>
      </section>
    </main>
  );
}
