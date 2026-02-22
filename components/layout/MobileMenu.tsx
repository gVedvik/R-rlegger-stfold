"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/akutt", label: "Akutt rørlegger" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div ref={menuRef} className="lg:hidden">
      <button
        ref={buttonRef}
        aria-label={open ? "Lukk meny" : "Åpne meny"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        {open ? (
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-label="Navigasjonsmeny"
          className="fixed inset-0 z-[60] bg-white dark:bg-slate-950 transition-colors"
        >
          <div className="relative h-full overflow-y-auto">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Lukk meny"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <svg
                aria-hidden="true"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <nav aria-label="Mobil navigasjon" className="flex flex-col p-6 pt-20 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-slate-800 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="tel:+4791234567"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-brand-600 px-6 py-3 text-lg font-bold text-white hover:bg-brand-700 transition-colors"
                >
                  <PhoneIcon />
                  Ring nå: 912 34 567
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
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
