import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Historia } from "@/components/Historia";
import { Productos } from "@/components/Productos";
import { Contacto } from "@/components/Contacto";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Historia />
      <Productos />
      <Contacto />
    </main>
  );
}
