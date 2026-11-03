import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SakuraCatalog from "@/components/sakura/SakuraCatalog";
import { sakuraIntro, threads } from "@/data/sakura";
import { SITE, links } from "@/lib/site";

export const metadata: Metadata = {
    title: "نخ ساکورا | گلدوزی، دوخت و نخ‌های خاص",
    description:
        "پرشیا دنا سان عامل فروش نخ ساکورا است. نخ گلدوزی پلی‌استر و ریون، متالیک با فیلم ژاپنی، نخ دوخت، بازیافتی، تنسل و نخ‌های خاص، با عکس و مشخصات هر سری.",
    alternates: {
        canonical: "/products/sakura/",
        languages: { "fa-IR": "/products/sakura/", "x-default": "/products/sakura/" },
    },
    openGraph: {
        title: "نخ ساکورا | پرشیا دنا سان",
        description:
            "کاتالوگ نخ گلدوزی و دوخت ساکورا: پلی‌استر، ریون، متالیک، بازیافتی، تنسل و نخ‌های خاص.",
        url: "/products/sakura/",
        locale: "fa_IR",
        type: "website",
        images: [{ url: sakuraIntro.image, alt: "بوبین‌های نخ رنگی ساکورا" }],
    },
};

const facts = [
    ["۱۹۹۲", "تأسیس در هانگژو"],
    ["۲۲", "خط تولید استاندارد"],
    ["۱۸٫۳۵ تن", "ظرفیت روزانه"],
    ["۳ میلیون", "بوبین آماده در انبار"],
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "نخ ساکورا",
    url: `${SITE.url}/products/sakura/`,
    description: metadata.description,
    inLanguage: "fa-IR",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@type": "Brand", name: "Sakura Thread" },
    mainEntity: {
        "@type": "ItemList",
        itemListElement: threads.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.name,
            url: `${SITE.url}/products/sakura/${t.slug}/`,
        })),
    },
};

export default function SakuraPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <PageHero
                kicker="عامل فروش نخ ساکورا"
                title="نخ گلدوزی و دوخت ساکورا"
                lede="پرشیا دنا سان نخ‌های ساکورا را عرضه می‌کند؛ از گلدوزی پلی‌استر و ریون تا متالیک با فیلم ژاپنی، نخ دوخت، بازیافتی، تنسل و نخ‌های خاص."
            />

            <section className="bg-white py-12">
                <div className="wrap grid items-center gap-8 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold text-brand" dir="ltr">
                            SAKURA THREAD · {sakuraIntro.mission}
                        </p>
                        <h2 className="font-display mt-2 text-3xl text-navy">نخ ساکورا، از مسیر پرشیا دنا سان</h2>
                        <p className="mt-4 text-sm leading-8 text-muted md:text-base">
                            گروه ساکورا از سال ۱۹۹۲ در هانگژو نخ گلدوزی کامپیوتری (پلی‌استر، ریون و متالیک)، نخ دوخت و نخ‌های خاص تولید می‌کند.
                            برند مستقل ساکورا گواهی سیستم‌های ایزو و بیش از بیست سال گواهی OEKO-TEX STANDARD 100 دارد.
                            نخ متالیک این مجموعه با فیلم متالیک ژاپنی ساخته می‌شود.
                            شرکت پرشیا دنا سان این نخ‌ها را برای کارگاه و کارخانه پوشاک در ایران عرضه می‌کند.
                        </p>
                        <dl className="mt-6 grid grid-cols-2 gap-3">
                            {facts.map(([n, l]) => (
                                <div key={l} className="rounded-2xl bg-paper px-4 py-3">
                                    <dt className="font-display text-2xl text-navy">{n}</dt>
                                    <dd className="text-xs text-muted">{l}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="mt-4 text-sm leading-7 text-muted">
                            موجودی و قیمت روز محصولات در ایران را از پرشیا دنا سان استعلام بگیرید.                        </p>
                        <a href={links.whatsapp} className="btn btn-brand mt-5">
                            استعلام نخ ساکورا
                        </a>
                    </div>
                    <img
                        src={sakuraIntro.building}
                        alt="ساختمان گروه نخ ساکورا"
                        width={900}
                        height={640}
                        className="w-full rounded-3xl object-cover"
                    />
                </div>
            </section>

            <SakuraCatalog />

            <section className="bg-white py-12">
                <div className="wrap grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <h2 className="font-display text-3xl text-navy">سفارش سفارشی و تحویل سریع</h2>
                        <p className="mt-3 text-sm leading-8 text-muted">
                            ساکورا برای سفارش‌های کوچک راه‌حل اختصاصی دارد و فرایند تولید استاندارد را برای یکدستی هر محموله نگه می‌دارد.
                            اگر نمره، کد رنگ یا کاربرد خاصی مدنظر است، همان را برای پرشیا دنا سان بنویسید.
                        </p>
                        <Link href="/contact-us/" className="btn btn-navy mt-5">
                            تماس با دفتر
                        </Link>
                    </div>
                    <img
                        src="/images/sakura/custom-bobbins.jpg"
                        alt="بوبین‌های بنفش نخ ساکورا برای سفارش سفارشی"
                        width={800}
                        height={520}
                        className="w-full rounded-3xl object-cover"
                    />
                </div>
            </section>
        </>
    );
}