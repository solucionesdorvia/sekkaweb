"use client";

import { motion } from "framer-motion";

type Props = {
  index: string;
  label: string;
  align?: "left" | "center";
};

/**
 * Editorial section label: "I — HISTORIA" with a hairline rule.
 */
export function SectionLabel({ index, label, align = "left" }: Props) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      <div className="flex items-center gap-4">
        <span className="caps text-[0.65rem] text-gold/70">{index}</span>
        <span className="block h-px w-10 bg-gold/40" />
        <span className="caps text-[0.65rem] text-gold-light">{label}</span>
      </div>
    </motion.div>
  );
}
