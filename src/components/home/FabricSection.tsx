import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

const fabrics = [
  "ژاکارد دورو",
  "ژاکارد ترنسفر",
  "یک‌رو ژاکارد در انواع ریزی‌ها",
  "پارچه‌های یک‌رو",
  "کتن و راشل",
];

export default function FabricSection() {
  return (
    <section
      aria-labelledby="fabric-title"
      className="defer-render relative overflow-hidden bg-wine py-20 text-white md:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="reveal relative aspect-square w-full overflow-hidden rounded-[32px] border border-white/15 shadow-2xl shadow-black/40">
          <Image
            src="/images/hero/arshid-fabric-720.webp"
            alt="پارچه گردباف آرشید و نخ‌های رنگی"
            fill
            sizes="(max-width: 768px) 90vw, 560px"
            className="object-cover"
          />
        </div>

        <div className="reveal">
          <p className="eyebrow text-brand-400">تولید پارچه با برند آرشید</p>
          <h2 id="fabric-title" className="title-xl mt-3">
            پارچه‌های گردباف تخصصی و سفارشی
          </h2>
          <p className="mt-4 text-lg leading-9 text-white/78">
            در گام جدید، پرشیا دنا سان به تولید پارچه‌های تخصصی مخصوص تولید
            پوشاک پرداخته است؛ پارچه‌هایی که هم از نظر مواد اولیه و هم از نظر
            تکنیک تولید و ماشین‌آلات، کم‌نظیرند.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {fabrics.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-[15px] text-white/90"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-500 text-ink-950">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <Link href="/products/arshid/" className="btn btn-primary mt-9">
            مشاهده پارچه‌های آرشید
            <ArrowLeft className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
