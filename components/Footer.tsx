"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Marca */}
        <div className="text-lg font-light tracking-wide">
          Tu Marca
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm uppercase tracking-widest text-black/70">
          <a
            href="https://instagram.com/tumarca"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:hola@tumarca.com"
            className="hover:text-black transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-black/50">
          © 2026 Tu Marca
        </div>
      </div>
    </footer>
  );
}
