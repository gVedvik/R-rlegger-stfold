/**
 * WaterBackground – lightweight SVG polygon mesh with CSS animations.
 * Animations are disabled when prefers-reduced-motion is active (via CSS).
 * Rendered as a Server Component (pure SVG markup, no JS runtime).
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
          <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c4a6e" stopOpacity="1" />
            <stop offset="60%" stopColor="#0369a1" stopOpacity="1" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Base gradient fill */}
        <rect width="1440" height="760" fill="url(#bg-grad)" />

        {/* Floating polygon mesh – layer 1 (light) */}
        <polygon
          points="0,0 480,0 280,320"
          fill="rgba(255,255,255,0.04)"
          className="poly-float-1"
          style={{ transformOrigin: "240px 106px" }}
        />
        <polygon
          points="1440,0 960,0 1160,300"
          fill="rgba(255,255,255,0.04)"
          className="poly-float-2"
          style={{ transformOrigin: "1187px 100px" }}
        />
        <polygon
          points="600,0 900,0 780,250"
          fill="rgba(255,255,255,0.05)"
          className="poly-float-3"
          style={{ transformOrigin: "760px 83px" }}
        />

        {/* Floating polygon mesh – layer 2 (accent teal) */}
        <polygon
          points="0,400 300,200 500,500"
          fill="rgba(13,148,136,0.12)"
          className="poly-float-2"
          style={{ transformOrigin: "267px 367px" }}
        />
        <polygon
          points="1440,300 1100,500 1300,760"
          fill="rgba(13,148,136,0.10)"
          className="poly-float-1"
          style={{ transformOrigin: "1280px 520px" }}
        />
        <polygon
          points="400,600 700,400 900,700"
          fill="rgba(14,165,233,0.08)"
          className="poly-float-3"
          style={{ transformOrigin: "667px 567px" }}
        />

        {/* Mid-layer large polygon */}
        <polygon
          points="200,760 0,500 600,760"
          fill="rgba(255,255,255,0.03)"
          className="poly-float-1"
          style={{ transformOrigin: "267px 673px" }}
        />
        <polygon
          points="1440,760 900,600 1440,400"
          fill="rgba(255,255,255,0.03)"
          className="poly-float-2"
          style={{ transformOrigin: "1260px 587px" }}
        />

        {/* Wave paths at the bottom of the hero */}
        <path
          d="M0,620 C240,590 480,650 720,615 C960,580 1200,640 1440,620 L1440,760 L0,760 Z"
          fill="rgba(255,255,255,0.04)"
          className="wave-drift-1"
        />
        <path
          d="M0,670 C200,645 450,695 720,665 C990,635 1240,685 1440,665 L1440,760 L0,760 Z"
          fill="rgba(255,255,255,0.05)"
          className="wave-drift-2"
        />
        <path
          d="M0,710 C280,690 580,725 860,705 C1140,685 1300,715 1440,710 L1440,760 L0,760 Z"
          fill="rgba(255,255,255,0.06)"
          className="wave-drift-1"
          style={{ animationDelay: "-4s" }}
        />
      </svg>
    </div>
  );
}
