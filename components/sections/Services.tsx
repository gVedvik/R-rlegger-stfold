import React from "react";
import Link from "next/link";
import services from "@/data/services.json";

const iconMap: Record<string, React.ReactElement> = {
  drain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  "water-heater": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="18" rx="3" />
      <path d="M9 7h6M9 11h6M12 15v2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  ),
  bathroom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12h20v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4Z" />
      <path d="M5 12V5a3 3 0 0 1 6 0v7" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  heating: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2v4M12 2v4M16 2v4M3 10h18M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2c0 6-4 10-4 10s4 4 4 10" />
      <path d="M8 7c0 0 4 2.5 4 5" />
      <path d="M5 21h14" />
    </svg>
  ),
  service: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section
      id="tjenester"
      aria-labelledby="services-heading"
      className="section-py bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="container-xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
            Hva vi tilbyr
          </span>
          <h2
            id="services-heading"
            className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
          >
            Tjenester
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Fra akutte lekkasjer til planlagte oppgraderinger – vi leverer
            fagmessig rørleggerarbeid i hele Østfold.
          </p>
        </div>

        {/* Service grid */}
        <ul
          role="list"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service) => (
            <li key={service.id}>
              <article className="group h-full flex flex-col rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md hover:border-brand-200 dark:hover:border-brand-700 transition-all">
                {/* Icon */}
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-slate-700 text-brand-600 dark:text-brand-300 group-hover:bg-brand-100 dark:group-hover:bg-slate-600 transition-colors"
                  aria-hidden="true"
                >
                  <div className="h-6 w-6">
                    {iconMap[service.icon] ?? iconMap["service"]}
                  </div>
                </div>

                {/* Badge for urgent services */}
                {service.urgent && (
                  <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-emergency-50 dark:bg-red-900/30 px-2.5 py-0.5 text-xs font-semibold text-emergency-700 dark:text-red-300 border border-emergency-100 dark:border-red-800/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-emergency-500" aria-hidden="true" />
                    Akuttservice tilgjengelig
                  </span>
                )}

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>

                <Link
                  href={`/tjenester#${service.id}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-300 hover:text-brand-700 dark:hover:text-brand-200 transition-colors"
                  aria-label={`Les mer om ${service.title}`}
                >
                  Les mer
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA below */}
        <div className="mt-10 text-center">
          <Link
            href="/tjenester"
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-900/30 px-7 py-3 text-sm font-semibold text-brand-700 dark:text-brand-200 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
          >
            Se alle tjenester
          </Link>
        </div>
      </div>
    </section>
  );
}
