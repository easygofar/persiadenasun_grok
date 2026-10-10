export default function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="navy-grid border-b border-white/5 text-white">
      <div className="wrap py-14 text-center md:py-16">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/85">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          {kicker}
        </p>
        <h1 className="font-display mx-auto mt-5 max-w-4xl text-4xl text-white md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
          {lede}
        </p>
      </div>
    </section>
  );
}
