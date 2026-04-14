/**
 * HeroBackground – sophisticated SaaS-style hero background.
 * Layers: dark teal radial base → blurred gradient orbs.
 * All animation is CSS-only. Respects prefers-reduced-motion (via globals.css).
 * Rendered as a Server Component – zero JS runtime cost.
 */
export default function WaterBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          {/* ── Radial base gradient (colors set via CSS) ── */}
          <radialGradient id="hero-bg" cx="50%" cy="50%" r="75%">
            <stop offset="0%" className="hero-bg-start" />
            <stop offset="100%" className="hero-bg-end" />
          </radialGradient>

          {/* ── Heavy blur for out-of-focus light orbs ── */}
          <filter id="orb-blur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="75" />
          </filter>
        </defs>

        {/* ── 1. Base layer ──────────────────────────────────── */}
        <rect width="1440" height="760" fill="url(#hero-bg)" />

        {/* ── 2. Orb layer (blurred; colors set via CSS) ────── */}
        <g filter="url(#orb-blur)">
          <g className="orb-drift-a">
            <circle cx="220" cy="280" r="340" className="hero-orb-a" />
          </g>
          <g className="orb-drift-b">
            <circle cx="1160" cy="190" r="290" className="hero-orb-b" />
          </g>
          <g className="orb-drift-c">
            <circle cx="760" cy="570" r="250" className="hero-orb-c" />
          </g>
        </g>
      </svg>
    </div>
  );
}
