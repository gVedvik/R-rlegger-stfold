import type { Metadata } from "next";
import Link from "next/link";
import company from "@/data/company.json";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Akutt rørlegger i Østfold – Ring 24/7",
  description:
    "Trenger du en akutt rørlegger i Østfold? Vi er tilgjengelige hele døgnet for vannlekkasjer, tette avløp og andre akuttoppdrag. Ring 476 00 444 nå.",
  path: "/akutt",
});

const emergencySteps = [
  {
    title: "Steng vannet umiddelbart",
    description:
      "Finn hovedstengekranen (vanligvis i kjeller, under kjøkkenbenken eller i teknisk rom) og steng vannet. Dreie med klokken (ratt) eller legg spaken på tvers av røret.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
        <line x1="12" y1="2" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Slå av strøm i berørte rom",
    description:
      "Dersom vann kan ha kommet i kontakt med elektriske installasjoner, slå av sikringen for det aktuelle rommet i sikringsskapet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Ring oss nå",
    description:
      "Ta kontakt med oss på akuttlinjen. Vi er tilgjengelige 24/7 og tilstreber å være hos deg innen 1–2 timer i Østfold.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.59 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.5 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Dokumenter skaden",
    description:
      "Ta bilder av skaden og berørte områder for eventuell forsikringssak. Vår rørlegger vil hjelpe deg med faglig dokumentasjon.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
];

export default function AkuttPage() {
  return (
    <>
      {/* Hero – emergency call-first design */}
      <section
        aria-labelledby="emergency-heading"
        className="bg-emergency-700 text-white"
      >
        <div className="container-xl section-py text-center">
          <nav aria-label="Brødsmulesti" className="mb-6">
            <ol className="flex justify-center gap-2 text-sm text-red-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Hjem
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Akutt rørlegger
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            Tilgjengelig 24/7
          </div>

          <h1
            id="emergency-heading"
            className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
          >
            Akutt rørlegger i Østfold
          </h1>
          <p className="mt-5 max-w-lg mx-auto text-xl text-red-100">
            Vannlekkasje? Tett avløp? Brudd på rør? Vi er på vei.
          </p>

          <a
            href={`tel:${company.phone}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-extrabold text-emergency-700 shadow-lg hover:bg-red-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emergency-700"
            aria-label={`Ring akuttlinjen nå: ${company.phoneDisplay}`}
          >
            <svg
              aria-hidden="true"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.59 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.5 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Ring nå: {company.phoneDisplay}
          </a>

          <p className="mt-4 text-sm text-red-200">
            Normalt hos deg innen 1–2 timer i Østfold
          </p>
        </div>
      </section>

      {/* What to do */}
      <section
        aria-labelledby="emergency-steps-heading"
        className="section-py bg-white dark:bg-slate-900 transition-colors"
      >
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2
              id="emergency-steps-heading"
              className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
            >
              Hva du skal gjøre ved vannlekkasje
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-lg text-slate-600 dark:text-slate-300">
              Følg disse stegene mens du venter på oss – det kan begrense
              skadeomfanget betraktelig.
            </p>
          </div>

          <ol
            aria-label="Steg ved akutt vannlekkasje"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {emergencySteps.map((step, i) => (
              <li key={step.title} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emergency-100 text-emergency-700">
                    {step.icon}
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full bg-emergency-600 text-white text-xs font-bold"
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Repeated CTA */}
      <section
        aria-label="Ring akuttlinjen"
        className="bg-slate-900 text-white section-py"
      >
        <div className="container-xl text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl mb-2">
            Ikke vent – skader sprer seg raskt
          </h2>
          <p className="text-slate-400 mb-8">
            Akuttlinjen er åpen hele døgnet, alle dager.
          </p>
          <a
            href={`tel:${company.phone}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-10 py-4 text-lg font-bold text-white hover:bg-brand-700 transition-colors pulse-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.59 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.5 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Ring {company.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
