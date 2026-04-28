import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rørleggerøstfold.no";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicit allowlist for known social scrapers and search bots —
      // helps with platforms that look for an exact user-agent match
      // before scraping link previews.
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "Slackbot", allow: "/" },
      { userAgent: "Discordbot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
