"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Item = { webp: string; full: string; thumb: string };

export default function GalleryLightbox({ items, label }: { items: Item[]; label: string }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  const cur = active !== null ? items[active] : null;

  return (
    <>
      <ul className="mt-4 flex flex-wrap justify-center gap-3">
        {items.map((img, i) => (
          <li key={img.full} className="card grid size-28 place-items-center p-2">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`نمایش تصویر ${i + 1}`}
              className="cursor-zoom-in"
            >
              <img src={img.thumb} alt="" className="max-h-24 w-auto object-contain" />
            </button>
          </li>
        ))}
      </ul>
      {cur ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="بستن"
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white text-navy shadow-lg"
          >
            <X className="size-6" />
          </button>
          <picture onClick={(e) => e.stopPropagation()}>
            <source srcSet={cur.webp} type="image/webp" />
            <img
              src={cur.full}
              alt={label}
              className="max-h-[90vh] max-w-[92vw] rounded-lg bg-white object-contain"
            />
          </picture>
        </div>
      ) : null}
    </>
  );
}
