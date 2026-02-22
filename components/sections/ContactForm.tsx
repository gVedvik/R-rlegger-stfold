"use client";

import React, { useState, useId } from "react";
import company from "@/data/company.json";

interface FormData {
  name: string;
  phone: string;
  location: string;
  description: string;
  urgent: string;
  preferredTime: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  description?: string;
  consent?: string;
}

const INITIAL: FormData = {
  name: "",
  phone: "",
  location: "",
  description: "",
  urgent: "no",
  preferredTime: "",
  consent: false,
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Skriv inn fullt navn (minst 2 tegn).";
  }
  if (!/^\+?[\d\s\-]{8,}$/.test(data.phone.trim())) {
    errors.phone = "Skriv inn et gyldig telefonnummer.";
  }
  if (!data.description.trim() || data.description.trim().length < 10) {
    errors.description = "Beskriv oppdraget ditt (minst 10 tegn).";
  }
  if (!data.consent) {
    errors.consent = "Du må godta personvernerklæringen for å sende skjemaet.";
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const uid = useId();
  const id = (field: string) => `${uid}-${field}`;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error field
      const firstErrorKey = Object.keys(errs)[0];
      document.getElementById(id(firstErrorKey))?.focus();
      return;
    }

    setStatus("submitting");
    try {
      // TODO: Replace with actual form submission endpoint (e.g. Resend, Formspree, API route)
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section
        id="kontakt-skjema"
        aria-labelledby="form-heading"
        className="section-py bg-white dark:bg-slate-900 transition-colors"
      >
        <div className="container-xl max-w-2xl">
          <div
            role="status"
            aria-live="polite"
            className="rounded-2xl border border-green-200 bg-green-50 px-8 py-12 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                aria-hidden="true"
                className="h-8 w-8 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Takk for din henvendelse!
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Vi tar kontakt med deg innen kort tid. Haster det?{" "}
              <a
                href={`tel:${company.phone}`}
                className="font-semibold text-brand-700 hover:underline"
              >
                Ring oss direkte på {company.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="kontakt-skjema"
      aria-labelledby="form-heading"
      className="section-py bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="container-xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Info */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Kontakt oss
            </span>
            <h2
              id="form-heading"
              className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
            >
              Be om tilbud
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Fyll ut skjemaet, så tar vi kontakt raskt. Haster det? Ring oss
              direkte.
            </p>

            <div className="mt-8 space-y-5">
              <InfoRow icon="phone" label="Telefon">
                <a
                  href={`tel:${company.phone}`}
                  className="text-brand-700 font-semibold hover:underline"
                >
                  {company.phoneDisplay}
                </a>
              </InfoRow>
              <InfoRow icon="mail" label="E-post">
                <a
                  href={`mailto:${company.email}`}
                  className="text-brand-700 font-semibold hover:underline"
                >
                  {company.email}
                </a>
              </InfoRow>
              <InfoRow icon="clock" label="Åpningstider">
                <span>Man–fre: {company.openingHours.weekdays}</span>
              </InfoRow>
              <InfoRow icon="alert" label="Akutt?">
                <span>
                  {company.openingHours.emergency}. Ring{" "}
                  <a
                    href={`tel:${company.phone}`}
                    className="font-semibold text-emergency-700 hover:underline"
                  >
                    {company.phoneDisplay}
                  </a>
                  .
                </span>
              </InfoRow>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Kontaktskjema"
            className="rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 shadow-sm transition-colors"
          >
            {status === "error" && (
              <div
                role="alert"
                className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                Det oppstod en feil. Prøv igjen eller ring oss direkte.
              </div>
            )}

            <div className="space-y-5">
              {/* Name */}
              <Field
                id={id("name")}
                label="Navn *"
                error={errors.name}
              >
                <input
                  id={id("name")}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? `${id("name")}-err` : undefined}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ola Nordmann"
                  className={inputClass(!!errors.name)}
                />
              </Field>

              {/* Phone */}
              <Field
                id={id("phone")}
                label="Telefon *"
                error={errors.phone}
              >
                <input
                  id={id("phone")}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? `${id("phone")}-err` : undefined}
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="476 00 444"
                  className={inputClass(!!errors.phone)}
                />
              </Field>

              {/* Location */}
              <Field id={id("location")} label="Sted / adresse">
                <input
                  id={id("location")}
                  name="location"
                  type="text"
                  autoComplete="street-address"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Fredrikstad"
                  className={inputClass(false)}
                />
              </Field>

              {/* Description */}
              <Field
                id={id("description")}
                label="Beskrivelse av oppdraget *"
                error={errors.description}
              >
                <textarea
                  id={id("description")}
                  name="description"
                  rows={4}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? `${id("description")}-err` : undefined}
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Beskriv hva som skal gjøres…"
                  className={inputClass(!!errors.description) + " resize-none"}
                />
              </Field>

              {/* Urgent */}
              <Field id={id("urgent")} label="Haster det?">
                <select
                  id={id("urgent")}
                  name="urgent"
                  value={form.urgent}
                  onChange={handleChange}
                  className={inputClass(false)}
                >
                  <option value="no">Nei – kan planlegges</option>
                  <option value="yes">Ja – akuttoppdrag</option>
                </select>
              </Field>

              {/* Preferred time */}
              <Field id={id("preferredTime")} label="Ønsket tidspunkt">
                <input
                  id={id("preferredTime")}
                  name="preferredTime"
                  type="text"
                  value={form.preferredTime}
                  onChange={handleChange}
                  placeholder="F.eks. i morgen formiddag"
                  className={inputClass(false)}
                />
              </Field>

              {/* Consent */}
              <div>
                <div className="flex items-start gap-3">
                  <input
                    id={id("consent")}
                    name="consent"
                    type="checkbox"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? `${id("consent")}-err` : undefined}
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus-visible:ring-brand-500"
                  />
                  <label
                    htmlFor={id("consent")}
                    className="text-sm text-slate-700 dark:text-slate-300"
                  >
                    Jeg godtar at Rørlegger Østfold AS lagrer og behandler mine
                    opplysninger for å besvare denne henvendelsen. Les vår{" "}
                    <a
                      href="/personvern"
                      className="text-brand-700 font-medium hover:underline"
                    >
                      personvernerklæring
                    </a>
                    . *
                  </label>
                </div>
                {errors.consent && (
                  <p
                    id={`${id("consent")}-err`}
                    role="alert"
                    className="mt-1.5 ml-7 text-xs text-red-600"
                  >
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-full bg-brand-600 px-6 py-3.5 text-base font-bold text-white hover:bg-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-wait"
            >
              {status === "submitting" ? "Sender…" : "Send forespørsel"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return [
    "block w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0",
    "bg-white dark:bg-slate-900",
    hasError
      ? "border-red-400 dark:border-red-500 focus-visible:ring-red-400"
      : "border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500",
  ].join(" ");
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-800 dark:text-slate-200">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  const icons: Record<string, React.ReactElement> = {
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.59 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.5 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    alert: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  };

  return (
    <div className="flex gap-3">
      <div className="shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 dark:bg-slate-700 text-brand-600 dark:text-brand-300 transition-colors">
        {icons[icon]}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
          {label}
        </p>
        <div className="text-sm text-slate-700 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
}
