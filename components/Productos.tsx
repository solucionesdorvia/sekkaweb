"use client";

import Image from "next/image";
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

export function Productos() {
  return (
    <section
      id="productos"
      className="relative bg-ink-900 px-6 py-32 md:px-10 md:py-44"
    >
      {/* faint top wash */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(201,168,76,0.04) 0%, rgba(13,13,13,0) 100%)",
        }}
      />

      <div className="mx-auto max-w-[1320px]">
        {/* Section heading */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <SectionLabel index="II" label="Productos" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl font-serif text-4xl leading-tight text-bone md:text-6xl"
            >
              Una <span className="italic text-gold-light">primera pieza</span>
              , trabajada hasta el último corte.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xs font-sans text-sm leading-relaxed text-bone/60"
          >
            Abrimos la carta con nuestra naranja deshidratada — corte fino,
            secado lento, color profundo. El resto de la colección llega
            próximamente.
          </motion.p>
        </div>

        {/* Featured product spread */}
        <div className="mt-20 grid grid-cols-1 gap-px bg-gold/10 md:mt-28 md:grid-cols-12">
          {/* LEFT: photo */}
          <motion.figure
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative md:col-span-7"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900">
              {/* radial glow that intensifies on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(201,168,76,0.18) 0%, rgba(13,13,13,0) 70%)",
                }}
              />
              <Image
                src="/products/naranja-deshidratada.png"
                alt="Naranja deshidratada SEKKA — paquete artesanal"
                fill
                priority
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.03]"
              />
              {/* corner brackets */}
              <span className="pointer-events-none absolute left-4 top-4 z-20 h-4 w-4 border-l border-t border-gold/60" />
              <span className="pointer-events-none absolute right-4 top-4 z-20 h-4 w-4 border-r border-t border-gold/60" />
              <span className="pointer-events-none absolute bottom-4 left-4 z-20 h-4 w-4 border-b border-l border-gold/60" />
              <span className="pointer-events-none absolute bottom-4 right-4 z-20 h-4 w-4 border-b border-r border-gold/60" />
            </div>
          </motion.figure>

          {/* RIGHT: product card */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="relative flex flex-col justify-between bg-ink-900 p-8 md:col-span-5 md:p-12 lg:p-14"
          >
            <div className="flex flex-col gap-8">
              <motion.div
                custom={0}
                variants={fadeUp}
                className="flex items-center justify-between"
              >
                <span className="caps text-[0.6rem] text-gold/70">N° 01</span>
                <span className="caps text-[0.6rem] text-bone/40">
                  Lote artesanal
                </span>
              </motion.div>

              <motion.h3
                custom={1}
                variants={fadeUp}
                className="font-serif text-4xl leading-[1.05] text-gold-light md:text-5xl lg:text-[3.2rem]"
              >
                Naranja
                <br />
                <span className="italic">Deshidratada</span>
              </motion.h3>

              <motion.div
                custom={2}
                variants={fadeUp}
                className="h-px w-16 bg-gold"
                aria-hidden
              />

              <motion.p
                custom={3}
                variants={fadeUp}
                className="font-sans text-base leading-relaxed text-bone/75"
              >
                Rodajas finas de naranja seleccionada en su punto exacto de
                madurez. Secado lento, sin azúcar añadido, sin conservantes —
                solo fruta y tiempo.
              </motion.p>

              <motion.dl
                custom={4}
                variants={fadeUp}
                className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 text-sm"
              >
                <Spec label="Origen" value="Argentina" />
                <Spec label="Corte" value="Rodaja fina" />
                <Spec label="Proceso" value="Secado lento" />
                <Spec label="Conservantes" value="Ninguno" />
              </motion.dl>
            </div>

            <motion.div
              custom={5}
              variants={fadeUp}
              className="mt-10 flex items-center gap-4 pt-8 md:mt-0"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 caps text-[0.65rem] text-gold transition-colors duration-500 hover:text-gold-light"
              >
                <span className="block h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
                Consultar disponibilidad
              </a>
            </motion.div>
          </motion.article>
        </div>

        {/* Below-fold: collection note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-4 md:mt-24"
        >
          <span aria-hidden className="block h-px w-12 bg-gold/40" />
          <p className="text-center font-serif text-sm italic text-bone/50">
            Próximas variedades en preparación — frutas y vegetales de estación.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="caps text-[0.55rem] text-gold/60">{label}</dt>
      <dd className="font-serif text-base text-bone">{value}</dd>
    </div>
  );
}
