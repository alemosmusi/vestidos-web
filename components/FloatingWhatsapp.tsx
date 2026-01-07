"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5491130994357?text=Hola%2C%20quiero%20consultar%20por%20un%20vestido%20para%20evento"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl border bg-green-500 text-white hover:scale-105 transition-transform"
      aria-label="WhatsApp"
    >
      {/* ícono simple con SVG para no depender de librerías */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163a11.93 11.93 0 01-1.587-5.95C.16 5.355 5.514 0 12.057 0c3.181 0 6.167 1.24 8.413 3.488a11.82 11.82 0 013.497 8.41c-.003 6.543-5.358 11.897-11.9 11.897a11.95 11.95 0 01-5.943-1.594L.057 24zm6.597-3.807l.357.21a9.534 9.534 0 004.95 1.361h.004c5.268 0 9.554-4.281 9.557-9.545a9.47 9.47 0 00-2.77-6.73A9.48 9.48 0 0012.06 2.1c-5.267 0-9.552 4.28-9.555 9.543a9.42 9.42 0 001.366 4.94l.225.375-.999 3.648 3.557-.413z" />
      </svg>
    </a>
  );
}
