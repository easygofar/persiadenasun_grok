import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import HomeView from "@/components/home/HomeView";
import { SITE } from "@/lib/site";
import { homeGraph } from "@/lib/schema";

const TITLE =
  "پرشیا دنا سان | تأمین‌کننده ماشین‌آلات نساجی و چرخ خیاطی صنعتی";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
      en: SITE.enUrl,
      "x-default": "/",
    },
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeGraph(TITLE, SITE.description)} />
      <main id="main">
        <HomeView />
      </main>
    </>
  );
}
