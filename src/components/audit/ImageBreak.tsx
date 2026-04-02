"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImageBreak({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative h-[50vh] overflow-hidden my-4">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-0/50 via-transparent to-surface-0/50" />
    </div>
  );
}
