import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Beneficios } from "@/components/Beneficios";
import { Historia } from "@/components/Historia";
import { Proceso } from "@/components/Proceso";
import { Productos } from "@/components/Productos";
import { VendeSekka } from "@/components/VendeSekka";
import { Contacto } from "@/components/Contacto";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Beneficios />
      <Historia />
      <Proceso />
      <Productos />
      <VendeSekka />
      <Contacto />
      <WhatsAppFloat />
    </main>
  );
}
