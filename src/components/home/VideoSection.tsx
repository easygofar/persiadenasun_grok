import VideoFacade from "@/components/home/VideoFacade";
import { SITE } from "@/lib/site";

export default function VideoSection() {
  return (
    <section
      aria-labelledby="video-title"
      className="defer-render bg-ink-950 py-20 text-white md:py-28"
    >
      <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-400">ویدیوی معرفی</p>
          <h2 id="video-title" className="title-xl mt-3">
            فعالیت‌های شرکت پرشیا دنا سان
          </h2>
          <p className="mt-4 text-lg leading-9 text-white/70">
            نگاهی کوتاه به ماشین‌آلات، خدمات و تجربه ما در صنعت پوشاک.
          </p>
        </div>
        <div className="reveal mt-10">
          <VideoFacade
            src={SITE.aparatEmbed}
            title="فعالیت‌های شرکت پرشیا دنا سان"
            poster="/images/hero/hero-fabric-800.webp"
          />
        </div>
      </div>
    </section>
  );
}
