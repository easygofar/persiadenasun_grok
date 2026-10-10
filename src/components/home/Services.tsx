import {
  BadgeCheck,
  ClipboardList,
  Cpu,
  Factory,
  GraduationCap,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "مشاوره و طراحی خط تولید",
    text: "انتخاب ماشین‌آلات متناسب با محصول و ظرفیت شما، با تکیه بر تجربه راه‌اندازی کارخانه‌های بزرگ پوشاک.",
  },
  {
    icon: Factory,
    title: "تجهیز کارخانه و کارگاه",
    text: "تجهیز واحدهای تولیدی بزرگ و کوچک؛ با شعبه‌هایی در شهرهای فعال صنعت پوشاک، کنار تولیدکنندگان هستیم.",
  },
  {
    icon: Wrench,
    title: "نصب، راه‌اندازی و خدمات فنی",
    text: "کادر مجرب ما در نصب، راه‌اندازی و سرویس ماشین‌آلات در کنار شماست تا خط تولید متوقف نشود.",
  },
  {
    icon: GraduationCap,
    title: "آموزش تکنسین و اپراتور",
    text: "آموزش تکنسین‌ها، به‌ویژه در شهرستان‌ها، و همکاری با دانشگاه‌ها، مراکز فنی‌وحرفه‌ای و آموزشگاه‌ها.",
  },
  {
    icon: Cpu,
    title: "نرم‌افزارهای تخصصی",
    text: "نرم‌افزارهای طراحی الگو، الگوساز، گلدوزی و بهینه‌سازی خط تولید برای کاهش هزینه و افزایش راندمان.",
  },
  {
    icon: BadgeCheck,
    title: "تعهد پس از فروش",
    text: "برای ما فروش آغاز مسئولیت است و جلب رضایت مشتریان از مهم‌ترین وظایف ماست.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="defer-render relative overflow-hidden bg-ink-900 py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 size-[480px] rounded-full bg-brand-500/15 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-brand-400">راهکارهای B2B</p>
          <h2 id="services-title" className="title-xl mt-3">
            فقط فروش ماشین نیست؛ شریک تولید شما هستیم
          </h2>
          <p className="mt-4 text-lg leading-9 text-white/70">
            از اولین مشاوره تا آموزش اپراتورها و سرویس‌های دوره‌ای، تیم ما در
            تمام مراحل راه‌اندازی و توسعه تولید همراه شماست.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="reveal glass group rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-500/50"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-500/15 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold leading-8">{title}</h3>
              <p className="mt-2 text-[15px] leading-8 text-white/70">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
