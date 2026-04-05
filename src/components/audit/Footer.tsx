"use client";

import { motion } from "framer-motion";

export default function Footer({ brandName }: { brandName: string }) {
  const subject = encodeURIComponent(`${brandName} x Crowd Control`);

  return (
    <footer className="border-t border-white/5 py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white mb-4">
            Ready to act on these insights?
          </h2>
          <p className="max-w-lg mx-auto text-sm sm:text-base text-white/50 leading-relaxed mb-8">
            This audit is just the beginning. Let&apos;s turn these findings into a
            strategy that moves {brandName} forward.
          </p>
          <a
            href={`mailto:info@crowdcontroldigital.com?subject=${subject}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-medium text-white transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white/30">
            Crowd Control Digital
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/15">
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
