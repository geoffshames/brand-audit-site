"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  label,
  title,
  subtitle,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef(null);

  return (
    <section ref={ref} className={`py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/70">
            {label}
          </p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
