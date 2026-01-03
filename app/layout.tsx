import "./globals.css";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className="pt-15">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
