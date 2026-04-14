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
          {/* ── Deep charcoal-to-teal radial gradient ── */}
          <radialGradient id="hero-bg" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#042424" />
            <stop offset="100%" stopColor="#0D1717" />
          </radialGradient>

          {/* ── Heavy blur for out-of-focus light orbs ── */}
          <filter id="orb-blur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="75" />
          </filter>
        </defs>

        {/* ── 1. Base layer ──────────────────────────────────── */}
        <rect width="1440" height="760" fill="url(#hero-bg)" />

        {/* ── 2. Orb layer (blurred) ────────────────────────── */}
        <g filter="url(#orb-blur)">
          {/* Soft Teal – primary brand accent */}
          <g className="orb-drift-a">
            <circle cx="220" cy="280" r="340" fill="#64ffda" fillOpacity="0.13" />
          </g>
          {/* White – matches site background for subtle contrast */}
          <g className="orb-drift-b">
            <circle cx="1160" cy="190" r="290" fill="#ffffff" fillOpacity="0.11" />
          </g>
          {/* Warm Sand – organic warmth to balance cool tones */}
          <g className="orb-drift-c">
            <circle cx="760" cy="570" r="250" fill="#E5D3B0" fillOpacity="0.09" />
          </g>
        </g>
      </svg>
    </div>
  );
}
