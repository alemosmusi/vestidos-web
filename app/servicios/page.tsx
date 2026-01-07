export default function ServiciosPage() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-light tracking-wide">
          Servicios
        </h1>

        <p className="mt-6 text-lg text-black/60 max-w-2xl mx-auto">
          Alquiler de vestidos curados para eventos especiales.
          Un proceso simple, personalizado y pensado para que disfrutes el momento.
        </p>
      </section>

      {/* Divider */}
      <div className="h-px w-24 mx-auto bg-neutral-200 mb-16" />

      {/* Cómo funciona */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Cómo funciona
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              titulo: "1) Elegí",
              texto:
                "Explorá nuestro catálogo y seleccioná el vestido que más te represente.",
            },
            {
              titulo: "2) Probá",
              texto:
                "Coordinamos una cita para que puedas probarte los modelos en showroom.",
            },
            {
              titulo: "3) Alquilá",
              texto:
                "Reservamos la fecha de tu evento. Incluye ajustes simples si son necesarios.",
            },
            {
              titulo: "4) Disfrutá",
              texto:
                "Usás tu vestido y lo devolvés sin preocuparte por la tintorería.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              className="border rounded-2xl p-6 bg-white shadow-sm"
            >
              <p className="font-semibold">{item.titulo}</p>
              <p className="text-sm text-black/60 mt-2 leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-24 mx-auto bg-neutral-200 my-16" />

      {/* Qué ofrecemos */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="rounded-2xl border p-6">
          <p className="font-medium">Alquiler de vestidos</p>
          <p className="text-sm text-black/60 mt-2">
            Piezas seleccionadas para fiestas, casamientos, graduaciones
            y eventos formales.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="font-medium">Asesoría personalizada</p>
          <p className="text-sm text-black/60 mt-2">
            Te ayudamos a elegir la silueta, color y textura que mejor te favorece.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="font-medium">Ajustes básicos</p>
          <p className="text-sm text-black/60 mt-2">
            Incluidos en el alquiler para garantizar un calce prolijo y cómodo.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-24 mx-auto bg-neutral-200 my-16" />

      {/* Info práctica */}
      <section className="space-y-4 max-w-3xl mx-auto text-center">
        <p className="text-black/70">
          ⏳ Período de alquiler estándar: <strong>4–5 días</strong>
        </p>

        <p className="text-black/70">
          🧺 Tintorería incluida en el servicio
        </p>

        <p className="text-black/70">
          📍 Showroom con cita previa
        </p>

        <p className="text-black/70">
          💬 Consultas por WhatsApp o Instagram
        </p>
      </section>
    </main>
  );
}
