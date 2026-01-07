import Image from "next/image";
import { vestidos } from "data/vestidos";
import Navbar from "components/Navbar";

export default function CatalogoPage() {
  return (
    <>
    <Navbar  />
    <main className="min-h-screen bg-white px-6 pt1 pb-24">
      <div className="max-w-7xl mx-auto">

        {/* encabezado editorial */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Catálogo
          </h1>

          <p className="text-black/60 max-w-2xl mx-auto font-sans">
            Siluetas limpias, telas nobles y movimiento.  
            Cada pieza fue diseñada para acompañarte — sin gritar.
          </p>
        </div>

        {/* grilla */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {vestidos.map((v) => (
            <div
            key={v.id}
            className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">

                <Image
                  src={v.imagen}
                  alt={v.nombre}
                  width={500}
                  height={700}
                  className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xs uppercase tracking-[0.25em] text-black/70 font-sans">
                  {v.nombre}
                </h3>

                {v.color && (
                  <p className="text-xs mt-1 text-black/50 font-sans">
                    {v.color}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
          </>
    
  );
}
