/**
 * HeroBackground – sophisticated SaaS-style hero background.
 * Layers: dark teal radial base → blurred gradient orbs → perspective grid.
 * All animation is CSS-only. Respects prefers-reduced-motion (via globals.css).
 * Rendered as a Server Component – zero JS runtime cost.
 */
export default function WaterBackground() {
  const vp = { x: 720, y: 80 } as const; // vanishing point
  const H = 680; // y-range from vp to bottom edge (760 - 80)

  // Vertical perspective lines: each runs from a bottom-x to the vanishing point
  const vLineXs = [
    -400, -240, -80, 80, 240, 400, 560, 720,
    880, 1040, 1200, 1360, 1520, 1680, 1840,
  ];

  // Horizontal lines: t ∈ (0, 1] where 1 = bottom edge, 0 = vanishing point.
  // Values clustered logarithmically so lines crowd near the horizon.
  const hLineTs = [
    1.0, 0.85, 0.71, 0.59, 0.49, 0.40,
    0.32, 0.26, 0.21, 0.17, 0.13, 0.10, 0.07,
  ];

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

          {/* ── Grid fade: transparent near VP, fully opaque at bottom ── */}
          <linearGradient id="grid-v-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="22%"  stopColor="white" stopOpacity="0.25" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="grid-mask">
            <rect width="1440" height="760" fill="url(#grid-v-fade)" />
          </mask>
        </defs>

        {/* ── 1. Base layer ──────────────────────────────────── */}
        <rect width="1440" height="760" fill="url(#hero-bg)" />

        {/* ── 2. Orb layer (blurred, behind grid) ───────────── */}
        <g filter="url(#orb-blur)">
          {/* Soft Teal – primary brand accent */}
          <g className="orb-drift-a">
            <circle cx="220" cy="280" r="340" fill="#64ffda" fillOpacity="0.13" />
          </g>
          {/* Muted Lavender – cool futuristic contrast */}
          <g className="orb-drift-b">
            <circle cx="1160" cy="190" r="290" fill="#9D8CFF" fillOpacity="0.11" />
          </g>
          {/* Warm Sand – organic warmth to balance cool tones */}
          <g className="orb-drift-c">
            <circle cx="760" cy="570" r="250" fill="#E5D3B0" fillOpacity="0.09" />
          </g>
        </g>

        {/* ── 3. Perspective grid ───────────────────────────── */}
        {/* Outer <g> holds the mask; inner <g> drifts horizontally */}
        <g mask="url(#grid-mask)">
          <g
            className="grid-drift"
            stroke="rgba(100,255,218,0.14)"
            strokeWidth="0.6"
            fill="none"
          >
            {/* Vertical lines – all converge at the vanishing point */}
            {vLineXs.map((x) => (
              <line key={`v${x}`} x1={x} y1={760} x2={vp.x} y2={vp.y} />
            ))}

            {/* Horizontal lines – perspective-spaced, width proportional to t */}
            {hLineTs.map((t) => {
              const y    = vp.y + H * t;
              const xOff = 720 * t;
              return (
                <line
                  key={`h${t}`}
                  x1={vp.x - xOff}
                  y1={y}
                  x2={vp.x + xOff}
                  y2={y}
                />
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
}
