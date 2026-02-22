import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import services from "@/data/services.json";
import company from "@/data/company.json";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Tjenester – rørleggerarbeid i Østfold",
  description:
    "Se alle tjenestene vi tilbyr: tette avløp, varmtvannsbereder, baderomsinventar, rørinspeksjon, varmeanlegg og serviceavtaler. Sertifiserte rørleggere i Østfold.",
  path: "/tjenester",
});

const featureIcons: Record<string, React.ReactElement> = {
  avlop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  varmtvann: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <rect x="5" y="2" width="14" height="18" rx="3" />
      <path d="M9 7h6M9 11h6M12 15v2" />
    </svg>
  ),
  baderom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <path d="M2 12h20v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4Z" />
      <path d="M5 12V5a3 3 0 0 1 6 0v7" />
    </svg>
  ),
  rorinspekkjon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  varme: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <path d="M8 2v4M12 2v4M16 2v4M3 10h18M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
    </svg>
  ),
  kjokkken: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <path d="M12 2c0 6-4 10-4 10s4 4 4 10M8 7c0 0 4 2.5 4 5M5 21h14" />
    </svg>
  ),
  serviceavtale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
};

export default function TjenesterPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="services-page-heading"
        className="bg-brand-900 text-white section-py"
      >
        <div className="container-xl text-center">
          <nav aria-label="Brødsmulesti" className="mb-6">
            <ol className="flex justify-center gap-2 text-sm text-brand-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Hjem
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Tjenester
              </li>
            </ol>
          </nav>
          <h1
            id="services-page-heading"
            className="text-4xl font-extrabold sm:text-5xl"
          >
            Våre tjenester
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-brand-100/80">
            Sertifiserte rørleggere med kompetanse på alle typer
            rørleggerarbeider – fra akutte lekkasjer til planlagte
            baderomsinventar.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section aria-label="Tjenesteliste" className="section-py bg-white dark:bg-slate-900 transition-colors">
        <div className="container-xl">
          <div className="space-y-16">
            {services.map((service, i) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  {service.urgent && (
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emergency-50 dark:bg-red-900/30 border border-emergency-100 dark:border-red-800/50 px-3 py-1 text-xs font-semibold text-emergency-700 dark:text-red-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emergency-500" aria-hidden="true" />
                      Akuttservice tilgjengelig
                    </span>
                  )}
                  <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <ul className="mt-5 space-y-2" aria-label="Inkluderer">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <svg
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href={`tel:${company.phone}`}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700 transition-colors"
                    >
                      Ring oss: {company.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Visual panel */}
                <div
                  className={`flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 p-12 transition-colors ${
                    i % 2 === 1 ? "lg:[direction:ltr]" : ""
                  }`}
                  aria-hidden="true"
                >
                  <div className="text-brand-600">
                    {featureIcons[service.id] ?? featureIcons["serviceavtale"]}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
