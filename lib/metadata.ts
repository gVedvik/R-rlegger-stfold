import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rorleggerostfold.no";

interface PageMeta {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageMeta): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} | RørleggerØstfold`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    robots: noIndex ? { index: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "RørleggerØstfold",
      locale: "nb_NO",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const defaultMeta = buildMetadata({
  title: "Rask og pålitelig rørlegger i Østfold",
  description:
    "RørleggerØstfold – sertifiserte rørleggere med rask respons i Fredrikstad, Sarpsborg, Moss, Halden og hele Østfold. Fast pris der det er mulig. Ring 912 34 567.",
  path: "/",
});
