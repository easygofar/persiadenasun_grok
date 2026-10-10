import { Plus } from "lucide-react";
import { FAQ } from "@/lib/site";

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="defer-render bg-paper py-20 text-ink-900 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="reveal md:col-span-4">
          <p className="eyebrow text-brand-700">سوالات متداول</p>
          <h2 id="faq-title" className="title-xl mt-3">
            پاسخ پرسش‌های رایج مشتریان
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-ink-900/70">
            پاسخ سوال خود را پیدا نکردید؟ از صفحه تماس یا واتس‌اپ با کارشناسان
            ما در ارتباط باشید.
          </p>
        </div>

        <div className="faq flex flex-col gap-3 md:col-span-8">
          {FAQ.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="reveal rounded-2xl border border-ink-900/10 bg-white px-5 py-4 md:px-7"
            >
              <summary className="flex items-center justify-between gap-4 text-lg font-semibold leading-8">
                <h3 className="text-lg font-semibold leading-8">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="faq-plus grid size-9 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700 transition-transform duration-300"
                >
                  <Plus className="size-5" />
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-9 text-ink-900/75">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
