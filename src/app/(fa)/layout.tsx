import type { Metadata, Viewport } from "next";
// import { Lalezar, Vazirmatn } from "next/font/google";
import { Lalezar as lalezar, Vazirmatn as vazir } from "@/app/fonts";
import localFont from 'next/font/local'
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { siteGraph } from "@/lib/schema";

// const vazir = Vazirmatn({
//   subsets: ["arabic", "latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-vazir",
//   display: "swap",
// });

// const lalezar = Lalezar({
//   subsets: ["arabic", "latin"],
//   weight: "400",
//   variable: "--font-lalezar",
//   display: "swap",
// });

const DEFAULT_TITLE =
  "پرشیا دنا سان | تأمین‌کننده ماشین‌آلات نساجی و چرخ خیاطی صنعتی";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | پرشیا دنا سان",
  },
  description: SITE.description,
  applicationName: SITE.fullName,
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  category: "business",
  keywords: [
    "چرخ خیاطی صنعتی",
    "ماشین آلات نساجی",
    "دستگاه گلدوزی صنعتی",
    "نمایندگی اوشیما",
    "نمایندگی ریکوما",
    "نمایندگی سیروبا",
    "اوروکس",
    "دستگاه پهن‌کن پارچه",
    "دستگاه برش پارچه",
    "پارچه ژاکارد گردباف",
    "پارچه آرشید",
    "تجهیز کارخانه پوشاک",
    "پرشیا دنا سان",
    "Persia Dena Sun",
  ],
  alternates: {
    canonical: "./",
    languages: {
      "fa-IR": "./",
      en: SITE.enUrl,
      "x-default": "./",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: `${SITE.fullName} | ${SITE.nameEn}`,
    title: DEFAULT_TITLE,
    description: SITE.description,
    url: "/",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "پرشیا دنا سان - ماشین‌آلات نساجی، گلدوزی و چرخ خیاطی صنعتی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  formatDetection: { telephone: true, email: true, address: true },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  other: {
    "content-language": "fa-IR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1629",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${lalezar.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="خلاصه سایت برای موتورهای پاسخ‌گو" />
      </head>
      <body className="m-0 flex min-h-screen flex-col bg-paper p-0 font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-100 focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          پرش به محتوای اصلی
        </a>
        {/* <GoogleAnalytics gaId="G-XGD562CFY5" /> */}
        <JsonLd data={siteGraph} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
