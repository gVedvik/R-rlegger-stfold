import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Rørlegger Østfold – sertifiserte rørleggere i hele Østfold";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand colors – matched to the supplied logo
const BRAND_BG = "#a4f4f0"; // teal background from logo
const BRAND_INK = "#0f172a"; // slate-900 / near-black
const BRAND_ACCENT = "#0d9488"; // brand-600

export default async function OpengraphImage() {
  const logoPath = join(process.cwd(), "public/og-logo.png");
  const logo = readFileSync(logoPath);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BRAND_BG,
          display: "flex",
          alignItems: "center",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 470,
            height: 470,
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={470}
            height={470}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Right: tagline + contact */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 60,
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: BRAND_INK,
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            Sertifisert rørlegger
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: BRAND_INK,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              marginBottom: 28,
            }}
          >
            i hele Østfold
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#1e293b",
              fontWeight: 500,
              marginBottom: 36,
              lineHeight: 1.3,
            }}
          >
            Rask respons · Fast pris der det er mulig · Akuttvakt 24/7
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              fontSize: 30,
              fontWeight: 700,
              color: BRAND_INK,
            }}
          >
            <span>rørleggerøstfold.no</span>
            <span style={{ color: BRAND_ACCENT }}>476 00 444</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
