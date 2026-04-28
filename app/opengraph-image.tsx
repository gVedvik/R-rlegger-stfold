import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rørlegger Østfold – sertifiserte rørleggere i hele Østfold";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand colors
const BRAND_BG = "#99f6e4"; // soft teal (matches manifest icon background)
const BRAND_INK = "#0f172a"; // slate-900
const BRAND_ACCENT = "#0d9488"; // brand-600

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${BRAND_BG} 0%, #ccfbf1 60%, #f0fdfa 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <svg
            width="120"
            height="120"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="256" cy="256" r="256" fill={BRAND_BG} />
            <path
              d="M256 92 c-50 75 -90 130 -90 195 a90 90 0 0 0 180 0 c0 -65 -40 -120 -90 -195 z"
              fill={BRAND_INK}
            />
            <path
              d="M70 270 h60 a126 126 0 0 0 252 0 h60 a186 186 0 0 1 -372 0 z"
              fill={BRAND_INK}
            />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: BRAND_INK,
                lineHeight: 1,
                letterSpacing: -1,
              }}
            >
              Rørlegger
            </span>
            <span
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: BRAND_ACCENT,
                lineHeight: 1,
                letterSpacing: -1,
              }}
            >
              Østfold
            </span>
          </div>
        </div>

        {/* Center: tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: BRAND_INK,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            Sertifisert rørlegger i hele Østfold
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#334155",
              fontWeight: 500,
            }}
          >
            Rask respons · Fast pris der det er mulig · Akuttvakt 24/7
          </div>
        </div>

        {/* Bottom: phone + domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            color: BRAND_INK,
            fontWeight: 600,
          }}
        >
          <span>rørleggerøstfold.no</span>
          <span style={{ color: BRAND_ACCENT }}>📞 476 00 444</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
