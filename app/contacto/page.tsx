"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    // simulación
    setTimeout(() => setSending(false), 1200);
  };

  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-light tracking-wide">
          Contacto
        </h1>

        <p className="mt-6 text-lg text-black/60 max-w-2xl mx-auto">
          Reservá tu turno, consultá disponibilidad o escribinos para asesorarte.
        </p>
      </section>

      <div className="h-px w-24 mx-auto bg-neutral-200 mb-16" />

      {/* GRID */}
      <section className="grid md:grid-cols-2 gap-12">

        {/* LEFT: form */}
        <div className="border rounded-2xl p-8 bg-white shadow-sm">

          <h2 className="text-xl font-medium mb-6">Enviarnos un mensaje</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              required
              type="text"
              placeholder="Nombre"
              className="w-full border rounded-xl px-4 py-3 bg-white"
            />

            <input
              required
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-3 bg-white"
            />

            <textarea
              required
              rows={4}
              placeholder="Tu mensaje"
              className="w-full border rounded-xl px-4 py-3 bg-white resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl py-3 border bg-black text-white tracking-wide hover:opacity-80 transition"
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>

        {/* RIGHT: cards */}
        <div className="space-y-6">

          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <p className="font-medium mb-2">WhatsApp</p>
            <a
              href="https://wa.me/54911XXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20un%20vestido%20para%20evento."
              target="_blank"
              className="text-green-700 underline"
            >
              Escribir por WhatsApp
            </a>
            <p className="text-xs text-black/50 mt-1">
              Turnos y consultas rápidas
            </p>
          </div>

          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <p className="font-medium mb-2">Email</p>
            <p className="text-black/60">contacto@tumarca.com</p>
          </div>

          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <p className="font-medium mb-2">Instagram</p>
            <a
              href="https://instagram.com/tumarca"
              target="_blank"
              className="underline"
            >
              @tumarca
            </a>
          </div>

        </div>
      </section>

      <div className="h-px w-24 mx-auto bg-neutral-200 my-16" />

      {/* SHOWROOM */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-3">
          Showroom
        </h2>

        <p className="text-black/60">
          Atendemos con cita previa para pruebas de vestidos y asesoría personalizada.
        </p>

        <p className="text-black/70 mt-4">
          📍 Palermo — Buenos Aires
          <br />
          ⏳ Lunes a viernes de 10 a 18 hs
        </p>
      </section>

      {/* MAP */}
      
      <div className="rounded-2xl overflow-hidden shadow-sm border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.9354470010308!2d-57.54370302547066!3d-37.960664671939085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dbc5522c3c59%3A0x24789ff8d7248a71!2sAntonio%20Alice%204400%2C%20B7600JCC%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1767819571023!5m2!1ses-419!2sar"
          width="100%"
          height="380"
          loading="lazy"
          style={{ border: 0 }}
        />
      </div>

    </main>
  );
}
