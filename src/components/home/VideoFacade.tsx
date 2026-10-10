"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * Click-to-load video. The third-party player (and its scripts) is only
 * requested after the visitor presses play, which keeps the page fast.
 */
export default function VideoFacade({
  src,
  title,
  poster,
}: {
  src: string;
  title: string;
  poster: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/15 bg-ink-800 shadow-2xl shadow-black/40">
      {active ? (
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`پخش ویدیو: ${title}`}
          className="group absolute inset-0 grid place-items-center"
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 768px) 92vw, 960px"
            className="object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
          />
          <span className="relative grid size-20 place-items-center rounded-full bg-brand-500 text-ink-950 shadow-xl shadow-black/40 transition-transform duration-300 group-hover:scale-110 md:size-24">
            <Play
              className="size-9 translate-x-[-2px] fill-current"
              aria-hidden="true"
            />
          </span>
        </button>
      )}
    </div>
  );
}
