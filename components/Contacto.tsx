"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const WHATSAPP = "https://wa.me/549XXXXXXXXX";
const INSTAGRAM_HANDLE = "@sekka.artesanal";
const INSTAGRAM_URL = "https://instagram.com/sekka.artesanal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Contacto() {
  return (
    <section
      id="contacto"
      className="relative px-6 py-32 md:px-10 md:py-44 lg:py-52"
    >
      {/* top hairline */}
      <div className="mx-auto h-px max-w-[900px] hairline-h" />

      <div className="mx-auto mt-20 flex max-w-[820px] flex-col items-center text-center md:mt-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col items-center"
        >
          <motion.div custom={0} variants={fadeUp}>
            <SectionLabel index="III" label="Contacto" align="center" />
          </motion.div>

          <motion.div custom={1} variants={fadeUp} className="mt-12">
            <Image
              src="/brand/sekka-emblem.png"
              alt=""
              width={185}
              height={150}
              className="h-12 w-auto select-none"
              aria-hidden
            />
          </motion.div>

          <motion.h2
            custom={2}
            variants={fadeUp}
            className="mt-10 font-serif text-4xl leading-tight text-bone md:text-6xl"
          >
            ¿Querés llevar{" "}
            <span className="italic text-gold-light">SEKKA</span> a tu negocio?
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-8 max-w-xl font-sans text-base leading-relaxed text-bone/60"
          >
            Trabajamos con tiendas, hoteles y cocinas que comparten una misma
            obsesión: el detalle. Escribinos y diseñamos una selección a la
            medida de tu lugar.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-12 flex flex-col items-center gap-6 md:mt-16"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 border border-gold/70 px-10 py-5 caps text-[0.7rem] text-gold transition-colors duration-700 hover:text-ink"
            >
              {/* fill that slides in */}
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-gold transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
              />
              <span className="relative z-10 flex items-center gap-4">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488z" />
                </svg>
                Escribir por WhatsApp
              </span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 caps text-[0.65rem] text-bone/60 transition-colors duration-500 hover:text-gold"
            >
              <span className="block h-px w-6 bg-gold/40 transition-all duration-500 group-hover:w-10 group-hover:bg-gold" />
              Instagram {INSTAGRAM_HANDLE}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mx-auto mt-32 max-w-[1200px] md:mt-40">
        <div className="h-px w-full hairline-h" />
        <div className="flex flex-col items-center justify-between gap-4 px-2 pt-10 text-center md:flex-row md:text-left">
          <p className="caps text-[0.6rem] text-bone/40">
            © 2025 SEKKA — Deshidratados Artesanales
          </p>
          <p className="caps text-[0.6rem] text-bone/30">
            El tiempo · como ingrediente principal
          </p>
        </div>
      </footer>
    </section>
  );
}
