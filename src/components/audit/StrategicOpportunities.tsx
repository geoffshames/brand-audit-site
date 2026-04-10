"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { StrategicOpportunity } from "@/lib/types/audit";

const impactColors = {
  high: "bg-green-500/20 text-green-400",
  medium: "bg-yellow-500/20 text-yellow-400",
  low: "bg-white/10 text-white/80",
};

const effortColors = {
  high: "bg-red-500/20 text-red-400",
  medium: "bg-yellow-500/20 text-yellow-400",
  low: "bg-green-500/20 text-green-400",
};

export default function StrategicOpportunitiesSection({
  opportunities,
}: {
  opportunities: StrategicOpportunity[];
}) {
  return (
    <SectionWrapper
      label="04 — Strategic Opportunities"
      title="Where to Win"
      subtitle="Ranked by potential impact on the business"
    >
      <div className="space-y-4">
        {opportunities.map((opp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group rounded-xl border border-white/5 bg-surface-1 p-4 sm:p-6 transition-all hover:border-accent/20"
          >
            {/* Mobile: badges sit at top; Desktop: badges sit at right */}
            <div className="flex gap-2 mb-3 sm:hidden">
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${impactColors[opp.impact]}`}
              >
                {opp.impact} impact
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${effortColors[opp.effort]}`}
              >
                {opp.effort} effort
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {opp.title}
                  </h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed sm:pl-10">
                  {opp.reasoning}
                </p>
              </div>

              <div className="hidden sm:flex gap-2 shrink-0">
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${impactColors[opp.impact]}`}
                >
                  {opp.impact} impact
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${effortColors[opp.effort]}`}
                >
                  {opp.effort} effort
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
