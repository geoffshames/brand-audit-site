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

/* ── Demographic Stat Cards ── */
function DemoStatCards({ charts }: { charts: NonNullable<AudienceProfile["demographicCharts"]> }) {
  // Build age range label from the top two age buckets by percentage
  const sorted = [...charts.ageDistribution].sort((a, b) => b.percentage - a.percentage);
  const coreAge = sorted[0]?.label ?? "—";
  const secondaryAge = sorted[1]?.label ?? "—";

  // Build gender label from the top bucket
  const topGender = [...charts.genderSplit].sort((a, b) => b.percentage - a.percentage)[0];
  const genderLabel = topGender ? `${topGender.percentage}% ${topGender.label.toLowerCase()} skew` : "—";

  // Build geography label: primary + secondary
  const [primary, ...rest] = charts.topMarkets;
  const geoLabel = primary
    ? `${primary}-primary${rest.length > 0 ? ` / ${rest.slice(0, 3).join(", ")} secondary` : ""}`
    : "—";

  const cards = [
    { label: "Age Range", value: `${coreAge} core`, sub: `${secondaryAge} secondary` },
    { label: "Gender", value: genderLabel, sub: null },
    { label: "Geography", value: geoLabel, sub: null },
    { label: "Income", value: charts.incomeLevel, sub: "Disposable, concert/merch-ready" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mb-8 rounded-sm overflow-hidden border border-white/8">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="bg-zinc-900 px-5 py-5 relative"
        >
          {/* accent line */}
          <span
            className="absolute top-0 left-0 w-8 h-[2px]"
            style={{ backgroundColor: "var(--color-accent, #FD3737)" }}
          />
          <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 mb-2 mt-1">
            {card.label}
          </p>
          <p
            className="text-sm font-bold text-white leading-snug"
            style={{ fontFamily: "var(--font-n27, inherit)" }}
          >
            {card.value}
          </p>
          {card.sub && (
            <p className="text-[11px] text-white/40 mt-0.5 leading-tight">{card.sub}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ── Demographics Panel ── */
function DemographicsPanel({ charts }: { charts: NonNullable<AudienceProfile["demographicCharts"]> }) {
  const maxPct = Math.max(...charts.ageDistribution.map((a) => a.percentage));

  return (
    <div className="mb-8 rounded-sm border border-white/8 bg-surface-1 overflow-hidden">
      {/* header bar */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5">
        <span className="h-2 w-2 rounded-none bg-accent" />
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
                <div className="h-1.5 rounded-none bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full"
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
          <div className="flex h-3 overflow-hidden mb-4 gap-px">
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
                  <span className="h-1.5 w-1.5 shrink-0" style={{ backgroundColor: seg.color }} />
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
                className="inline-flex items-center rounded-none border px-2.5 py-0.5 text-[11px] font-semibold"
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
            <div className="rounded-none bg-surface-2 px-3 py-2.5">
              <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 mb-1">Income</p>
              <p className="text-sm font-semibold text-white leading-tight">{charts.incomeLevel}</p>
            </div>
            <div className="rounded-none bg-surface-2 px-3 py-2.5">
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
    >
      {/* Stat cards replacing the plain coreDemographic text block */}
      {profile.demographicCharts && (
        <DemoStatCards charts={profile.demographicCharts} />
      )}

      {/* Rich demographics panel */}
      {profile.demographicCharts && (
        <DemographicsPanel charts={profile.demographicCharts} />
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* ── Psychographic Drivers — pill tags ── */}
        <div className="rounded-none border border-white/5 bg-surface-1 p-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-accent/70 mb-4">
            What Drives Them
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.psychographicDrivers.map((driver, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 rounded-sm px-3 py-1.5 text-sm text-white/80 bg-white/5"
              >
                {driver}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="rounded-none border border-white/5 bg-surface-1 p-5">
          <h3 className="text-xs font-mono uppercase tracking-wider mb-4" style={{ color: "rgba(253,55,55,0.7)" }}>
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
                <span className="mt-1 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: "#FD3737" }} />
                <span className="text-sm text-white/80">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-none border border-white/5 bg-surface-1 p-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-4">
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
                <span className="mt-1 h-1.5 w-1.5 rounded-none shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                <span className="text-sm text-white/80">{trigger}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-none border border-white/5 bg-surface-1 p-5">
        <h3 className="text-xs font-mono uppercase tracking-wider text-accent/70 mb-4">
          Where They Spend Time
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.onlineBehavior.map((item, i) => (
            <div key={i} className="rounded-none bg-surface-2 p-3">
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
                className="rounded-none border-l-2 border-accent/30 bg-surface-1 p-4"
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
