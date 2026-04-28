"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Historia() {
  return (
    <section
      id="historia"
      className="relative px-6 py-32 md:px-10 md:py-44 lg:py-56"
    >
      {/* top hairline */}
      <div className="mx-auto mb-24 h-px max-w-[1200px] hairline-h md:mb-32" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
        {/* Left: brand statement */}
        <div className="md:col-span-7">
          <SectionLabel index="I" label="Historia" />

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="mt-10 font-serif text-[2.6rem] leading-[1.05] md:text-[4.2rem] md:leading-[1.02] text-bone"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="block italic text-gold-light"
            >
              «El tiempo
            </motion.span>
            <motion.span custom={1} variants={fadeUp} className="block">
              como ingrediente
            </motion.span>
            <motion.span
              custom={2}
              variants={fadeUp}
              className="block italic text-gold-light"
            >
              principal.»
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 h-px w-24 origin-left bg-gold"
            aria-hidden
          />
        </div>

        {/* Right: copy */}
        <div className="md:col-span-5 md:pt-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-8 text-bone/75"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="caps text-[0.6rem] text-gold/70"
            >
              Origen — proceso — paciencia
            </motion.p>

            <motion.p
              custom={1}
              variants={fadeUp}
              className="font-sans text-base leading-relaxed md:text-[1.02rem]"
            >
              SEKKA nace de una obsesión simple: respetar la fruta hasta su
              última forma. Seleccionamos piezas en su punto exacto de madurez,
              cortamos a mano, y dejamos que el aire seco haga el resto —
              sin azúcares añadidos, sin conservantes, sin atajos.
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="font-sans text-base leading-relaxed md:text-[1.02rem]"
            >
              Cada lote es pequeño y trazable. La textura, el color y el aroma
              concentrado son consecuencia natural de un proceso que se mide en
              horas, no en minutos. Lo artesanal, para nosotros, es una manera
              de mirar.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex items-center gap-4 pt-2"
            >
              <span className="block h-px w-10 bg-gold/50" />
              <span className="caps text-[0.6rem] text-gold-light">
                Hecho en Argentina
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* bottom hairline */}
      <div className="mx-auto mt-24 h-px max-w-[1200px] hairline-h md:mt-32" />
    </section>
  );
}
