import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const aiAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "CCBot",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiAgents, allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
