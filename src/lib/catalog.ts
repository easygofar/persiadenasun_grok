import { products } from "@/data";
import { brandBySlug, type BrandSlug } from "@/lib/site";

/**
 * Catalogue helpers. These read the (large) products data file, so they must
 * only be imported from server components - never from a "use client" file.
 */

/** Number of products listed in the catalogue, per brand and in total. */
export const catalogCounts = (() => {
  const per: Record<string, number> = {};
  for (const p of products) per[p.brand] = (per[p.brand] ?? 0) + 1;
  return { total: products.length, per };
})();

/** Product ids shown in the "featured products" grid on the home page. */
export const FEATURED: { id: string; slug: BrandSlug }[] = [
  { id: "0099", slug: "ricoma" },
  { id: "0123", slug: "siruba" },
  { id: "0001", slug: "oshima" },
  { id: "0125", slug: "siruba" },
  { id: "0003", slug: "oshima" },
  { id: "0097", slug: "ricoma" },
  { id: "0146", slug: "arshid" },
  { id: "0128", slug: "siruba" },
];

export const featuredProducts = () =>
  FEATURED.map(({ id, slug }) => {
    const brand = brandBySlug(slug);
    const p = products.find((x) => x.id === id && x.brand === brand.dataName);
    if (!p) return null;
    const base = String(p.images?.[0] ?? "").replace(/\.[^.]+$/, "");
    return {
      id: p.id,
      href: `/products/${slug}/${p.id}/`,
      name: p.name as string,
      model: slug === "arshid" ? "پارچه آرشید" : (p.model as string),
      brand,
      image: `/images/500px/tn_500px_${base}.webp`,
    };
  }).filter((x): x is NonNullable<typeof x> => x !== null);
