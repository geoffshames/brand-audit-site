"use client";

import { motion } from "framer-motion";
import type { DeepDive } from "@/lib/types/audit";
import SectionWrapper from "./SectionWrapper";

export default function DeepDiveSection({ deepDive }: { deepDive: DeepDive }) {
  return (
    <SectionWrapper label="Deep Dive" title={deepDive.headline} subtitle={deepDive.subhead}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {deepDive.streams.map((stream, idx) => (
          <motion.article
            key={stream.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-surface-1 border border-white/5 rounded-xl p-7 lg:p-8 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute top-0 left-0 w-1 h-full"
              style={{ background: "var(--color-accent)" }}
            />
            <div className="flex items-baseline gap-3 mb-4">
              <span
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Stream {stream.number}
              </span>
              <span className="text-xs text-white/40">·</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">Layered intel</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2 leading-tight">
              {stream.title}
            </h3>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">{stream.stance}</p>

            <dl className="space-y-3 mb-5">
              {stream.findings.map((f, i) => (
                <div key={i} className="flex flex-col gap-1 pb-3 border-b border-white/5 last:border-0">
                  <dt className="text-[11px] font-mono uppercase tracking-wider text-white/45">
                    {f.label}
                  </dt>
                  <dd className="text-base text-white leading-snug">
                    <span className="font-medium">{f.value}</span>
                    {f.context && (
                      <span className="text-white/55 font-normal"> — {f.context}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {stream.quote && (
              <blockquote
                className="mt-4 pl-4 py-1 border-l-2 text-sm italic text-white/70"
                style={{ borderColor: "var(--color-accent)" }}
              >
                &ldquo;{stream.quote.text}&rdquo;
                <footer className="mt-1 text-xs not-italic text-white/45">
                  — {stream.quote.source}
                  {stream.quote.url && (
                    <>
                      {" "}
                      <a
                        href={stream.quote.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-white/30 hover:decoration-white/60"
                      >
                        source
                      </a>
                    </>
                  )}
                </footer>
              </blockquote>
            )}
          </motion.article>
        ))}
      </div>

      {deepDive.dossierUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-surface-1 border border-white/10 rounded-xl"
        >
          <div className="flex-1">
            <div
              className="text-[11px] font-mono tracking-widest uppercase mb-1"
              style={{ color: "var(--color-accent)" }}
            >
              Companion Document
            </div>
            <div className="text-lg text-white font-medium">
              {deepDive.dossierLabel || "Full Strategic Dossier (Word)"}
            </div>
            <div className="text-sm text-white/55">
              Six research streams, financial model, supplier shortlist, lifecycle playbook, and integrated
              launch plan.
            </div>
          </div>
          <a
            href={deepDive.dossierUrl}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-black transition-transform hover:scale-[1.02]"
            style={{ background: "var(--color-accent)" }}
          >
            Download dossier
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M8 2v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      )}
    </SectionWrapper>
  );
}
