"use client";

import { motion } from "framer-motion";
import { WHATSAPP_RESELL_URL } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function VendeSekka() {
  return (
    <section
      id="reventa"
      className="relative px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="relative overflow-hidden border border-gold/25 bg-ink-800 px-8 py-16 text-center md:px-16 md:py-24"
        >
          {/* faint gold radial backdrop */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, rgba(13,13,13,0) 65%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.span
              custom={0}
              variants={fadeUp}
              className="caps text-[0.6rem] text-gold/70"
            >
              Reventa
            </motion.span>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="mt-8 max-w-2xl font-serif text-4xl leading-tight text-bone md:text-6xl"
            >
              ¿Querés vender{" "}
              <span className="italic text-gold-light">SEKKA</span>?
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-8 max-w-xl font-sans text-base leading-relaxed text-bone/65"
            >
              Con o sin local. Si tenés un comercio, un bar, una cocina, redes o
              una buena red de clientes, sumás deshidratados premium con buen
              margen de reventa y gente que repite.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="mt-12">
              <a
                href={WHATSAPP_RESELL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gold px-10 py-5 caps text-[0.7rem] text-ink transition-colors duration-500 hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              >
                Quiero vender SEKKA
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </motion.div>

            <motion.p
              custom={4}
              variants={fadeUp}
              className="mt-10 caps text-[0.5rem] leading-relaxed text-bone/40"
            >
              Comercios · bares y cafés · hoteles · cocinas · revendedores · redes
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
