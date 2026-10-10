import { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: 'محصولات پرشیا دنا سان | ماشین‌های دوخت صنعتی' },
    description: 'محصولات با کیفیت ماشین دوخت صنعتی از برندهای معتبر Oshima، Ricoma، Siruba، Orox و Arshid در پرشیا دنا سان',
    keywords: ['ماشین دوخت صنعتی', 'Oshima', 'Ricoma', 'Siruba', 'Orox', 'Arshid', 'پرشیا دنا سان'],
    openGraph: {
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