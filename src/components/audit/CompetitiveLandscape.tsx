"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { CompetitiveLandscape } from "@/lib/types/audit";

const crowdednessLabels = {
  low: { label: "Low Competition", color: "text-green-400" },
  moderate: { label: "Moderate Competition", color: "text-yellow-400" },
  high: { label: "High Competition", color: "text-orange-400" },
  saturated: { label: "Saturated Market", color: "text-red-400" },
};

const threatConfig = {
  high:   { label: "High Threat",   bg: "bg-red-500/10",    border: "border-red-500/30",    text: "text-red-400"    },
  medium: { label: "Med Threat",    bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-400" },
  low:    { label: "Low Threat",    bg: "bg-green-500/10",  border: "border-green-500/30",  text: "text-green-400"  },
};

function InstagramIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.8a8.2 8.2 0 0 0 4.76 1.52V6.87a4.83 4.83 0 0 1-1-.18z" />
    </svg>
  );
}

export default function CompetitiveLandscapeSection({
  landscape,
}: {
  landscape: CompetitiveLandscape;
}) {
  const crowdedness = crowdednessLabels[landscape.marketCrowdedness];

  return (
    <SectionWrapper
      label="02 — Competitive Analysis"
      title="Competitive Landscape"
      subtitle={landscape.landscapeSummary}
    >
      <div className="mb-8 flex items-center gap-3">
        <span className="text-xs font-mono uppercase tracking-wider text-white/50">
          Market Density:
        </span>
        <span className={`text-sm font-semibold ${crowdedness.color}`}>
          {crowdedness.label}
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {landscape.competitors.map((comp, i) => {
          const threat = comp.threatLevel ? threatConfig[comp.threatLevel] : null;

          return (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col rounded-xl border border-white/8 bg-surface-1 p-5 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_24px_rgba(253,55,55,0.06)] hover:scale-[1.01]"
            >
              {/* ── Header row: name + threat badge + link ── */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-white leading-tight">
                  {comp.name}
                </h3>
                <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                  {threat && (
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${threat.bg} ${threat.border} ${threat.text}`}
                    >
                      {threat.label}
                    </span>
                  )}
                  <a
                    href={comp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/25 hover:text-accent transition-colors"
                    title={`${comp.name} website`}
                  >
                    ↗
                  </a>
                </div>
              </div>

              {/* ── Social stats row ── */}
              <div className="flex items-center gap-3 mb-3">
                {comp.instagram && (
                  <a
                    href={comp.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white/35 hover:text-accent transition-colors"
                  >
                    <InstagramIcon />
                    {comp.instagramFollowers ? (
                      <span className="text-[11px] text-white/50">{comp.instagramFollowers}</span>
                    ) : null}
                  </a>
                )}
                {comp.tiktok ? (
                  <a
                    href={comp.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white/35 hover:text-accent transition-colors"
                  >
                    <TikTokIcon />
                    {comp.tiktokFollowers ? (
                      <span className="text-[11px] text-white/50">{comp.tiktokFollowers}</span>
                    ) : null}
                  </a>
                ) : comp.tiktokFollowers ? (
                  <span className="flex items-center gap-1 text-white/25">
                    <TikTokIcon />
                    <span className="text-[11px]">{comp.tiktokFollowers}</span>
                  </span>
                ) : null}
              </div>

              {/* ── Positioning blurb ── */}
              <p className="text-xs text-white/60 leading-relaxed mb-4 flex-1">
                {comp.positioning}
              </p>

              {/* ── Strength / Weakness ── */}
              <div className="space-y-2 border-t border-white/5 pt-3 mb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-green-400/60">
                    Strength
                  </span>
                  <p className="text-xs text-white/65 mt-0.5">{comp.keyStrength}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-red-400/60">
                    Weakness
                  </span>
                  <p className="text-xs text-white/65 mt-0.5">{comp.keyWeakness}</p>
                </div>
              </div>

              {/* ── Exploitable Gap callout ── */}
              <div className="rounded-lg border-l-2 border-accent bg-accent/5 px-3 py-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent/80">
                  ↑ Exploitable Gap
                </span>
                <p className="text-xs text-accent/90 mt-1 leading-relaxed font-medium">
                  {comp.exploitableGap}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
