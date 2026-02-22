import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rorleggerostfold.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/tjenester`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/akutt`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/om-oss`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/personvern`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/tilgjengelighet`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
