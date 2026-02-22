import testimonials from "@/data/testimonials.json";
import company from "@/data/company.json";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`${rating} av 5 stjerner`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#f59e0b" : "none"}
          stroke="#f59e0b"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="anmeldelser"
      aria-labelledby="testimonials-heading"
      className="section-py bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="container-xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
            Hva kundene sier
          </span>
          <h2
            id="testimonials-heading"
            className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
          >
            Kundeuttalelser
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Plassholderanmeldelser – erstattes med ekte kundeuttalelser.
          </p>
        </div>

        {/* Stats bar */}
        <div className="mb-12 flex flex-wrap justify-center gap-10">
          {[
            { label: "Fullførte oppdrag", value: company.socialProof.jobsCompleted },
            { label: "År med erfaring", value: company.socialProof.yearsExperience },
            { label: "Fornøyde kunder", value: company.socialProof.satisfiedCustomers },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-brand-700 dark:text-brand-300">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <ul
          role="list"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Kundeuttalelser"
        >
          {testimonials.map((t) => (
            <li key={t.id}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-6 shadow-sm transition-colors">
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 flex-1">
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-slate-700 text-brand-700 dark:text-brand-300 font-bold text-sm"
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.location}</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          * Disse anmeldelsene er plassholdere og representerer ikke faktiske
          kunder. De erstattes med verifiserte kundeuttalelser.
        </p>
      </div>
    </section>
  );
}
