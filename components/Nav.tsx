"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#historia", label: "Historia" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-out-expo ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        {/* Left: small logo */}
        <a
          href="#top"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label="SEKKA — inicio"
        >
          <Image
            src="/brand/sekka-emblem.png"
            alt=""
            width={185}
            height={150}
            className="h-6 w-auto select-none"
            aria-hidden
          />
          <Image
            src="/brand/sekka-wordmark.png"
            alt="SEKKA"
            width={915}
            height={243}
            className="h-4 w-auto select-none"
          />
        </a>

        {/* Desktop links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="caps-tight text-[0.7rem] text-bone/70 hover:text-gold transition-colors duration-500"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile burger */}
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-px w-6 bg-gold transition-all duration-500 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-gold transition-all duration-500 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-gold/10 bg-ink/95 backdrop-blur-md"
          >
            <ul className="flex flex-col gap-6 px-8 py-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl tracking-[0.18em] text-gold-light hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
