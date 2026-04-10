"use client";

import { motion } from "framer-motion";
import type { AuditData } from "@/lib/types/audit";

export default function Hero({ audit }: { audit: AuditData }) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
      {audit.images?.hero1 && (
        <div className="absolute inset-0">
          <img
            src={audit.images.hero1}
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-surface-0/60 to-transparent" />
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 pb-10 sm:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-[clamp(0.65rem,1.5vw,1rem)] uppercase tracking-[0.2em] text-accent/70"
        >
          Brand &amp; Digital Audit
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-3 text-[clamp(2.5rem,10vw,9rem)] font-bold uppercase leading-[0.9] tracking-tight text-white"
        >
          {audit.intake.brandName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3"
        >
          <span className="text-[clamp(0.65rem,1.2vw,0.9rem)] uppercase tracking-[0.2em] text-white/80">
            Prepared by
          </span>
          <span className="text-[clamp(0.65rem,1.2vw,0.9rem)] font-semibold uppercase tracking-[0.15em] text-white/70">
            Crowd Control Digital
          </span>
        </motion.div>

        {audit.tagline && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed"
          >
            {audit.tagline}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 sm:mt-12 flex items-center gap-3 text-white/35"
        >
          <div className="h-8 w-px bg-white/20" />
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
