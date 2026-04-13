"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { AudienceProfile } from "@/lib/types/audit";

/* ── tiny SVG icons ── */
function GlobeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/* ── Demographics Panel ── */
function DemographicsPanel({ charts }: { charts: NonNullable<AudienceProfile["demographicCharts"]> }) {
  const maxPct = Math.max(...charts.ageDistribution.map((a) => a.percentage));

  return (
    <div className="mb-8 rounded-2xl border border-white/8 bg-surface-1 overflow-hidden">
      {/* header bar */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-xs font-mono uppercase tracking-widest text-white/50">Audience Analytics</span>
      </div>

      <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">

        {/* ── Age Distribution ── */}
        <div className="bg-surface-1 p-5">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent/70 mb-4">Age Distribution</p>
          <div className="space-y-2.5">
            {charts.ageDistribution.map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] text-white/70">{bar.label}</span>
                  <span className="text-[11px] font-semibold text-white">{bar.percentage}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: bar.percentage === maxPct ? "var(--color-accent, #FD3737)" : "rgba(253,55,55,0.35)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(bar.percentage / maxPct) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Gender Split ── */}
        <div className="bg-surface-1 p-5">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent/70 mb-4">Gender Split</p>
          {/* segmented bar */}
          <div className="flex h-3 rounded-full overflow-hidden mb-4 gap-px">
            {charts.genderSplit.map((seg) => (
              <motion.div
                key={seg.label}
                style={{ backgroundColor: seg.color, width: `${seg.percentage}%` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                title={`${seg.label}: ${seg.percentage}%`}
              />
            ))}
          </div>
          <div className="space-y-1.5">
            {charts.genderSplit.map((seg) => (
              <div key={seg.label} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                  <span className="text-[11px] text-white/70">{seg.label}</span>
                </div>
                <span className="text-[11px] font-semibold text-white">{seg.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Top Markets ── */}
        <div className="bg-surface-1 p-5">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent/70 mb-4">
            <GlobeIcon /> <span className="ml-1">Top Markets</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {charts.topMarkets.map((market, i) => (
              <motion.span
                key={market}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                style={{
                  borderColor: i === 0 ? "var(--color-accent, #FD3737)" : "rgba(255,255,255,0.1)",
                  color: i === 0 ? "var(--color-accent, #FD3737)" : "rgba(255,255,255,0.65)",
                  backgroundColor: i === 0 ? "rgba(253,55,55,0.08)" : "transparent",
                }}
              >
                {market}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ── Income + Education ── */}
        <div className="bg-surface-1 p-5">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent/70 mb-4">Profile</p>
          <div className="grid grid-cols-1 gap-3">
            <div className="rounded-lg bg-surface-2 px-3 py-2.5">
              <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 mb-1">Income</p>
              <p className="text-sm font-semibold text-white leading-tight">{charts.incomeLevel}</p>
            </div>
            <div className="rounded-lg bg-surface-2 px-3 py-2.5">
              <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 mb-1">Education</p>
              <p className="text-sm font-semibold text-white leading-tight">{charts.educationLevel}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function AudienceProfileSection({ profile }: { profile: AudienceProfile }) {
  return (
    <SectionWrapper
      label="03 — Audience Intelligence"
      title="Who You're Talking To"
      subtitle={profile.coreDemographic}
    >
      {/* Rich demographics panel — only renders if data is present */}
      {profile.demographicCharts && (
        <DemographicsPanel charts={profile.demographicCharts} />
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-white/5 bg-surface-1 p-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-accent/70 mb-4">
            What Drives Them
          </h3>
          <div className="space-y-2">
            {profile.psychographicDrivers.map((driver, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm text-white/80">{driver}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/5 bg-surface-1 p-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-red-400/70 mb-4">
            Pain Points
          </h3>
          <div className="space-y-2">
            {profile.painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                <span className="text-sm text-white/80">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/5 bg-surface-1 p-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-green-400/70 mb-4">
            What Makes Them Buy
          </h3>
          <div className="space-y-2">
            {profile.purchaseTriggers.map((trigger, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                <span className="text-sm text-white/80">{trigger}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-white/5 bg-surface-1 p-5">
        <h3 className="text-xs font-mono uppercase tracking-wider text-accent/70 mb-4">
          Where They Spend Time
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.onlineBehavior.map((item, i) => (
            <div key={i} className="rounded-lg bg-surface-2 p-3">
              <span className="text-xs font-semibold text-white/80">
                {item.platform}
              </span>
              <p className="mt-1 text-xs text-white/80">{item.behavior}</p>
            </div>
          ))}
        </div>
      </div>

      {profile.voiceOfCustomer.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-white/80 mb-4">
            Voice of Customer
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {profile.voiceOfCustomer.map((item, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-xl border-l-2 border-accent/30 bg-surface-1 p-4"
              >
                <p className="text-sm text-white/80 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <cite className="mt-2 block text-[10px] font-mono uppercase tracking-wider text-white/70 not-italic">
                  — {item.source}
                </cite>
              </motion.blockquote>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
