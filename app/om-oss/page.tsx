import type { Metadata } from "next";
import Link from "next/link";
import company from "@/data/company.json";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Om oss – lokalt forankret rørleggerservice i Østfold",
  description:
    "Rørlegger Østfold AS er et lokalt rørleggerfirma med lang erfaring i Østfold. Sertifiserte fagfolk, fast pris og dokumentert kvalitet. Lær mer om oss.",
  path: "/om-oss",
});

const values = [
  {
    title: "Lokal kunnskap",
    description:
      "Vi kjenner Østfold – kommunene, byggeforskriftene og de lokale forholdene. Det gir deg en rørlegger som forstår ditt nærområde.",
  },
  {
    title: "Faglig integritet",
    description:
      "Vi gir deg ærlig råd om hva som er nødvendig, og aldri mer enn det. Ingen salg av unødvendige tjenester.",
  },
  {
    title: "Ryddighet og respekt",
    description:
      "Vi behandler hjemmet ditt som vårt eget – rydder opp etter oss og holder arbeidsplassen ren under hele prosessen.",
  },
  {
    title: "Dokumentert arbeid",
    description:
      "Du mottar alltid skriftlig dokumentasjon på utført arbeid, nyttig ved forsikringssaker og fremtidig boligsalg.",
  },
];

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="about-heading"
        className="bg-brand-900 text-white section-py"
      >
        <div className="container-xl">
          <nav aria-label="Brødsmulesti" className="mb-6">
            <ol className="flex gap-2 text-sm text-brand-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Hjem
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Om oss
              </li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-300">
              Om oss
            </span>
            <h1
              id="about-heading"
              className="mt-2 text-4xl font-extrabold sm:text-5xl"
            >
              Lokalt forankret – faglig sterk
            </h1>
            <p className="mt-5 text-xl text-brand-100/80 leading-relaxed">
              Rørlegger Østfold AS er et lokalt rørleggerfirma med over{" "}
              {company.socialProof.yearsExperience} erfaring. Vi er stolt av å
              betjene folk i hele Østfold med god service og faglig stolthet.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section aria-label="Vår historie" className="section-py bg-white dark:bg-slate-900 transition-colors">
        <div className="container-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Vår historie
              </h2>
              <div className="mt-5 space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Rørlegger Østfold AS ble grunnlagt med ett mål: å tilby folk i
                  Østfold en rørlegger de kan stole på. Ikke bare en som kommer
                  og fikser problemet, men en som kommuniserer tydelig, priser
                  ærlig og leverer dokumentert kvalitet.
                </p>
                <p>
                  Vi har vokst gjennom anbefalinger fra fornøyde kunder – fra
                  Fredrikstad i sør til Indre Østfold i nord. Det er vi
                  stolte av.
                </p>
                <p>
                  Vi er sertifiserte rørleggere med fagbrev og nødvendige
                  godkjenninger. Vi jobber i henhold til norske regler og
                  standarder, og legger vekt på at alt arbeid er dokumentert og
                  etterprøvbart.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: company.socialProof.yearsExperience, label: "År med erfaring" },
                { value: company.socialProof.jobsCompleted, label: "Fullførte oppdrag" },
                { value: company.socialProof.satisfiedCustomers, label: "Fornøyde kunder" },
                { value: "24/7", label: "Akuttvakt tilgjengelig" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white dark:bg-slate-800 p-6 text-center transition-colors"
                >
                  <p className="text-4xl font-extrabold text-brand-700">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        aria-labelledby="values-heading"
        className="section-py bg-slate-50 dark:bg-slate-950 transition-colors"
      >
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2
              id="values-heading"
              className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
            >
              Verdiene våre
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-lg text-slate-600 dark:text-slate-300">
              Det er ikke bare hva vi gjør – det er måten vi gjør det på.
            </p>
          </div>

          <ul
            role="list"
            className="grid gap-6 sm:grid-cols-2"
          >
            {values.map((v) => (
              <li
                key={v.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {v.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certifications disclaimer */}
      <section aria-label="Sertifiseringer" className="section-py bg-white dark:bg-slate-900 transition-colors">
        <div className="container-xl max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
            Sertifisering og godkjenning
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Alle våre rørleggere har fagbrev og er godkjente for arbeid på
            vannrør og avløp i henhold til norske regler. Vi er underlagt
            offentlig tilsyn og arbeider i samsvar med gjeldende byggeforskrifter
            (TEK17) og bransjestandard.
          </p>
          <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
            * Sertifiseringsbadger vises her når dokumentasjon er verifisert og
            tilgjengelig for publisering.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-label="Ta kontakt"
        className="bg-brand-900 text-white section-py"
      >
        <div className="container-xl text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl mb-4">
            Klar for å ta kontakt?
          </h2>
          <p className="text-brand-200 mb-8">
            Vi ser frem til å hjelpe deg med ditt røroppdrag.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-base font-bold text-white hover:bg-brand-700 transition-colors"
            >
              Ring {company.phoneDisplay}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Be om tilbud
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
