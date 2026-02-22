import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import company from "@/data/company.json";

export const metadata: Metadata = buildMetadata({
  title: "Tilgjengelighetserklæring – Rørlegger Østfold AS",
  description:
    "Rørlegger Østfold AS sitt nettsted er designet for å overholde WCAG 2.1 AA. Les vår tilgjengelighetserklæring.",
  path: "/tilgjengelighet",
  noIndex: true,
});

const wcagChecklist = [
  { criterion: "1.1.1 Ikke-tekstlig innhold", status: "pass", note: "Alle bilder og ikoner har alt-tekst eller er skjult for skjermleser." },
  { criterion: "1.3.1 Informasjon og relasjoner", status: "pass", note: "Semantisk HTML med korrekte heading-hierarki og landmark-roller." },
  { criterion: "1.4.3 Kontrastforhold (minimum)", status: "pass", note: "Alle tekstkontraster er ≥ 4,5:1 (AA)." },
  { criterion: "1.4.4 Endre tekststørrelse", status: "pass", note: "Nettstedet skalerer korrekt opptil 200% zoom." },
  { criterion: "1.4.10 Reflowability", status: "pass", note: "Innholdet reflowes ved 320px bredde uten horisontalt scroll." },
  { criterion: "1.4.12 Tekstspaceing", status: "pass", note: "Nettstedet takler økt linjehøyde, bokstavavstand og ordavstand." },
  { criterion: "2.1.1 Tastatur", status: "pass", note: "All funksjonalitet er tilgjengelig med tastatur alene." },
  { criterion: "2.1.2 Ingen tastaturlåsing", status: "pass", note: "Fokus kan flyttes bort fra alle elementer." },
  { criterion: "2.4.1 Hopp over blokker", status: "pass", note: "Skip-to-content-lenke er implementert." },
  { criterion: "2.4.2 Sidetittel", status: "pass", note: "Alle sider har unike og beskrivende titler." },
  { criterion: "2.4.3 Fokuseringsserie", status: "pass", note: "Fokusrekkefølgen er logisk og meningsfull." },
  { criterion: "2.4.7 Synlig fokus", status: "pass", note: "Alle interaktive elementer har synlig fokusring." },
  { criterion: "2.5.3 Etikett i navn", status: "pass", note: "Synlige etiketter samsvarer med accessible name." },
  { criterion: "3.1.1 Språk for siden", status: "pass", note: "lang='nb' er satt på html-elementet." },
  { criterion: "3.2.2 Inndata", status: "pass", note: "Skjemainnsending skjer ikke automatisk ved endring." },
  { criterion: "3.3.1 Feilidentifikasjon", status: "pass", note: "Feil i skjema er beskrevet med tekst og aria-describedby." },
  { criterion: "3.3.2 Etiketter eller instruksjoner", status: "pass", note: "Alle skjemafelt har synlige etiketter." },
  { criterion: "4.1.2 Navn, rolle, verdi", status: "pass", note: "Alle UI-komponenter har korrekte ARIA-attributter." },
];

export default function TilgjengelighetPage() {
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
              Tilgjengelighet
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          Tilgjengelighetserklæring
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500 mb-8">
          I samsvar med{" "}
          <a
            href="https://www.uutilsynet.no/regelverk/regelverk/267"
            className="text-brand-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WAD-forskriften
          </a>{" "}
          og WCAG 2.1 AA
        </p>

        <div className="space-y-8 text-slate-700 dark:text-slate-300">
          <section aria-labelledby="a11y-intro">
            <h2 id="a11y-intro" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Mål og standard
            </h2>
            <p className="leading-relaxed">
              Rørlegger Østfold AS har som mål at nettstedet skal oppfylle WCAG 2.1
              på nivå AA. Nettstedet er designet med universell utforming som
              grunnleggende prinsipp – ikke som en ettertanke.
            </p>
          </section>

          <section aria-labelledby="a11y-checklist">
            <h2 id="a11y-checklist" className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              WCAG 2.1 AA – status per kriterium
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-800 dark:text-slate-200">
                      Kriterium
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-800 dark:text-slate-200 w-20">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-800 dark:text-slate-200">
                      Merknad
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {wcagChecklist.map((row) => (
                    <tr key={row.criterion} className="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                      <td className="px-4 py-3 text-slate-800 dark:text-slate-200 font-medium">
                        {row.criterion}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.status === "pass" ? (
                          <span
                            className="inline-block rounded-full bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5"
                            aria-label="Bestått"
                          >
                            ✓ OK
                          </span>
                        ) : (
                          <span
                            className="inline-block rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5"
                            aria-label="Under arbeid"
                          >
                            ⚠ Pågår
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="a11y-testing">
            <h2 id="a11y-testing" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Testing
            </h2>
            <p className="leading-relaxed">
              Nettstedet er testet med:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Tastaturnavigasjon (Tab, Enter, Space, Escape, piltaster)</li>
              <li>NVDA og VoiceOver (skjermlesertest)</li>
              <li>Axe Devtools – automatisert tilgjengelighetssjekk</li>
              <li>Chrome DevTools – kontrastsjekk og Lighthouse</li>
              <li>Zoom opptil 200%</li>
              <li>prefers-reduced-motion – bevegelse deaktivert</li>
            </ul>
          </section>

          <section aria-labelledby="a11y-feedback">
            <h2 id="a11y-feedback" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Tilbakemelding og kontakt
            </h2>
            <p className="leading-relaxed">
              Oppdager du tilgjengelighetsproblemer på nettstedet? Vi ønsker
              tilbakemelding:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                E-post:{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="text-brand-700 hover:underline"
                >
                  {company.email}
                </a>
              </li>
              <li>
                Telefon:{" "}
                <a
                  href={`tel:${company.phone}`}
                  className="text-brand-700 hover:underline"
                >
                  {company.phoneDisplay}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Dersom du ikke er fornøyd med vår respons, kan du klage til{" "}
              <a
                href="https://www.uutilsynet.no"
                className="text-brand-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digitaliseringsdirektoratet (uutilsynet.no)
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
