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
  const fullTitle = `${title} | Rørlegger Østfold AS`;

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
      siteName: "Rørlegger Østfold AS",
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
    "Rørlegger Østfold AS – sertifiserte rørleggere med rask respons i Fredrikstad, Sarpsborg, Moss, Halden og hele Østfold. Fast pris der det er mulig. Ring 476 00 444.",
  path: "/",
});
