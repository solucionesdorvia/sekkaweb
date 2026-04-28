# SEKKA — Deshidratados Artesanales

Sitio de marca para SEKKA. Single page, dark, editorial. Construido con Next.js 14 (App Router), Tailwind CSS y Framer Motion.

> "El tiempo como ingrediente principal."

## Stack

- **Next.js 14** (App Router, Server Components donde es posible)
- **TypeScript**
- **Tailwind CSS** con tokens de marca (`ink`, `gold`, `bone`)
- **Framer Motion** para revelados, partículas y micro-interacciones
- **next/font** con `Cormorant Garamond` (display) y `Montserrat` (body)
- Listo para desplegar en **Railway** (`railway.json` incluido, `output: "standalone"`)

## Estructura

```
app/
  layout.tsx        # fuentes, metadata, grain overlay
  page.tsx          # composición de la home
  globals.css       # tokens, grain SVG, hairlines, scrollbar
components/
  Nav.tsx           # nav fijo, transparente sobre hero, sólido al scroll
  Hero.tsx          # logo, tagline letra por letra, partículas, scroll arrow
  Historia.tsx      # split layout con quote serif y reveal escalonado
  Productos.tsx     # grid de 6 productos, hover gold, pouch artwork
  PouchArtwork.tsx  # SVG placeholder del estuche matte black con ventana
  Contacto.tsx      # CTA WhatsApp, Instagram, footer
  Logo.tsx          # composición SEKKA + emblema cítrico
  SekkaEmblem.tsx   # SVG engraved del cítrico cortado
  GoldParticles.tsx # partículas doradas deterministas (no hydration mismatch)
  SectionLabel.tsx  # rotulado editorial "I — HISTORIA"
```

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build de producción

```bash
npm run build
npm start
```

## Deploy en Railway

1. Crear un nuevo servicio en Railway apuntando a este repo.
2. Railway detecta automáticamente el proyecto Next.js (Nixpacks).
3. El archivo `railway.json` define `npm ci && npm run build` y `npm start`.
4. `next.config.js` usa `output: "standalone"` para builds compactos.
5. Railway inyecta `PORT`; `next start` lo respeta por defecto.

No se requieren variables de entorno para el sitio público.

## Personalización rápida

| Qué                  | Dónde                                             |
| -------------------- | ------------------------------------------------- |
| WhatsApp             | `components/Contacto.tsx` → `WHATSAPP`            |
| Instagram            | `components/Contacto.tsx` → `INSTAGRAM_*`         |
| Productos            | `components/Productos.tsx` → array `PRODUCTS`     |
| Copy de Historia     | `components/Historia.tsx`                         |
| Paleta               | `tailwind.config.ts` → `theme.extend.colors`      |
| Fotos de productos   | reemplazar `PouchArtwork` por `next/image` real    |

## Reemplazo de fotos reales

Cuando estén las fotos finales de los estuches, reemplazá el bloque
`<PouchArtwork ... />` dentro de `ProductCard` por:

```tsx
import Image from "next/image";

<Image
  src={`/products/${product.id}.jpg`}
  alt={product.name}
  fill
  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
  className="object-contain"
/>;
```

Y agregá las imágenes a `public/products/`.

## Accesibilidad

- `prefers-reduced-motion` respetado a nivel global.
- Tagline tiene `aria-label` legible y letras marcadas `aria-hidden`.
- Contraste alto entre `bone` (#E8E2D2), `gold-light` (#F0D080) y `ink` (#0D0D0D).

---

© 2025 SEKKA — Deshidratados Artesanales
