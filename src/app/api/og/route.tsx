import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const brand = searchParams.get("brand") || "Brand Audit";
  const tagline = searchParams.get("tagline") || "";
  const accent = searchParams.get("accent") || "#FD3737";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar accent line */}
        <div
          style={{
            width: "120px",
            height: "4px",
            backgroundColor: accent,
            borderRadius: "2px",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            {brand}
          </div>
          {tagline && (
            <div
              style={{
                fontSize: 28,
                color: "#999999",
                lineHeight: 1.4,
                maxWidth: "800px",
                display: "flex",
              }}
            >
              {tagline}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#666666",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              display: "flex",
            }}
          >
            Brand &amp; Digital Audit
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: accent,
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: 18,
                color: "#666666",
                letterSpacing: "0.05em",
                display: "flex",
              }}
            >
              Crowd Control Digital
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
