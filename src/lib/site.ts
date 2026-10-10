/** Single source of truth for company facts used by the layout, header, footer, pages and structured data. */
export const SITE = {
  url: "https://persiadenasun.ir",
  name: "پرشیا دنا سان",
  fullName: "شرکت پرشیا دنا سان",
  nameEn: "Persia Dena Sun",
  slogan: "نیم قرن تأمین ماشین‌آلات نساجی و چرخ خیاطی صنعتی",
  description:
    "پرشیا دنا سان تأمین‌کننده تخصصی ماشین‌آلات نساجی و چرخ خیاطی صنعتی در ایران است؛ نمایندگی رسمی اوشیما، سیروبا، ریکوما و اوروکس، همراه با تولید پارچه‌های گردباف آرشید، مشاوره، نصب و پشتیبانی فنی.",
  phoneDisplay: "021-63414",
  phoneIntl: "+98-21-63414",
  mobileDisplay: "09101818197",
  mobilePretty: "0910 181 8197",
  whatsapp: "989101818197",
  whatsappDisplay: "989101818197",
  telegram: "PersiaDenasun1",
  instagram: "persiadenasun",
  email: "info@persiadenasun.com",
  emailAlt: "persiandenasun.com@gmail.com",
  logo: "/icons/persiadenasun-logo-512x512.png",
  ogImage: "/images/og/og-home.jpg",
  enUrl: "https://persiadenasun.com/",
  arUrl: "https://persiadenasun.com/ar/",
  aparatChannel: "https://www.aparat.com/PersiaDenaSun",
  address: {
    street: "خیابان جمهوری، نرسیده به جمالزاده، پلاک ۱۳۵۸",
    city: "تهران",
    country: "IR",
  },
  geo: { lat: 35.696216, lng: 51.389365 },
  hours: [
    { days: "شنبه تا چهارشنبه", time: "۹:۰۰ تا ۱۷:۰۰" },
    { days: "پنجشنبه", time: "۹:۰۰ تا ۱۳:۰۰" },
  ],
  hoursLine: "شنبه تا چهارشنبه ۹ تا ۱۷ · پنجشنبه ۹ تا ۱۳ · جمعه‌ها تعطیل",
  closedNote: "جمعه‌ها و ایام تعطیل رسمی، فروشگاه بسته است.",
  aparatEmbed:
    "https://www.aparat.com/video/video/embed/videohash/rrn987q/vt/frame",
} as const;

export const links = {
  whatsapp: `https://wa.me/${SITE.whatsapp}`,
  telegram: `https://t.me/${SITE.telegram}`,
  instagram: `https://instagram.com/${SITE.instagram}`,
  tel: `tel:${SITE.phoneIntl}`,
  mobile: "tel:+989101818197",
  mail: `mailto:${SITE.email}`,
  mailAlt: `mailto:${SITE.emailAlt}`,
  aparat: SITE.aparatChannel,
  en: SITE.enUrl,
  ar: SITE.arUrl,
} as const;

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

/** Persian digits, keeping separators the caller already added. */
export const toFa = (value: string | number) =>
  String(value).replace(/\d/g, (d) => FA_DIGITS[Number(d)] ?? d);

/** Persian digits with no thousands separator (years, short counts). */
export const faDigits = (n: number | string) => toFa(n);

/** Solar Hijri year for the footer copyright. */
export const jalaliYear = (date = new Date()) => {
  const y = date.getFullYear();
  const m = date.getMonth();
  const day = date.getDate();
  const beforeNowruz = m < 2 || (m === 2 && day < 21);
  return y - (beforeNowruz ? 622 : 621);
};

export type BrandSlug = "oshima" | "ricoma" | "siruba" | "orox" | "arshid";

export interface Brand {
  slug: BrandSlug;
  /** brand value used in the products data file */
  dataName: string;
  name: string;
  fa: string;
  headline: string;
  blurb: string;
  image: string;
  imageAlt: string;
}

export const BRANDS: Brand[] = [
  {
    slug: "oshima",
    dataName: "Oshima",
    name: "Oshima",
    fa: "اوشیما",
    headline: "پیشرو در ماشین‌آلات نساجی",
    blurb:
      "دستگاه برش، پرس، پهن‌کن، میز مکش و تجهیزات تکمیل خط تولید. نمایندگی رسمی اوشیما.",
    image: "/images/hero/oshima.webp",
    imageAlt: "دستگاه صنعتی اوشیما",
  },
  {
    slug: "siruba",
    dataName: "Siruba",
    name: "Siruba",
    fa: "سیروبا",
    headline: "چرخ‌های خیاطی صنعتی",
    blurb:
      "راسته‌دوز، الیک، سردوز و میاندوز صنعتی برند تایوانی سیروبا برای خط تولید پوشاک.",
    image: "/images/hero/siruba.webp",
    imageAlt: "چرخ خیاطی صنعتی سیروبا",
  },
  {
    slug: "ricoma",
    dataName: "Ricoma",
    name: "Ricoma",
    fa: "ریکوما",
    headline: "ماشین‌های گلدوزی صنعتی",
    blurb:
      "چرخ گلدوزی یه کله و چند کله و پرس حرارتی برند ریکوما برای کارگاه و کارخانه.",
    image: "/images/hero/ricoma.webp",
    imageAlt: "دستگاه گلدوزی صنعتی ریکوما",
  },
  {
    slug: "orox",
    dataName: "Orox",
    name: "Orox",
    fa: "اوروکس",
    headline: "فناوری ایتالیایی برش",
    blurb: "دستگاه برش و تجهیزات آماده‌سازی پارچه با فناوری ایتالیایی اوروکس.",
    image: "/images/hero/orox.webp",
    imageAlt: "دستگاه برش اوروکس",
  },
  {
    slug: "arshid",
    dataName: "Arshid",
    name: "Arshid",
    fa: "آرشید",
    headline: "پارچه‌های گردباف تخصصی",
    blurb:
      "تولید شرکت پرشیا دنا سان. پارچه های ژاکارد دورو، ژاکارد ترنسفر، یکرو ژاکارد و پارچه‌های یکرو در طرح‌های متنوع.",
    image: "/images/hero/arshid-fabric-720.webp",
    imageAlt: "پارچه گردباف آرشید و دوک نخ",
  },
];

export const brandBySlug = (slug: BrandSlug) =>
  BRANDS.find((b) => b.slug === slug)!;

export const FAQ: { q: string; a: string }[] = [
  {
    q: "پرشیا دنا سان چه برندها و محصولاتی ارائه می‌کند؟",
    a: "پرشیا دنا سان نماینده رسمی Oshima، Ricoma، Siruba و Orox است. چرخ خیاطی صنعتی، ماشین گلدوزی، دستگاه پهن‌کن و برش، پرس و تجهیزات کنترل کیفیت از جمله محصولات است. پارچه گردباف تخصصی هم با برند آرشید تولید می‌شود.",
  },
  {
    q: "آیا برای راه‌اندازی کارخانه یا کارگاه پوشاک مشاوره می‌دهید؟",
    a: "بله. انتخاب ماشین‌آلات، چیدمان خط تولید و تجهیز کارخانه‌های بزرگ و کارگاه‌های کوچک با مشاوره تیم پرشیا دنا سان انجام می‌شود.",
  },
  {
    q: "نصب، آموزش و خدمات فنی هم انجام می‌شود؟",
    a: "بله. نصب، آموزش اپراتور و خدمات فنی، به‌ویژه در شهرستان‌ها، بخشی از کار شرکت است. فروش آغاز مسئولیت است.",
  },
  {
    q: "نرم‌افزار الگو، گلدوزی و بهینه‌سازی خط تولید دارید؟",
    a: "بله. نرم‌افزار طراحی الگو، الگوساز، گلدوزی و بهینه‌سازی خط تولید پوشاک برای کاهش هزینه و بالا بردن راندمان ارائه می‌شود.",
  },
  {
    q: "چه پارچه‌هایی با برند آرشید تولید می‌کنید؟",
    a: "پارچه گردباف ژاکارد دورو، ژاکارد ترنسفر، یکرو ژاکارد، پارچه یکرو، کتن و راشل.",
  },
  {
    q: "چطور قیمت و موجودی را استعلام کنم؟",
    a: `با تلفن ${SITE.phoneDisplay}، موبایل و واتس‌اپ ${SITE.mobileDisplay}، تلگرام @${SITE.telegram} یا ایمیل ${SITE.email}. دفتر: ${SITE.address.city}، ${SITE.address.street}. ${SITE.hoursLine}.`,
  },
];
