import WaterBackground from "@/components/animations/WaterBackground";
import company from "@/data/company.json";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* Animated water background */}
      <WaterBackground />

      {/* Content */}
      <div className="relative z-10 container-xl py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-8 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          Akuttvakt tilgjengelig 24/7
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Din lokale rørlegger i Østfold – rask, pålitelig og sertifisert
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-100/90 sm:text-xl">
          Vi løser alt fra tette avløp til baderomsinventar. Sertifiserte
          fagfolk med fast pris der det er mulig – tilgjengelig i hele Østfold.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2.5 rounded-full bg-emergency-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-emergency-700 transition-colors pulse-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800"
            aria-label={`Ring oss nå: ${company.phoneDisplay}`}
          >
            <PhoneIcon />
            Ring nå: {company.phoneDisplay}
          </a>
          <a
            href="/kontakt"
            className="flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800"
          >
            Be om tilbud
            <ArrowIcon />
          </a>
        </div>

        {/* Trust signals */}
        <ul
          aria-label="Tillitssignaler"
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-brand-100/80"
        >
          {[
            "Sertifisert fagkompetanse",
            "Fast pris der det er mulig",
            `Rask respons – normalt ${company.responseTime}`,
            "Dokumentert kvalitet",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Utforsk</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-bounce"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.59 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.5 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
