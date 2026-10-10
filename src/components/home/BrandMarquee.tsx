import { BRANDS } from "@/lib/site";

/** Decorative, motion-safe brand strip. Real brand content lives in the brands section. */
export default function BrandMarquee() {
  const items = BRANDS.map((b) => b.name.toUpperCase());
  const row = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      dir="ltr"
      className="marquee overflow-hidden border-y border-white/10 bg-ink-900 py-5 text-white/55"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((name, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="px-8 font-sans text-2xl font-bold md:text-3xl">
                  {name}
                </span>
                <span className="size-2 rotate-45 bg-brand-500/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
