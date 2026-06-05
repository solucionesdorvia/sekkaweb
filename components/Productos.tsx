"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { whatsappProductUrl } from "@/lib/config";

type Product = {
  slug: string;
  name: string;
  img: string;
  note: string;
};

const products: Product[] = [
  {
    slug: "naranja",
    name: "Naranja",
    img: "/products/naranja-deshidratada.png",
    note: "Cítrica e intensa, con cuerpo y final amargo justo.",
  },
  {
    slug: "pomelo",
    name: "Pomelo",
    img: "/products/pomelo-deshidratada.jpg",
    note: "Amargor elegante y aroma fresco. Final limpio.",
  },
  {
    slug: "manzana",
    name: "Manzana",
    img: "/products/manzana-deshidratada.jpg",
    note: "Dulce y delicada, con un dejo a especias.",
  },
  {
    slug: "manzana-verde",
    name: "Manzana Verde",
    img: "/products/manzana-verde-deshidratada.jpg",
    note: "Ácida y fresca, crocante y luminosa.",
  },
  {
    slug: "pera",
    name: "Pera",
    img: "/products/pera-deshidratada.jpg",
    note: "Suave y floral, dulzor sutil y textura tierna.",
  },
  {
    slug: "anana",
    name: "Ananá",
    img: "/products/anana-deshidratada.jpg",
    note: "Tropical y jugosa, sabor concentrado al máximo.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
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
            <SectionLabel index="III" label="Productos" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl font-serif text-4xl leading-tight text-bone md:text-6xl"
            >
              La colección,{" "}
              <span className="italic text-gold-light">fruta por fruta</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xs font-sans text-sm leading-relaxed text-bone/60"
          >
            Seis variedades, un mismo método: corte fino, secado lento, sin
            azúcar añadido ni conservantes. Solo fruta y tiempo.
          </motion.p>
        </div>

        {/* Product grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
          className="mt-20 grid grid-cols-1 gap-px bg-gold/10 sm:grid-cols-2 md:mt-28 lg:grid-cols-3"
        >
          {products.map((p, i) => (
            <motion.article
              key={p.slug}
              custom={i}
              variants={fadeUp}
              className="group relative flex flex-col bg-ink-900"
            >
              {/* photo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(201,168,76,0.18) 0%, rgba(13,13,13,0) 70%)",
                  }}
                />
                <Image
                  src={p.img}
                  alt={`${p.name} deshidratada SEKKA — paquete artesanal`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.03]"
                />
                {/* corner brackets reveal on hover */}
                <span className="pointer-events-none absolute left-4 top-4 z-20 h-4 w-4 border-l border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/60" />
                <span className="pointer-events-none absolute right-4 top-4 z-20 h-4 w-4 border-r border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/60" />
                <span className="pointer-events-none absolute bottom-4 left-4 z-20 h-4 w-4 border-b border-l border-gold/0 transition-colors duration-500 group-hover:border-gold/60" />
                <span className="pointer-events-none absolute bottom-4 right-4 z-20 h-4 w-4 border-b border-r border-gold/0 transition-colors duration-500 group-hover:border-gold/60" />
              </div>

              {/* card body */}
              <div className="flex flex-1 flex-col gap-5 p-8 md:p-9">
                <div className="flex items-center justify-between">
                  <span className="caps text-[0.6rem] text-gold/70">
                    N° 0{i + 1}
                  </span>
                  <span className="caps text-[0.55rem] text-bone/40">
                    Lote artesanal
                  </span>
                </div>

                <h3 className="font-serif text-3xl leading-none text-gold-light md:text-[2.1rem]">
                  {p.name}
                </h3>

                <span aria-hidden className="h-px w-12 bg-gold/40" />

                <p className="font-sans text-sm leading-relaxed text-bone/70">
                  {p.note}
                </p>

                <a
                  href={whatsappProductUrl(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta mt-auto inline-flex items-center gap-3 pt-2 caps text-[0.62rem] text-gold transition-colors duration-500 hover:text-gold-light"
                >
                  <span className="block h-px w-8 bg-gold transition-all duration-500 group-hover/cta:w-12" />
                  Consultar por WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* closing note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-4 md:mt-24"
        >
          <span aria-hidden className="block h-px w-12 bg-gold/40" />
          <p className="text-center font-serif text-sm italic text-bone/50">
            Lotes pequeños y trazables — frutas de estación, todo el año.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
