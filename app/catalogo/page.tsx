import Image from "next/image";
import { vestidos } from "data/vestidos";

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-white px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-16">
          Catálogo
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {vestidos.map((v) => (
            <div
              key={v.id}
              className="flex flex-col items-center"
            >
              <Image
                src={v.imagen}
                alt={v.nombre}
                width={300}
                height={450}
                className="object-contain"
              />

              <h3 className="mt-6 text-xs uppercase tracking-widest text-black/70">
                {v.nombre}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
