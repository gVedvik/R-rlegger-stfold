import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/sections/ContactForm";
import company from "@/data/company.json";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt – RørleggerØstfold",
  description:
    "Ta kontakt med RørleggerØstfold. Ring 476 00 444, send e-post eller fyll ut kontaktskjemaet. Vi er tilgjengelige hverdager 07–17 og på akuttlinje 24/7.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="contact-heading"
        className="bg-brand-900 text-white section-py"
      >
        <div className="container-xl">
          <nav aria-label="Brødsmulesti" className="mb-6">
            <ol className="flex gap-2 text-sm text-brand-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Hjem
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Kontakt
              </li>
            </ol>
          </nav>
          <h1
            id="contact-heading"
            className="text-4xl font-extrabold sm:text-5xl"
          >
            Kontakt oss
          </h1>
          <p className="mt-4 max-w-xl text-lg text-brand-100/80">
            Ring oss, send e-post eller fyll ut skjemaet – vi svarer raskt og
            ærlig.
          </p>

          {/* Quick contact cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href={`tel:${company.phone}`}
              className="group flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 p-4 hover:bg-white/15 transition-colors"
              aria-label={`Ring ${company.phoneDisplay}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.59 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.5 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-brand-200 uppercase tracking-wide">Telefon</p>
                <p className="font-semibold text-white">{company.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="group flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 p-4 hover:bg-white/15 transition-colors"
              aria-label={`E-post til ${company.email}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-brand-200 uppercase tracking-wide">E-post</p>
                <p className="font-semibold text-white break-all">{company.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-brand-200 uppercase tracking-wide">Åpningstider</p>
                <p className="font-semibold text-white">Man–fre {company.openingHours.weekdays}</p>
                <p className="text-xs text-brand-200">{company.openingHours.emergency}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <ContactForm />
    </>
  );
}
