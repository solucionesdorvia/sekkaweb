"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Slow, drifting gold motes layered behind the hero. Deterministic positions
 * (seeded by index) so SSR and client agree.
 */
export function GoldParticles({ count = 36 }: { count?: number }) {
  const particles = useMemo(() => {
    const rand = (seed: number) => {
      const x = Math.sin(seed * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }).map((_, i) => {
      const x = rand(i + 1) * 100;
      const y = rand(i + 100) * 100;
      const size = 1 + rand(i + 200) * 2.4;
      const duration = 14 + rand(i + 300) * 16;
      const delay = rand(i + 400) * -duration;
      const driftX = (rand(i + 500) - 0.5) * 60;
      const driftY = (rand(i + 600) - 0.5) * 80;
      const opacity = 0.25 + rand(i + 700) * 0.55;
      return { x, y, size, duration, delay, driftX, driftY, opacity, i };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.i}
          className="absolute rounded-full bg-gold-light"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 4}px ${p.size}px rgba(240,208,128,0.18)`,
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
