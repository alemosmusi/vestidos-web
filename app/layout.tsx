import "./globals.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";

/* ✅ FUENTES DECLARADAS FUERA DEL COMPONENTE */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${serif.variable} font-sans pt-15`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
