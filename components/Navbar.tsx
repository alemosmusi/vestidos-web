"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 👉 1) se cierra cuando cambia la ruta
  const closeMenu = () => setOpen(false);

  // 👉 2) se cierra cuando hacés scroll
  useEffect(() => {
    const onScroll = () => setOpen(false);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // 👆 ojo: dependencia vacía, SOLO se registra una vez

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-lg tracking-widest font-semibold text-black">
          MI MARCA
        </Link>

        {/* desktop */}
        <div className="hidden md:flex gap-8 text-sm tracking-wide text-black">
          <Link href="/marca">La marca</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        {/* mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 text-black"
        >
          <span className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`h-px w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col px-6 pb-6 gap-4 text-sm tracking-wide text-black" onClick={closeMenu}>
          <Link href="/marca">La marca</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
