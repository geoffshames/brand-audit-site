"use client";

import { motion } from "framer-motion";
import type { CampaignBlueprint } from "@/lib/types/audit";
import SectionWrapper from "./SectionWrapper";

export default function CampaignBlueprintSection({
  blueprint,
}: {
  blueprint: CampaignBlueprint;
}) {
  return (
    <SectionWrapper
      label="Campaign Blueprint"
      title={blueprint.campaignTitle}
      subtitle={blueprint.campaignSummary}
    >
      <div className="space-y-12">
        {/* Artist callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-start gap-6 rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8"
        >
          <div className="flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
              Campaign Subject
            </p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
              {blueprint.artist}
            </h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              {blueprint.artistDescription}
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              CCD Priority Artist
            </span>
          </div>
        </motion.div>

        {/* Content Pillars + Platform Strategy */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-surface-1 p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
              Content Pillars
            </p>
            <ul className="mt-4 space-y-2">
              {blueprint.contentPillars.map((pillar, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-white/80">{pillar}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-surface-1 p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
              Platform Strategy
            </p>
            <ul className="mt-4 space-y-3">
              {blueprint.platformStrategy.map((ps, i) => (
                <li key={i}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white">
                    {ps.platform}
                  </p>
                  <p className="mt-0.5 text-sm text-white/60">{ps.strategy}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 8-Week Timeline */}
        <div>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
            8-Week Execution Framework
          </p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent hidden sm:block" />
            <div className="space-y-4">
              {blueprint.weeks.map((week, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="sm:pl-12 relative"
                >
                  {/* Week dot */}
                  <div className="absolute left-0 top-3 h-8 w-8 rounded-full border border-accent/30 bg-surface-1 items-center justify-center text-xs font-bold text-accent hidden sm:flex">
                    {week.week}
                  </div>
                  <div className="rounded-xl border border-white/10 bg-surface-1 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent sm:hidden">
                        Wk {week.week}
                      </span>
                      <h4 className="text-sm font-semibold text-white">
                        {week.theme}
                      </h4>
                    </div>
                    <ul className="space-y-1">
                      {week.actions.map((action, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/30" />
                          <span className="text-xs text-white/60 leading-relaxed">
                            {action}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Creator Activation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-surface-1 p-6 sm:p-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
            Creator Activation Strategy
          </p>
          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            {blueprint.creatorActivation}
          </p>
        </motion.div>

        {/* Key Milestones */}
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
            Key Milestones
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {blueprint.keyMilestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-surface-1 p-4 flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent text-[10px] font-bold">
                  {i + 1}
                </span>
                <span className="text-sm text-white/75">{milestone}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Teaser CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent p-8 sm:p-12"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
            There&apos;s More Where This Came From
          </p>
          <p className="mt-4 text-lg sm:text-xl font-semibold text-white max-w-2xl mx-auto leading-relaxed">
            {blueprint.teaser}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@crowdcontroldigital.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Work With CCD
            </a>
            <span className="text-xs text-white/40 uppercase tracking-wider">
              info@crowdcontroldigital.com
            </span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
