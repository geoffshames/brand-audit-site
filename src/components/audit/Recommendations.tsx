"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { Recommendation } from "@/lib/types/audit";

const categoryColors: Record<string, string> = {
  brand: "bg-purple-500/20 text-purple-400",
  content: "bg-blue-500/20 text-blue-400",
  paid: "bg-orange-500/20 text-orange-400",
  email: "bg-pink-500/20 text-pink-400",
  social: "bg-cyan-500/20 text-cyan-400",
  web: "bg-indigo-500/20 text-indigo-400",
  seo: "bg-green-500/20 text-green-400",
};

const timelineOrder = ["0-30 days", "30-60 days", "60-90 days", "90+ days"];

export default function RecommendationsSection({
  recommendations,
}: {
  recommendations: Recommendation[];
}) {
  const grouped = timelineOrder
    .map((timeline) => ({
      timeline,
      items: recommendations.filter((r) => r.timeline === timeline),
    }))
    .filter((g) => g.items.length > 0);

  const ungrouped = recommendations.filter(
    (r) => !timelineOrder.includes(r.timeline)
  );
  if (ungrouped.length > 0) {
    grouped.push({ timeline: "Additional", items: ungrouped });
  }

  return (
    <SectionWrapper
      label="05 — Recommendations"
      title="What to Do Next"
      subtitle="Specific, prioritized action items organized by timeline"
    >
      <div className="space-y-10">
        {grouped.map((group) => (
          <div key={group.timeline}>
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent/60 mb-4">
              {group.timeline}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {group.items.map((rec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-xl border border-white/5 bg-surface-1 p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                        categoryColors[rec.category] || "bg-white/10 text-white/40"
                      }`}
                    >
                      {rec.category}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white mb-2">
                    {rec.title}
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {rec.description}
                  </p>

                  <div className="border-t border-white/5 pt-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-2 block">
                      Action Items
                    </span>
                    <ul className="space-y-1.5">
                      {rec.actionItems.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-white/50"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-accent/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
