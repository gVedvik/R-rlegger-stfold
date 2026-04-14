"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const THEME_KEY = "theme";
const THEME_EVENT = "theme-change";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getThemeSnapshot(): Theme {
  return resolveInitialTheme();
}

function subscribeTheme(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_KEY) return;
    onStoreChange();
  };

  const onThemeChange = () => onStoreChange();
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    // Only react to system changes if user hasn't set an explicit preference
    if (!localStorage.getItem(THEME_KEY)) onStoreChange();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_EVENT, onThemeChange);
  mq.addEventListener("change", onSystemChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_EVENT, onThemeChange);
    mq.removeEventListener("change", onSystemChange);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(
    subscribeTheme,
    getThemeSnapshot,
    (): Theme => "light",
  );

  // Apply selected mode.
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    window.dispatchEvent(
      new CustomEvent(THEME_EVENT, { detail: { theme: next } }),
    );
  }

  const ariaLabel =
    theme === "dark"
      ? "Mørkt tema er aktivt – klikk for lyst"
      : "Lyst tema er aktivt – klikk for mørkt";
  const title = theme === "dark" ? "Mørkt tema" : "Lyst tema";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ariaLabel}
      title={title}
      suppressHydrationWarning
      className="flex h-9 w-9 items-center justify-center rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

