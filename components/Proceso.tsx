"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    n: "01",
    title: "Selección",
    body: "Fruta elegida en su punto exacto de madurez. Si no está perfecta, no entra.",
  },
  {
    n: "02",
    title: "Corte",
    body: "Láminas finas y parejas, cortadas para concentrar color, fibra y aroma.",
  },
  {
    n: "03",
    title: "Tiempo",
    body: "Secado lento durante horas. Sin apuro, sin hornos agresivos, sin atajos.",
  },
  {
    n: "04",
    title: "Resultado",
    body: "Textura concentrada, sabor intenso y natural. Solo fruta y tiempo.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Proceso() {
  return (
    <section
      id="proceso"
      className="relative bg-ink-800 px-6 py-32 md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <SectionLabel index="II" label="Proceso" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl font-serif text-4xl leading-tight text-bone md:text-6xl"
            >
              Cuatro pasos,{" "}
              <span className="italic text-gold-light">ningún atajo</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xs font-sans text-sm leading-relaxed text-bone/60"
          >
            Producción artesanal en lotes pequeños. Cada paso se mide en horas,
            no en minutos.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-20 grid grid-cols-1 gap-px bg-gold/10 sm:grid-cols-2 md:mt-28 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.article
              key={step.n}
              custom={i}
              variants={fadeUp}
              className="group flex flex-col gap-6 bg-ink-800 p-8 transition-colors duration-500 md:p-10"
            >
              <span className="font-serif text-5xl text-gold/30 transition-colors duration-500 group-hover:text-gold/70 md:text-6xl">
                {step.n}
              </span>
              <span aria-hidden className="block h-px w-10 bg-gold/40" />
              <h3 className="font-serif text-2xl text-gold-light md:text-3xl">
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-bone/65">
                {step.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
