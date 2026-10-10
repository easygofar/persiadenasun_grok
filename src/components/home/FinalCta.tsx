import Link from "next/link";
import { Phone } from "lucide-react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { SITE, links } from "@/lib/site";

export default function FinalCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="defer-render bg-ink-950 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="grain relative mx-auto w-full max-w-[1240px] overflow-hidden rounded-[40px] bg-brand-500 px-6 py-14 text-ink-950 md:px-16 md:py-20">
        <div className="relative z-10 max-w-3xl">
          <h2 id="cta-title" className="title-xl">
            خط تولید یا کارگاه جدیدی در دست دارید؟
          </h2>
          <p className="mt-4 text-lg leading-9 text-ink-950/80">
            با کارشناسان پرشیا دنا سان صحبت کنید تا بهترین ترکیب ماشین‌آلات،
            نرم‌افزار و آموزش را برای کسب‌وکار شما پیشنهاد دهند.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact-us/" className="btn btn-dark">
              درخواست مشاوره و قیمت
            </Link>
            <a
              href={links.tel}
              className="btn border border-ink-950/30 text-ink-950 hover:bg-ink-950/10"
            >
              <Phone className="size-5" aria-hidden="true" />
              <span dir="ltr">{SITE.phoneDisplay}</span>
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-ink-950/30 text-ink-950 hover:bg-ink-950/10"
            >
              <FaWhatsapp className="size-5" aria-hidden="true" />
              واتس‌اپ
            </a>
            <a
              href={links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-ink-950/30 text-ink-950 hover:bg-ink-950/10"
            >
              <FaTelegram className="size-5" aria-hidden="true" />
              تلگرام
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
