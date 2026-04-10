"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { AudienceProfile } from "@/lib/types/audit";

export default function AudienceProfileSection({
  profile,
}: {
  profile: AudienceProfile;
}) {
  return (
    <SectionWrapper
      label="03 — Audience Intelligence"
      title="Who You're Talking To"
      subtitle={profile.coreDemographic}
    >
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
