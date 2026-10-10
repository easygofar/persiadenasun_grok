import type { MetadataRoute } from "next";

// Required for `output: "export"`.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "شرکت پرشیا دنا سان",
    short_name: "پرشیا دنا سان",
    description:
      "نمایندگی رسمی ماشین‌آلات دوخت، گلدوزی و برش صنعتی؛ مشاوره، نصب، آموزش و پشتیبانی فنی",
    lang: "fa",
    dir: "rtl",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#130e0e",
    theme_color: "#130e0e",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
