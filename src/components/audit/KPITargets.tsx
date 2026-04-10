"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { KPITarget } from "@/lib/types/audit";

export default function KPITargetsSection({
  targets,
}: {
  targets: KPITarget[];
}) {
  return (
    <SectionWrapper
      label="06 — Performance Targets"
      title="KPIs That Matter"
      subtitle="Measurable benchmarks based on industry data and audit findings"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {targets.map((target, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="rounded-xl border border-white/5 bg-surface-1 p-5 text-center"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-white/80 mb-3">
              {target.metric}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
              {target.currentEstimate && (
                <>
                  <div>
                    <p className="text-base sm:text-lg font-bold text-white/70 break-words">
                      {target.currentEstimate}
                    </p>
                    <p className="text-[10px] text-white/35 uppercase tracking-wider">
                      Current
                    </p>
                  </div>
                  <span className="text-white/35">&rarr;</span>
                </>
              )}
              <div>
                <p className="text-2xl font-bold text-accent">
                  {target.target}
                </p>
                <p className="text-[10px] text-accent/50 uppercase tracking-wider">
                  Target
                </p>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              {target.benchmark}
            </p>
            <p className="mt-2 text-[10px] font-mono text-white/35">
              {target.timeframe}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-center text-[10px] text-white/35 font-mono uppercase tracking-wider">
        Targets are directional benchmarks, not guarantees. Actual results depend
        on execution, market conditions, and investment level.
      </p>
    </SectionWrapper>
  );
}
