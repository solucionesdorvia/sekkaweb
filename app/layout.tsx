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
  title: "SEKKA — Deshidratados Artesanales",
  description:
    "SEKKA. Deshidratados artesanales. El tiempo como ingrediente principal. Frutas y vegetales seleccionados, procesados con paciencia.",
  keywords: [
    "SEKKA",
    "deshidratados",
    "artesanal",
    "frutas deshidratadas",
    "snacks naturales",
    "Argentina",
  ],
  openGraph: {
    title: "SEKKA — Deshidratados Artesanales",
    description: "El tiempo como ingrediente principal.",
    type: "website",
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
