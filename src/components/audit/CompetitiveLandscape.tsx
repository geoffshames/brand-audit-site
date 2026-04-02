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

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
        <span className="text-xs font-mono uppercase tracking-wider text-white/40">
          Market Density:
        </span>
        <span className={`text-sm font-semibold ${crowdedness.color}`}>
          {crowdedness.label}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {landscape.competitors.map((comp, i) => (
          <motion.div
            key={comp.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group rounded-xl border border-white/5 bg-surface-1 p-5 transition-all hover:border-white/10"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-semibold text-white">
                {comp.name}
              </h3>
              <div className="flex items-center gap-2">
                {comp.instagram && (
                  <a
                    href={comp.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/25 hover:text-accent transition-colors"
                    title={`${comp.name} on Instagram`}
                  >
                    <InstagramIcon />
                  </a>
                )}
                {comp.tiktok && (
                  <a
                    href={comp.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/25 hover:text-accent transition-colors"
                    title={`${comp.name} on TikTok`}
                  >
                    <TikTokIcon />
                  </a>
                )}
                <a
                  href={comp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-white/30 hover:text-accent transition-colors"
                >
                  ↗
                </a>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed mb-4">
              {comp.positioning}
            </p>

            <div className="space-y-2 border-t border-white/5 pt-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-green-400/60">
                  Strength
                </span>
                <p className="text-xs text-white/50">{comp.keyStrength}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-400/60">
                  Weakness
                </span>
                <p className="text-xs text-white/50">{comp.keyWeakness}</p>
              </div>
              <div className="rounded-lg bg-accent/5 border border-accent/10 p-2.5 mt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent/70">
                  Your Opportunity
                </span>
                <p className="text-xs text-accent/80 mt-0.5">
                  {comp.exploitableGap}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
