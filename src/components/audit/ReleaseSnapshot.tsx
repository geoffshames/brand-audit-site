"use client";

import { motion } from "framer-motion";
import type { ReleaseSnapshot } from "@/lib/types/audit";
import SectionWrapper from "./SectionWrapper";

const tierConfig = {
  breakout: {
    label: "Breakout",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    dot: "bg-emerald-400",
  },
  solid: {
    label: "Solid",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    dot: "bg-blue-400",
  },
  underperformed: {
    label: "Underperformed",
    color: "text-white/40",
    bg: "bg-white/5",
    border: "border-white/10",
    dot: "bg-white/30",
  },
};

function ReleaseCard({
  entry,
  index,
  isCompetitor = false,
}: {
  entry: import("@/lib/types/audit").ReleaseEntry;
  index: number;
  isCompetitor?: boolean;
}) {
  const tier = tierConfig[entry.performanceTier];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl border bg-surface-1 p-6 sm:p-8 ${
        isCompetitor
          ? "border-white/10"
          : "border-accent/20"
      }`}
    >
      {!isCompetitor && (
        <div className="absolute top-0 left-0 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
      )}

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            {isCompetitor ? (entry.label ?? "Competitor") : "Sumerian Records"}
          </p>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
            {entry.artistName}
          </h3>
          <p className="mt-0.5 text-base text-white/60 italic">{entry.releaseTitle}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border ${tier.color} ${tier.bg} ${tier.border}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${tier.dot}`} />
            {tier.label}
          </span>
          <span className="font-mono text-[10px] text-white/35 uppercase tracking-wider">
            {entry.releaseDate}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm text-white/70 leading-relaxed">
        {entry.marketingAnalysis}
      </p>
    </motion.div>
  );
}

export default function ReleaseSnapshotSection({
  snapshot,
}: {
  snapshot: ReleaseSnapshot;
}) {
  return (
    <SectionWrapper
      label="Release Intelligence"
      title="Recent Release Landscape"
      subtitle="An analytical snapshot of Sumerian's most significant recent releases — and how they stack up against the competition."
    >
      <div className="space-y-10">
        {/* Sumerian Releases */}
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
            Sumerian Records — Recent Releases
          </p>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            {snapshot.labelReleases.map((r, i) => (
              <ReleaseCard key={i} entry={r} index={i} isCompetitor={false} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
            vs. Competition
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Competitor Releases */}
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Competitor Releases — Same Period
          </p>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            {snapshot.competitorReleases.map((r, i) => (
              <ReleaseCard key={i} entry={r} index={i} isCompetitor={true} />
            ))}
          </div>
        </div>

        {/* Synthesis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
            Intelligence Synthesis
          </p>
          <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
            {snapshot.synthesis}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
