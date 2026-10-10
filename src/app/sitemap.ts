import type { MetadataRoute } from "next";
import { products } from "@/data";
import { BRANDS, SITE } from "@/lib/site";

// Required for `output: "export"`.
export const dynamic = "force-static";

type Product = { id: string; brand: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${SITE.url}${path}`;

  const staticPages: MetadataRoute.Sitemap = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/products/", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about-us/", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/contact-us/", priority: 0.7, changeFrequency: "yearly" as const },
    {
      path: "/products/video/",
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
  ].map(({ path, priority, changeFrequency }) => ({
    url: url(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const brandPages: MetadataRoute.Sitemap = BRANDS.map((b) => ({
    url: url(`/products/${b.slug}/`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = BRANDS.flatMap((b) =>
    (products as Product[])
      .filter((p) => p.brand === b.dataName)
      .map((p) => ({
        url: url(`/products/${b.slug}/${p.id}/`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  );

  return [...staticPages, ...brandPages, ...productPages];
}
