import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { INSTAGRAM_URL } from "@/lib/config";
import "./globals.css";

const SITE_URL = "https://sekkaweb-production.up.railway.app";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SEKKA — Frutas Deshidratadas Premium Artesanales | Argentina",
  description:
    "Frutas deshidratadas premium artesanales. Fruta real, secada lentamente, sin azúcar agregada y sin conservantes. Snacks naturales hechos en Argentina, en lotes pequeños.",
  keywords: [
    "SEKKA",
    "frutas deshidratadas premium argentina",
    "frutas deshidratadas artesanales",
    "snacks saludables",
    "snacks naturales argentina",
    "fruta seca natural",
    "snacks sin azúcar agregada",
    "snacks sin conservantes",
    "naranja deshidratada",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "SEKKA — Frutas Deshidratadas Premium Artesanales",
    description:
      "Fruta real, secada lentamente. Sin azúcar agregada, sin conservantes. El tiempo como ingrediente principal.",
    url: SITE_URL,
    siteName: "SEKKA",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: `${SITE_URL}/products/naranja-deshidratada.png`,
        width: 819,
        height: 1024,
        alt: "SEKKA — naranja deshidratada artesanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEKKA — Frutas Deshidratadas Premium Artesanales",
    description:
      "Fruta real, secada lentamente. Sin azúcar agregada, sin conservantes.",
    images: [`${SITE_URL}/products/naranja-deshidratada.png`],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "SEKKA",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/sekka-wordmark.png`,
      description:
        "Frutas deshidratadas premium artesanales, hechas en Argentina en lotes pequeños.",
      sameAs: [INSTAGRAM_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "SEKKA",
      inLanguage: "es-AR",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "Product",
      name: "Frutas deshidratadas SEKKA",
      brand: { "@id": `${SITE_URL}/#org` },
      description:
        "Bolsa de frutas deshidratadas artesanales: corte fino, secado lento, sin azúcar agregada ni conservantes.",
      category: "Snacks naturales",
      offers: {
        "@type": "Offer",
        priceCurrency: "ARS",
        price: "5000",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-ink text-bone antialiased">
        <a href="#top" className="skip-link">
          Saltar al contenido
        </a>
        {children}
        <div className="grain" aria-hidden />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
