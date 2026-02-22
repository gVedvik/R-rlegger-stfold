import company from "@/data/company.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rorleggerostfold.no";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    name: company.name,
    description:
      "Sertifisert rørleggerservice i Østfold. Vi tilbyr rask respons, fast pris der det er mulig, og dokumentert kvalitet.",
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Østfold",
      addressCountry: "NO",
    },
    areaServed: [
      "Fredrikstad",
      "Sarpsborg",
      "Moss",
      "Halden",
      "Askim",
      "Mysen",
      "Rakkestad",
      "Østfold",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "NOK",
    paymentAccepted: "Cash, Credit Card, Invoice",
  };
}

export function faqSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
