import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import BrandLogo from "@/components/BrandLogo";
import { BRANDS, SITE, jalaliYear, links, toFa } from "@/lib/site";

const heading =
  "mb-4 border-s-[3px] border-brand ps-3 font-display text-xl text-white";
const link = "text-sm text-white/70 transition-colors hover:text-white";

export default function SiteFooter() {
  const year = toFa(jalaliYear());

  return (
    <footer className="mt-10 border-t-[3px] border-brand bg-navy text-white">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <BrandLogo />
          <p className="mt-4 max-w-sm text-sm leading-8 text-white/70">
            پرشیا دنا سان؛ نیم قرن تأمین ماشین‌آلات نساجی و چرخ خیاطی صنعتی در
            ایران، نمایندگی رسمی برندهای معتبر جهانی و تولیدکننده پارچه‌های
            آرشید.
          </p>
          <div className="mt-5 flex gap-2">
            <Social href={links.instagram} label="اینستاگرام">
              <FaInstagram className="size-4" />
            </Social>
            <Social href={links.telegram} label="تلگرام">
              <FaTelegram className="size-4" />
            </Social>
            <Social href={links.whatsapp} label="واتساپ">
              <FaWhatsapp className="size-4" />
            </Social>
            <Social href={links.mail} label="ایمیل">
              <Mail className="size-4" />
            </Social>
          </div>
        </div>

        <nav aria-label="دسترسی سریع" className="md:col-span-2">
          <h2 className={heading}>دسترسی سریع</h2>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link className={link} href="/">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link className={link} href="/products/">
                محصولات
              </Link>
            </li>
            <li>
              <Link className={link} href="/about-us/">
                درباره ما
              </Link>
            </li>
            <li>
              <Link className={link} href="/contact-us/">
                تماس با ما
              </Link>
            </li>
            <li>
              <Link className={link} href="/products/video/">
                ویدیوها
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="برندها و محصولات" className="md:col-span-3">
          <h2 className={heading}>برندها و محصولات</h2>
          <ul className="flex flex-col gap-2.5">
            {BRANDS.map((b) => (
              <li key={b.slug}>
                <Link className={link} href={`/products/${b.slug}/`}>
                  <span dir="ltr">{b.name}</span>
                  <span className="text-white/40"> · </span>
                  {b.fa}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className={heading}>اطلاعات تماس</h2>
          <address className="flex flex-col gap-3 text-sm not-italic text-white/75">
            <span className="flex items-start gap-2">
              <MapPin className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {SITE.address.city}، {SITE.address.street}
              </span>
            </span>
            <a className="flex items-center gap-2 hover:text-white" href={links.tel}>
              <Phone className="size-4 shrink-0 text-brand" aria-hidden="true" />
              <span dir="ltr">{SITE.phoneDisplay}</span>
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={links.whatsapp}>
              <FaWhatsapp className="size-4 shrink-0 text-brand" aria-hidden="true" />
              <span dir="ltr">{SITE.whatsapp}</span>
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={links.mail}>
              <Mail className="size-4 shrink-0 text-brand" aria-hidden="true" />
              <span dir="ltr">{SITE.email}</span>
            </a>
            <p className="text-white/55">{SITE.hoursLine}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0c1222]">
        <div className="wrap flex flex-col gap-2 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.fullName}. تمامی حقوق محفوظ است.
          </p>
          <p className="inline-flex items-center gap-2">
            {/* طراحی مجدد سایت پرشیا دنا سان */}
            {/* <span className="size-2 rounded-full bg-brand" aria-hidden="true" /> */}
          </p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="grid size-10 place-items-center rounded-xl border border-white/15 text-white/80 hover:border-brand hover:text-brand"
    >
      {children}
    </a>
  );
}
