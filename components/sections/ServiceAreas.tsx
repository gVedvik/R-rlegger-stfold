import areas from "@/data/areas.json";
import company from "@/data/company.json";

export default function ServiceAreas() {
  return (
    <section
      id="serviceomrader"
      aria-labelledby="areas-heading"
      className="section-py bg-brand-900 text-white"
    >
      <div className="container-xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text and list */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-300">
              Dekningsområde
            </span>
            <h2
              id="areas-heading"
              className="mt-2 text-3xl font-extrabold sm:text-4xl"
            >
              Vi betjener hele Østfold
            </h2>
            <p className="mt-4 text-lg text-brand-100/80 leading-relaxed">
              Fra Fredrikstad i sør til Indre Østfold i nord – rørleggerteamet
              vårt er alltid i nærheten. Vi prioriterer rask oppmøte og kjenner
              lokale forhold godt.
            </p>

            {/* Primary areas */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-300 mb-4">
                Primærområder
              </h3>
              <ul
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                aria-label="Primære serviceområder"
              >
                {areas.primary.map((area) => (
                  <li
                    key={area.slug}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <PinIcon />
                    {area.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary areas */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-300 mb-4">
                Vi dekker også
              </h3>
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Øvrige serviceområder"
              >
                {areas.secondary.map((area) => (
                  <li key={area.slug}>
                    <span className="inline-block rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium">
                      {area.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                aria-label={`Ring oss: ${company.phoneDisplay}`}
              >
                <PhoneIcon />
                Ring oss: {company.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right: SVG map illustration */}
          <div aria-hidden="true" className="flex justify-center">
            <OstfoldMapIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function OstfoldMapIllustration() {
  return (
    <div className="relative w-full max-w-sm">
      <svg
        viewBox="0 0 300 380"
        className="w-full opacity-90"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustrasjon av Østfold fylke"
      >
        {/* Stylized Østfold shape */}
        <defs>
          <linearGradient id="map-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Fylke shape (stylized) */}
        <path
          d="M60,40 L200,30 L240,80 L250,160 L220,240 L180,300 L120,330 L60,310 L30,250 L20,160 L40,80 Z"
          fill="url(#map-grad)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
        />

        {/* City markers */}
        {[
          { cx: 110, cy: 290, label: "Fredrikstad" },
          { cx: 150, cy: 250, label: "Sarpsborg" },
          { cx: 80, cy: 200, label: "Moss" },
          { cx: 200, cy: 290, label: "Halden" },
          { cx: 180, cy: 150, label: "Askim" },
          { cx: 140, cy: 120, label: "Mysen" },
        ].map((city) => (
          <g key={city.label}>
            <circle
              cx={city.cx}
              cy={city.cy}
              r="5"
              fill="#38bdf8"
              opacity="0.9"
            />
            <circle
              cx={city.cx}
              cy={city.cy}
              r="9"
              fill="#38bdf8"
              opacity="0.25"
            />
            <text
              x={city.cx + 12}
              y={city.cy + 4}
              fontSize="9"
              fill="rgba(255,255,255,0.85)"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
            >
              {city.label}
            </text>
          </g>
        ))}

        {/* Coverage radius circles */}
        <circle
          cx="150"
          cy="200"
          r="110"
          fill="none"
          stroke="rgba(56,189,248,0.15)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Overlay badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center bg-brand-900/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
          <p className="text-3xl font-extrabold text-white">1 time</p>
          <p className="text-sm text-brand-200 mt-1">gjennomsnittlig responstid</p>
        </div>
      </div>
    </div>
  );
}

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#38bdf8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.59 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.5 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
