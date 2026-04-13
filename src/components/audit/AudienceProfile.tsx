"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { AudienceProfile } from "@/lib/types/audit";

/* ─────────────────────────────────────────────
   SVG Donut Chart
───────────────────────────────────────────── */
function DonutChart({ segments }: { segments: { label: string; percentage: number; color: string }[] }) {
  const cx = 50, cy = 50, R = 38, r = 24;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const gap = 1.5; // degrees gap between segments

  // Compute arc paths
  let cumAngle = -90; // start from top
  const paths = segments.map((seg) => {
    const sweep = (seg.percentage / 100) * 360 - gap;
    const startA = cumAngle + gap / 2;
    const endA = startA + sweep;
    cumAngle += (seg.percentage / 100) * 360;

    const x1 = cx + R * Math.cos(toRad(startA));
    const y1 = cy + R * Math.sin(toRad(startA));
    const x2 = cx + R * Math.cos(toRad(endA));
    const y2 = cy + R * Math.sin(toRad(endA));
    const x3 = cx + r * Math.cos(toRad(endA));
    const y3 = cy + r * Math.sin(toRad(endA));
    const x4 = cx + r * Math.cos(toRad(startA));
    const y4 = cy + r * Math.sin(toRad(startA));
    const large = sweep > 180 ? 1 : 0;

    const d = [
      `M ${x1.toFixed(3)} ${y1.toFixed(3)}`,
      `A ${R} ${R} 0 ${large} 1 ${x2.toFixed(3)} ${y2.toFixed(3)}`,
      `L ${x3.toFixed(3)} ${y3.toFixed(3)}`,
      `A ${r} ${r} 0 ${large} 0 ${x4.toFixed(3)} ${y4.toFixed(3)}`,
      `Z`,
    ].join(" ");

    return { ...seg, d };
  });

  return (
    <div className="flex items-center gap-5">
      <svg viewBox="0 0 100 100" className="w-[90px] shrink-0" aria-label="Gender distribution donut chart">
        {paths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            fill={p.color}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          />
        ))}
      </svg>
      {/* Legend */}
      <div className="space-y-2">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 shrink-0" style={{ backgroundColor: seg.color }} />
              <span className="text-[11px] text-white/70">{seg.label}</span>
            </div>
            <span className="text-[11px] font-semibold text-white">{seg.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Demographic Stat Cards (4-up grid)
───────────────────────────────────────────── */
function DemoStatCards({ charts }: { charts: NonNullable<AudienceProfile["demographicCharts"]> }) {
  const sorted = [...charts.ageDistribution].sort((a, b) => b.percentage - a.percentage);
  const coreAge = sorted[0]?.label ?? "—";
  const secondaryAge = sorted[1]?.label ?? "—";

  const topGender = [...charts.genderSplit].sort((a, b) => b.percentage - a.percentage)[0];
  const genderLabel = topGender ? `${topGender.percentage}% ${topGender.label.toLowerCase()} skew` : "—";

  const [primary, ...rest] = charts.topMarkets;

  const cards = [
    { label: "Age Range", value: `${coreAge} core`, sub: `${secondaryAge} secondary` },
    { label: "Gender", value: genderLabel, sub: null },
    {
      label: "Geography",
      value: primary ?? "—",
      sub: rest.length > 0 ? rest.join(", ") : null,
      primaryLabel: true,
    },
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
          <span
            className="absolute top-0 left-0 w-8 h-[2px]"
            style={{ backgroundColor: "var(--color-accent, #FD3737)" }}
          />
          <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 mb-2 mt-1">
            {card.label}
          </p>
          {"primaryLabel" in card && card.primaryLabel ? (
            <>
              <p className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-0.5">Primary</p>
              <p className="text-sm font-bold text-white leading-snug">{card.value}</p>
              {card.sub && (
                <>
                  <p className="text-[8px] font-mono uppercase tracking-widest text-white/30 mt-2 mb-0.5">Secondary</p>
                  <p className="text-[11px] text-white/60 leading-tight">{card.sub}</p>
                </>
              )}
            </>
          ) : (
            <>
              <p className="text-sm font-bold text-white leading-snug">{card.value}</p>
              {card.sub && (
                <p className="text-[11px] text-white/40 mt-0.5 leading-tight">{card.sub}</p>
              )}
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Demographics Analytics Panel
───────────────────────────────────────────── */
function DemographicsPanel({ charts }: { charts: NonNullable<AudienceProfile["demographicCharts"]> }) {
  return (
    <div className="mb-8 rounded-sm border border-white/8 bg-surface-1 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5">
        <span className="h-2 w-2 bg-accent" />
        <span className="text-xs font-mono uppercase tracking-widest text-white/50">Audience Analytics</span>
      </div>

      <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">

        {/* Age Distribution — raw % widths */}
        <div className="bg-surface-1 p-5">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent/70 mb-4">Age Distribution</p>
          <div className="space-y-2.5">
            {charts.ageDistribution.map((bar, i) => (
              <div key={bar.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] text-white/70">{bar.label}</span>
                  <span className="text-[11px] font-semibold text-white">{bar.percentage}%</span>
                </div>
                <div className="h-1.5 bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "rgba(253,55,55,0.35)"
                          : i === 1
                          ? "var(--color-accent, #FD3737)"
                          : "rgba(253,55,55,0.35)",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.08 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gender Split — donut chart */}
        <div className="bg-surface-1 p-5">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent/70 mb-4">Gender Split</p>
          <DonutChart segments={charts.genderSplit} />
        </div>

        {/* Top Markets — PRIMARY / SECONDARY */}
        <div className="bg-surface-1 p-5">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent/70 mb-4">Top Markets</p>
          {charts.topMarkets.length > 0 && (
            <div className="space-y-3">
              <div>
                <p className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-1">Primary</p>
                <p
                  className="text-base font-bold leading-none"
                  style={{ color: "var(--color-accent, #FD3737)" }}
                >
                  {charts.topMarkets[0]}
                </p>
              </div>
              {charts.topMarkets.length > 1 && (
                <div>
                  <p className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-1.5">Secondary</p>
                  <div className="flex flex-wrap gap-1">
                    {charts.topMarkets.slice(1).map((m) => (
                      <span
                        key={m}
                        className="inline-block border border-white/10 px-2 py-0.5 text-[10px] text-white/60"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Profile — Income + Education */}
        <div className="bg-surface-1 p-5">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent/70 mb-4">Profile</p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-surface-2 px-3 py-2.5">
              <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 mb-1">Income</p>
              <p className="text-sm font-semibold text-white leading-tight">{charts.incomeLevel}</p>
            </div>
            <div className="bg-surface-2 px-3 py-2.5">
              <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 mb-1">Education</p>
              <p className="text-sm font-semibold text-white leading-tight">{charts.educationLevel}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Persona Cards
───────────────────────────────────────────── */
function PersonaCards({ personas }: { personas: NonNullable<AudienceProfile["personas"]> }) {
  return (
    <div className="mb-8">
      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4">Audience Personas</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {personas.map((persona, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative bg-zinc-900 border border-white/8 p-5 overflow-hidden"
          >
            {/* accent top-left bar */}
            <span
              className="absolute top-0 left-0 h-[2px] w-10"
              style={{ backgroundColor: "var(--color-accent, #FD3737)" }}
            />
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <p className="text-sm font-bold text-white leading-tight">{persona.name}</p>
                <p className="text-[11px] text-white/40 mt-0.5">{persona.age}</p>
              </div>
              <span
                className="text-[9px] font-mono uppercase tracking-widest border px-1.5 py-0.5 shrink-0"
                style={{ borderColor: "rgba(253,55,55,0.3)", color: "rgba(253,55,55,0.7)" }}
              >
                Persona
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed mb-3">{persona.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {persona.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-2 py-0.5 text-[10px] text-white/50 bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function AudienceProfileSection({ profile }: { profile: AudienceProfile }) {
  return (
    <SectionWrapper
      label="03 — Audience Intelligence"
      title="Who You're Talking To"
    >
      {/* 4 stat cards */}
      {profile.demographicCharts && (
        <DemoStatCards charts={profile.demographicCharts} />
      )}

      {/* Analytics panel: age bars + donut + geo + profile */}
      {profile.demographicCharts && (
        <DemographicsPanel charts={profile.demographicCharts} />
      )}

      {/* Persona cards */}
      {profile.personas && profile.personas.length > 0 && (
        <PersonaCards personas={profile.personas} />
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* Psychographic Drivers — pills */}
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

        {/* Pain Points */}
        <div className="rounded-none border border-white/5 bg-surface-1 p-5">
          <h3
            className="text-xs font-mono uppercase tracking-wider mb-4"
            style={{ color: "rgba(253,55,55,0.7)" }}
          >
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

        {/* Purchase Triggers */}
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
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
                />
                <span className="text-sm text-white/80">{trigger}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Online behavior */}
      <div className="mt-6 rounded-none border border-white/5 bg-surface-1 p-5">
        <h3 className="text-xs font-mono uppercase tracking-wider text-accent/70 mb-4">
          Where They Spend Time
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.onlineBehavior.map((item, i) => (
            <div key={i} className="bg-surface-2 p-3">
              <span className="text-xs font-semibold text-white/80">{item.platform}</span>
              <p className="mt-1 text-xs text-white/80">{item.behavior}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Voice of Customer */}
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
