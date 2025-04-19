import type { Metadata } from "next";
import { inter, cabinet } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gigio - Pijamas de Calidad",
  description: "Tienda online de pijamas de alta calidad. Descubre nuestra colección de pijamas cómodos y elegantes.",
  keywords: "pijamas, ropa de dormir, moda, comodidad, calidad",
  authors: [{ name: "Gigio" }],
  openGraph: {
    title: "Gigio - Pijamas de Calidad",
    description: "Tienda online de pijamas de alta calidad. Descubre nuestra colección de pijamas cómodos y elegantes.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cabinet.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
