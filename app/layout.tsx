import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "SEKKA — Frutas Deshidratadas Premium Artesanales",
    description:
      "Fruta real, secada lentamente. Sin azúcar agregada, sin conservantes. El tiempo como ingrediente principal.",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-ink text-bone antialiased">
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
