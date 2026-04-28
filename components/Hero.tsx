"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GoldParticles } from "./GoldParticles";

const TAGLINE = "DESHIDRATADOS ARTESANALES";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden volcanic"
    >
      {/* faint vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 50%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <GoldParticles count={42} />

      {/* corner editorial marks */}
      <div className="pointer-events-none absolute inset-6 hidden md:block">
        <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-gold/40" />
        <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-gold/40" />
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold/40" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold/40" />
      </div>

      {/* tiny meta labels */}
      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left lg:block">
        <span className="caps text-[0.6rem] text-gold/50">Est · Argentina</span>
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right lg:block">
        <span className="caps text-[0.6rem] text-gold/50">N° 001 · Origen</span>
      </div>

      {/* central composition — mirrors the package label */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* SEKKA wordmark — real metallic gold artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-[300px] sm:w-[420px] md:w-[560px] lg:w-[640px]"
        >
          <Image
            src="/brand/sekka-wordmark.png"
            alt="SEKKA"
            width={915}
            height={243}
            priority
            className="h-auto w-full select-none"
          />
        </motion.div>

        {/* emblem flanked by hairlines — drawn in */}
        <div className="mt-8 flex items-center md:mt-10">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="block h-px w-20 origin-right bg-gold/70 md:w-32 lg:w-40"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
            className="mx-4 md:mx-6"
          >
            <Image
              src="/brand/sekka-emblem.png"
              alt=""
              width={185}
              height={150}
              className="h-12 w-auto md:h-14 lg:h-16 select-none"
              aria-hidden
            />
          </motion.div>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="block h-px w-20 origin-left bg-gold/70 md:w-32 lg:w-40"
            aria-hidden
          />
        </div>

        {/* letter-by-letter tagline */}
        <h1
          className="mt-6 font-sans text-[0.7rem] md:mt-8 md:text-xs caps text-gold/85"
          aria-label={TAGLINE}
        >
          {TAGLINE.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : 2 + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
              aria-hidden
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* poetic kicker */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-md font-serif text-base md:text-lg italic text-bone/60"
        >
          el tiempo, la luz y el aire — recogidos en cada lámina.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#historia"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.9 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        aria-label="Continuar a Historia"
      >
        <span className="caps text-[0.55rem] text-gold/60">Continuar</span>
        <span className="relative block h-10 w-px overflow-hidden bg-gold/15">
          <span className="absolute left-0 top-0 block h-3 w-px bg-gold animate-scroll-arrow" />
        </span>
      </motion.a>
    </section>
  );
}
