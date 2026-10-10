import { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: 'محصولات پرشیا دنا سان | ماشین‌های دوخت صنعتی' },
    description: 'محصولات با کیفیت ماشین دوخت صنعتی از برندهای معتبر Oshima، Ricoma، Siruba و Arshid در پرشیا دنا سان',
    keywords: [
        "پرشیا دنا سان",
        "تأمین‌کننده ماشین‌آلات نساجی",
        "تأمین‌کننده تخصصی ماشین‌آلات نساجی",
        "ماشین‌آلات نساجی",
        "چرخ خیاطی صنعتی",
        "ماشین‌آلات نساجی و چرخ خیاطی صنعتی",
        "اوشیما",
        "سیروبا",
        "ریکوما",
        "آرشید",
        "پارچه‌های آرشید",
        "تولید پارچه‌های تخصصی",
        "تجهیز کارخانه‌های پوشاک",
        "تأمین ماشین‌آلات مدرن",
        "صنعت پوشاک ایران",
        "شرکت پرشیا دنا سان",
        "محصولات صنعت پوشاک",
        "خدمات صنعت پوشاک",
        "نمایندگی رسمی",
    ], openGraph: {
        title: 'محصولات پرشیا دنا سان | ماشین‌های دوخت صنعتی',
        description: 'محصولات با کیفیت ماشین دوخت صنعتی از برندهای معتبر در پرشیا دنا سان',
        type: 'website',
        locale: 'fa_IR',
        url: 'https://persiadenasun.ir/products/',
    },
    alternates: {
        canonical: 'https://persiadenasun.ir/products/',
        languages: {
            "fa-IR": "https://persiadenasun.ir/products/",
            // "en-US": "https://persiadenasun.ir/en/products/",
            // "ar": "https://persiadenasun.ir/ar/products/",
        },
    },
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 