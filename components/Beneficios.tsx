"use client";

import { motion } from "framer-motion";

const items = [
  { title: "Sin azúcar agregada", note: "Solo el dulzor de la fruta." },
  { title: "Sin conservantes", note: "Nada más que fruta y tiempo." },
  { title: "Textura concentrada", note: "Crocante, natural, real." },
  { title: "Hecho en Argentina", note: "Lotes pequeños y trazables." },
];

export function Beneficios() {
  return (
    <section className="relative border-y border-gold/10 bg-ink-800 px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-px bg-gold/10 md:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.9,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center gap-3 bg-ink-800 px-4 py-8 text-center md:py-10"
          >
            <span className="caps text-[0.55rem] text-gold/60">
              0{i + 1}
            </span>
            <h3 className="font-serif text-lg text-bone md:text-xl">
              {item.title}
            </h3>
            <p className="font-sans text-xs leading-relaxed text-bone/50">
              {item.note}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
