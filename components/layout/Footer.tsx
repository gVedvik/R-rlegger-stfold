import Link from "next/link";
import Image from "next/image";
import company from "@/data/company.json";

const serviceLinks = [
  { href: "/tjenester#avlop", label: "Tett avløp og lekkasje" },
  { href: "/tjenester#varmtvann", label: "Varmtvannsbereder" },
  { href: "/tjenester#baderom", label: "Baderomsinventar" },
  { href: "/tjenester#rorinspekkjon", label: "Rørinspeksjon" },
  { href: "/tjenester#varme", label: "Varmeanlegg" },
  { href: "/tjenester#serviceavtale", label: "Serviceavtale" },
];

const areaLinks = [
  "Fredrikstad",
  "Sarpsborg",
  "Moss",
  "Halden",
  "Askim",
  "Mysen",
];

export default function Footer() {
  return (
    <footer className="relative text-slate-700  dark:text-slate-200 transition-colors">
      {/* Background pattern – inverted in dark mode (white→black) */}
      <div className="relative">
      <div className="container-xl flex justify-center pt-8">
        <Link href="/" aria-label="RørleggerØstfold – til startsiden">
          <Image
            src="/RorleggerOstfoldQualityMark-LightTheme.svg"
            alt="RørleggerØstfold kvalitetsmerke"
            width={260}
            height={260}
            className="h-[260px] w-[260px] dark:hidden"
            priority
          />
          <Image
            src="/RorleggerOstfoldQualityMark-DarkTheme.svg"
            alt="RørleggerØstfold kvalitetsmerke"
            width={260}
            height={260}
            className="hidden h-[260px] w-[260px] dark:block"
            priority
          />
        </Link>
      </div>
      {/* Main footer */}
      <div className="container-xl py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4"
              aria-label="RørleggerØstfold – til startsiden"
            >
              <span className="text-xl font-bold text-white">
                Rørlegger<span className="text-brand-400">Østfold</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-slate-600 dark:text-slate-400">
              Sertifiserte rørleggere med rask respons i hele Østfold. Fast pris
              der det er mulig. Dokumentert kvalitet.
            </p>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors"
              aria-label={`Ring oss: ${company.phoneDisplay}`}
            >
              <PhoneIcon />
              {company.phoneDisplay}
            </a>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Tjenester
            </h2>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Serviceområder
            </h2>
            <ul className="space-y-2">
              {areaLinks.map((area) => (
                <li key={area} className="text-sm">
                  {area}
                </li>
              ))}
              <li className="text-sm text-slate-500 dark:text-slate-500">og resten av Østfold</li>
            </ul>
          </div>

          {/* Contact & hours */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Kontakt og åpningstider
            </h2>
            <address className="not-italic space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${company.phone}`}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </p>
            </address>
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">Man–fre</dt>
                <dd>{company.openingHours.weekdays}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">Lørdag</dt>
                <dd>{company.openingHours.saturday}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">Søndag</dt>
                <dd>{company.openingHours.sunday}</dd>
              </div>
              <div className="flex justify-between gap-4 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                <dt className="text-slate-500 dark:text-slate-400">Akutt</dt>
                <dd className="text-brand-700 dark:text-brand-200 font-semibold">24/7</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} RørleggerØstfold. Org.nr.{" "}
            {company.orgnr}.
          </p>
          <nav aria-label="Juridiske lenker" className="flex gap-4">
            <Link
              href="/personvern"
              className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
            >
              Personvern
            </Link>
            <Link
              href="/tilgjengelighet"
              className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
            >
              Tilgjengelighetserklæring
            </Link>
          </nav>
        </div>
      </div>
      </div>
    </footer>
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
