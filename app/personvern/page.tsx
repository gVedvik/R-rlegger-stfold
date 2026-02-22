import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import company from "@/data/company.json";

export const metadata: Metadata = buildMetadata({
  title: "Personvernerklæring – RørleggerØstfold",
  description:
    "Les personvernerklæringen til RørleggerØstfold. Vi behandler dine personopplysninger i samsvar med GDPR og norsk personvernlovgivning.",
  path: "/personvern",
  noIndex: true,
});

export default function PersonvernPage() {
  const updated = "2025-01-01";

  return (
    <div className="section-py">
      <div className="container-xl max-w-3xl">
        <nav aria-label="Brødsmulesti" className="mb-8">
          <ol className="flex gap-2 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="hover:text-brand-700 transition-colors">
                Hjem
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-slate-900 dark:text-white">
              Personvern
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          Personvernerklæring
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mb-8">
          Sist oppdatert: {updated}
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <section aria-labelledby="pv-ansvarlig">
            <h2 id="pv-ansvarlig" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              1. Behandlingsansvarlig
            </h2>
            <p>
              Behandlingsansvarlig for personopplysninger er {company.name}, Org.nr.{" "}
              {company.orgnr}. Kontakt oss på{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-brand-700 hover:underline"
              >
                {company.email}
              </a>{" "}
              eller{" "}
              <a
                href={`tel:${company.phone}`}
                className="text-brand-700 hover:underline"
              >
                {company.phoneDisplay}
              </a>{" "}
              ved spørsmål om personvern.
            </p>
          </section>

          <section aria-labelledby="pv-hva">
            <h2 id="pv-hva" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              2. Hvilke opplysninger samler vi inn?
            </h2>
            <p>Vi samler inn følgende personopplysninger når du bruker kontaktskjemaet:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Navn</li>
              <li>Telefonnummer</li>
              <li>Adresse / sted (valgfritt)</li>
              <li>Beskrivelse av oppdrag</li>
              <li>Ønsket tidspunkt</li>
            </ul>
          </section>

          <section aria-labelledby="pv-formal">
            <h2 id="pv-formal" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              3. Formål med behandlingen
            </h2>
            <p>
              Opplysningene brukes utelukkende til å besvare din henvendelse og
              avtale eller gjennomføre rørleggeroppdraget. Vi selger aldri dine
              opplysninger videre.
            </p>
          </section>

          <section aria-labelledby="pv-grunnlag">
            <h2 id="pv-grunnlag" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              4. Behandlingsgrunnlag
            </h2>
            <p>
              Behandlingen er basert på ditt samtykke (GDPR art. 6(1)(a)) og
              avtaleforhold (art. 6(1)(b)).
            </p>
          </section>

          <section aria-labelledby="pv-lagring">
            <h2 id="pv-lagring" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              5. Lagring og sletting
            </h2>
            <p>
              Personopplysninger lagres så lenge det er nødvendig for å oppfylle
              formålet, og deretter slettes de i samsvar med norsk
              regnskapslovgivning (normalt 5 år for fakturaopplysninger).
            </p>
          </section>

          <section aria-labelledby="pv-rettigheter">
            <h2 id="pv-rettigheter" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              6. Dine rettigheter
            </h2>
            <p>Du har rett til å:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Få innsyn i hvilke opplysninger vi har om deg</li>
              <li>Kreve retting av feilaktige opplysninger</li>
              <li>Kreve sletting av opplysninger</li>
              <li>Trekke tilbake samtykket ditt</li>
              <li>Klage til Datatilsynet (datatilsynet.no)</li>
            </ul>
            <p className="mt-3">
              For å utøve dine rettigheter, kontakt oss på{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-brand-700 hover:underline"
              >
                {company.email}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="pv-cookies">
            <h2 id="pv-cookies" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              7. Informasjonskapsler (cookies)
            </h2>
            <p>
              Nettstedet bruker kun teknisk nødvendige informasjonskapsler for å
              fungere korrekt. Vi bruker ikke sporingscookies eller
              tredjepartsannonsering.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
