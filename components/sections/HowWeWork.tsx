const steps = [
  {
    number: "01",
    title: "Ta kontakt",
    description:
      "Ring oss eller fyll ut kontaktskjemaet. Vi svarer raskt og avklarer oppdraget.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.59 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.5 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Befaring og vurdering",
    description:
      "Vi kommer til deg, vurderer oppgaven og gir deg en ærlig og tydelig pris – uten overraskelser.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fagmessig utførelse",
    description:
      "Sertifiserte rørleggere utfører arbeidet raskt og ryddig, med kvalitetsmaterialer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="m14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Dokumentasjon og garanti",
    description:
      "Du mottar skriftlig dokumentasjon på utført arbeid, nyttig ved forsikringssaker og fremtidig salg.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section
      id="slik-jobber-vi"
      aria-labelledby="how-heading"
      className="section-py bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
            Prosessen
          </span>
          <h2
            id="how-heading"
            className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
          >
            Slik jobber vi
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-lg text-slate-600 dark:text-slate-300">
            En enkel og transparent prosess – fra første kontakt til ferdig
            dokumentert jobb.
          </p>
        </div>

        <ol
          aria-label="Arbeidsprosess"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <li key={step.number} className="relative flex flex-col">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] right-0 h-px bg-gradient-to-r from-brand-200 dark:from-slate-600 to-transparent"
                />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="relative mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg">
                    {step.icon}
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-800 border-2 border-brand-200 dark:border-slate-600 text-xs font-bold text-brand-700 dark:text-brand-300"
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
