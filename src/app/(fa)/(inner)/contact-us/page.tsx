import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import PageHero from "@/components/PageHero";
import { SITE, links, toFa } from "@/lib/site";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "تماس با کارشناسان پرشیا دنا سان برای مشاوره ماشین‌آلات نساجی، پارچه‌های آرشید و تجهیز خط تولید. تلفن ۰۲۱-۶۳۴۱۴، واتساپ و تلگرام.",
  alternates: {
    canonical: "/contact-us/",
    languages: { "fa-IR": "/contact-us/", "x-default": "/contact-us/" },
  },
  openGraph: {
    title: "تماس با پرشیا دنا سان",
    description:
      "کارشناسان پرشیا دنا سان آماده پاسخگویی درباره ماشین‌آلات، پارچه‌ها و تجهیز خط تولید هستند.",
    locale: "fa_IR",
    type: "website",
    url: "/contact-us/",
    images: [SITE.ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "تماس با پرشیا دنا سان",
  url: `${SITE.url}/contact-us/`,
  inLanguage: "fa-IR",
  mainEntity: { "@id": `${SITE.url}/#organization` },
};

const cards = [
  {
    label: "تلفن",
    value: SITE.phoneDisplay,
    href: links.tel,
    icon: <Phone className="size-5" />,
  },
  {
    label: "واتساپ",
    value: SITE.whatsappDisplay,
    href: links.whatsapp,
    icon: <FaWhatsapp className="size-5" />,
  },
  {
    label: "تلگرام",
    value: `@${SITE.telegram}`,
    href: links.telegram,
    icon: <FaTelegram className="size-5" />,
  },
  {
    label: "اینستاگرام",
    value: SITE.instagram,
    href: links.instagram,
    icon: <FaInstagram className="size-5" />,
  },
  {
    label: "ایمیل",
    value: SITE.emailAlt,
    href: links.mailAlt,
    icon: <Mail className="size-5" />,
  },
];

export default function ContactUs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        kicker="راه‌های ارتباطی"
        title="تماس با پرشیا دنا سان"
        lede="کارشناسان ما آماده پاسخگویی به سؤالات شما درباره ماشین‌آلات، پارچه‌ها و تجهیز خط تولید هستند"
      />

      <section className="bg-paper py-12">
        <div className="wrap">
          <ul className="grid gap-4 md:grid-cols-3">
            {cards.map((c) => (
              <li key={c.label}>
                <a href={c.href} className="card flex items-center justify-between gap-4 p-5 hover:border-brand/30">
                  <span>
                    <span className="block text-xs text-faint">{c.label}</span>
                    <span className="mt-1 block text-base font-semibold text-navy" dir="ltr">
                      {c.value}
                    </span>
                  </span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                    {c.icon}
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between gap-4 rounded-[22px] border border-dashed border-brand/50 bg-peach p-5">
              <span>
                <span className="block text-xs text-brand">فرم تماس</span>
                <span className="mt-1 block font-semibold text-navy">به‌زودی</span>
              </span>
              <span className="grid size-12 place-items-center rounded-2xl bg-white text-brand">
                <Mail className="size-5" />
              </span>
            </li>
          </ul>

          <div className="mt-6 grid items-stretch gap-5 lg:grid-cols-5">
            <div className="card overflow-hidden lg:col-span-3">
              <iframe
                title="موقعیت دفتر پرشیا دنا سان روی نقشه"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=51.380,35.691,51.398,35.702&layer=mapnik&marker=${SITE.geo.lat},${SITE.geo.lng}`}
                className="h-[420px] w-full border-0"
                loading="lazy"
              />
            </div>
            <div className="card p-6 lg:col-span-2">
              <h2 className="flex items-center gap-2 font-display text-2xl text-navy">
                <MapPin className="size-5 text-brand" aria-hidden="true" />
                موقعیت ما
              </h2>
              <p className="mt-3 text-sm leading-8 text-muted">
                {SITE.address.city}، {SITE.address.street}
              </p>
              <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy">
                <Clock className="size-4 text-brand" aria-hidden="true" />
                ساعت کاری
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {SITE.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.time}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-7 text-faint">{SITE.closedNote}</p>
              <a href={links.mobile} className="btn btn-brand mt-6 w-full">
                <Phone className="size-4" />
                <span dir="ltr">{toFa(SITE.phoneDisplay)}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
