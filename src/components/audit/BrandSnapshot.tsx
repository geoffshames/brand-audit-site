"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { BrandSnapshot } from "@/lib/types/audit";

const scoreColors = {
  strong: "text-green-400 bg-green-500/10 border-green-500/20",
  moderate: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  weak: "text-red-400 bg-red-500/10 border-red-500/20",
};

export default function BrandSnapshotSection({
  snapshot,
}: {
  snapshot: BrandSnapshot;
}) {
  return (
    <SectionWrapper
      label="01 — Brand Audit"
      title="Brand Snapshot"
      subtitle={snapshot.positioning}
    >
      <div className="mb-8 md:mb-12 rounded-xl border border-white/5 bg-surface-1 p-4 sm:p-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-white/40">
            Digital Presence
          </span>
          <span
            className={`rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-wider ${
              scoreColors[snapshot.digitalPresenceScore]
            }`}
          >
            {snapshot.digitalPresenceScore}
          </span>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          {snapshot.digitalPresenceReasoning}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-white/5 bg-surface-1 p-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-accent/70 mb-4">
            Voice &amp; Tone
          </h3>
          <div className="space-y-3">
            {snapshot.voiceAndTone.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-sm font-semibold text-white">
                  {item.adjective}
                </span>
                <p className="mt-0.5 text-xs text-white/40 leading-relaxed">
                  {item.evidence}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/5 bg-surface-1 p-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-accent/70 mb-4">
            Visual Identity
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            {snapshot.visualIdentity}
          </p>

          <h3 className="mt-6 text-xs font-mono uppercase tracking-wider text-accent/70 mb-3">
            Key Offerings
          </h3>
          <div className="flex flex-wrap gap-2">
            {snapshot.keyOfferings.map((offering, i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 bg-surface-2 px-3 py-1 text-xs text-white/60"
              >
                {offering}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-green-400/70 mb-4">
            Strengths
          </h3>
          <div className="space-y-3">
            {snapshot.strengths.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-green-500/10 bg-green-500/5 p-4"
              >
                <h4 className="text-sm font-semibold text-green-400">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-white/50 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-red-400/70 mb-4">
            Gaps &amp; Opportunities
          </h3>
          <div className="space-y-3">
            {snapshot.gaps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-red-500/10 bg-red-500/5 p-4"
              >
                <h4 className="text-sm font-semibold text-red-400">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-white/50 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
