"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { ServiceRoadmap } from "@/lib/types/audit";

export default function ServiceRoadmapSection({
  roadmap,
}: {
  roadmap: ServiceRoadmap[];
}) {
  return (
    <SectionWrapper
      label="07 — Service Roadmap"
      title="The Path Forward"
      subtitle="A phased approach to executing on the opportunities identified in this audit"
    >
      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />

        <div className="space-y-6">
          {roadmap.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex gap-5"
            >
              <div className="hidden md:flex flex-col items-center shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent/30 bg-surface-0 text-xs font-bold text-accent">
                  {i + 1}
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-white/5 bg-surface-1 p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent/50">
                    {phase.phase} — {phase.duration}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  {phase.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {phase.deliverables.map((del, j) => (
                    <span
                      key={j}
                      className="rounded-full border border-accent/10 bg-accent/5 px-3 py-1 text-xs text-accent/70"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
