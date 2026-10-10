import { faDigits } from "@/lib/site";

const steps = [
  {
    title: "مشاوره و نیازسنجی",
    text: "نوع محصول، ظرفیت تولید و بودجه شما را بررسی می‌کنیم.",
  },
  {
    title: "انتخاب و تامین",
    text: "مناسب‌ترین ماشین‌آلات و نرم‌افزارها را از برندهای تحت نمایندگی پیشنهاد و تامین می‌کنیم.",
  },
  {
    title: "نصب و راه‌اندازی",
    text: "تیم فنی ما خط تولید را نصب، تنظیم و تحویل می‌دهد.",
  },
  {
    title: "آموزش و پشتیبانی",
    text: "اپراتورها و تکنسین‌های شما آموزش می‌بینند و سرویس فنی در دسترس است.",
  },
];

export default function Process() {
  return (
    <section
      aria-labelledby="process-title"
      className="defer-render bg-paper-2 py-20 text-ink-900 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-brand-700">مسیر همکاری</p>
          <h2 id="process-title" className="title-xl mt-3">
            از اولین تماس تا خط تولید فعال، در چهار قدم
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="reveal relative rounded-3xl border border-ink-900/10 bg-white p-7"
            >
              <span
                aria-hidden="true"
                className="text-5xl font-bold text-brand-500/90"
              >
                {faDigits(i + 1)}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-8">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-8 text-ink-900/70">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
