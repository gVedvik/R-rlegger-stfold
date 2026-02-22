import faqData from "@/data/faq.json";

/**
 * FAQ using native <details>/<summary> elements for accessible accordion
 * behaviour without JavaScript. Keyboard navigation works out of the box.
 */
export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-py bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Vanlige spørsmål
          </span>
          <h2
            id="faq-heading"
            className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
          >
            Ofte stilte spørsmål
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-lg text-slate-600 dark:text-slate-300">
            Finner du ikke svaret du leter etter? Ring oss på{" "}
            <a
              href="tel:+4747600444"
              className="font-semibold text-brand-700 dark:text-brand-300 hover:underline"
            >
              476 00 444
            </a>
            .
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqData.map((item, i) => (
            <details
              key={item.id}
              className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden transition-colors"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-900 dark:text-white hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors marker:hidden list-none"
                aria-expanded="false"
              >
                <span>{item.question}</span>
                {/* Chevron that rotates when open */}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-brand-600 dark:text-brand-300 transition-transform duration-200 group-open:rotate-180"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </summary>

              <div className="px-6 pb-5 pt-1 text-slate-700 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
