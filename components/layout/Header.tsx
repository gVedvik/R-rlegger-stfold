import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/akutt", label: "Akutt rørlegger" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
      <div className="container-xl">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="RørleggerØstfold – til startsiden"
          >
            <Image
              src="/RorleggerOstfoldLogo-horisontal-black.svg"
              alt="RørleggerØstfold"
              width={220}
              height={40}
              className="h-16 w-auto dark:hidden"
              priority
            />
            <Image
              src="/RorleggerOstfoldLogo-horisontal-white.svg"
              alt="RørleggerØstfold"
              width={220}
              height={40}
              className="hidden h-16 w-auto dark:block"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Hovednavigasjon"
            className="hidden lg:flex items-center gap-1 rounded-full bg-brand-50 dark:bg-slate-800/70 px-2 py-1 transition-colors"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-700 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop: theme toggle + phone CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="tel:+4791234567"
              className="flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-700 transition-colors pulse-ring"
              aria-label="Ring oss nå: 912 34 567"
            >
              <PhoneIcon />
              Ring nå: 912 34 567
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
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
