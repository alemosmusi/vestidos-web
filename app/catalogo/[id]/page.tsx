
import Link from "next/link";
import { vestidos } from "data/vestidos";
import Carousel from "./Carousel";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const vestido = vestidos.find(v => v.id === Number(id));

  if (!vestido) return { title: "Vestido no encontrado" };

  return {
    title: `${vestido.nombre} – Catálogo`,
    description: vestido.descripcion ?? "Vestido disponible para alquiler."
  };
}

export default async function VestidoDetailPage({ params }: Props) {
  const { id } = await params; // ⬅️ esto arregla tu error
  const vestido = vestidos.find(v => v.id === Number(id));

  if (!vestido) {
    return (
      <main className="max-w-3xl mx-auto p-8">
        
        <p>Vestido no encontrado.</p>
        <Link href="/catalogo" className="underline mt-4 block">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  const mensaje = encodeURIComponent(
    `Hola, quiero consultar la disponibilidad del ${vestido.nombre}.`
  );
  const whatsapp = `https://wa.me/5491130994357?text=${mensaje}`;

  return (
    // <main className="max-w-6xl mx-auto px-6 py-16">
    <main className="max-w-6xl mx-auto px-6 pt-5 pb-10">
        {/* cambiar estoooooo nombre!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: vestido.nombre,
      image: vestido.imagenes,
      description: vestido.descripcion,
      brand: "Tu marca",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "Alquiler",
        priceCurrency: "ARS",
      }
    })
  }}
/>
      {/* <div className="grid md:grid-cols-2 gap-12">
       */}
    <div className="grid md:grid-cols-2 gap-10 md:h-[calc(100vh-120px)]">
        <div className="rounded-xl overflow-hidden shadow-sm">
        <Carousel imagenes={vestido.imagenes} nombre={vestido.nombre} />
        </div>

        <div>
          <h1 className="font-serif text-4xl mb-4">{vestido.nombre}</h1>
          <p className="text-black/60 mb-2">{vestido.color}</p>
          <p className="text-black/70 mb-8">{vestido.descripcion}</p>

          <Link
            href={whatsapp}
            target="_blank"
            className="inline-block px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition"
          >
            Consultar disponibilidad
          </Link>

          <p className="text-xs text-black/50 mt-2">
            Respuesta dentro de 24 h.
          </p>
        </div>
      </div>
    </main>
  );
}
