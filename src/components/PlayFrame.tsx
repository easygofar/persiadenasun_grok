"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function PlayFrame({
  src,
  title,
  poster,
  duration,
}: {
  src: string;
  title: string;
  poster: string;
  duration?: string;
}) {
  const [on, setOn] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-[28px] bg-navy-3 shadow-2xl">
      {on ? (
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
          onClick={() => setOn(true)}
          className="absolute inset-0"
          aria-label={`پخش ویدیو: ${title}`}
        >
          <img src={poster} alt="" className="size-full object-cover" />
          <span className="absolute inset-0 bg-navy/25" />
          <span className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-lg">
            <Play className="ms-1 size-7 fill-navy" aria-hidden="true" />
          </span>
          {duration ? (
            <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
              {duration}
            </span>
          ) : null}
        </button>
      )}
    </div>
  );
}
