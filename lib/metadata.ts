import type { Metadata } from "next";

// Display URL (Unicode IDN) — used as raw strings so it survives in og:url
// and og:image as 'rørleggerøstfold.no' instead of being normalized by
// `new URL()` (which always converts IDN to Punycode/xn--).
const SITE_URL = "https://rørleggerøstfold.no";
// metadataBase MUST be a URL object (Next.js requires it), so it ends up
// in Punycode form. That's only used for resolving relative URLs (e.g.
// the OG image route), which is fine — the user-visible og:url and
// canonical are emitted as raw strings below.
const SITE_URL_PUNYCODE = "https://xn--rrleggerstfold-qqbh.no";

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
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | Østfold Rørleggerbedrift AS`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL_PUNYCODE),
    robots: noIndex ? { index: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      // url omitted intentionally — emitted via `other` below as raw
      // string so the Unicode IDN form is preserved.
      siteName: "Østfold Rørleggerbedrift AS",
      locale: "nb_NO",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    other: {
      "og:url": url,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const defaultMeta = buildMetadata({
  title: "Rask og pålitelig rørlegger i Østfold",
  description:
    "Østfold Rørleggerbedrift AS – sertifiserte rørleggere med rask respons i Fredrikstad, Sarpsborg, Moss, Halden og hele Østfold. Fast pris der det er mulig. Ring 476 00 444.",
  path: "/",
});
