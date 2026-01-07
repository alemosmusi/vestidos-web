export default function MarcaPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-light tracking-wide">
          La marca
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Una propuesta de alquiler de vestidos pensada para mujeres que valoran
          la elegancia, la simplicidad y la conciencia en la moda.
        </p>
      </section>

      <div className="my-14 h-px w-24 mx-auto bg-neutral-200" />

      {/* Identidad */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Nuestra esencia</h2>

        <p className="text-muted-foreground leading-relaxed">
          Creemos que cada evento especial merece un vestido especial, pero no
          por eso debemos comprar algo que usemos solo una vez. Nuestra marca
          nace para ofrecer una alternativa elegante, práctica y sustentable.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Seleccionamos cuidadosamente cada prenda pensando en su caída, textura
          y silueta real. Más que tendencias rápidas, buscamos piezas atemporales
          que te hagan sentir segura y auténtica.
        </p>
      </section>

      <div className="my-14 h-px w-24 mx-auto bg-neutral-200" />

      {/* Diferencial */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-6">
          <p className="font-medium">Curaduría</p>
          <p className="text-sm text-muted-foreground mt-2">
            Vestidos seleccionados uno por uno, no masivos.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="font-medium">Calce real</p>
          <p className="text-sm text-muted-foreground mt-2">
            Pensados para cuerpos reales, no solo fotos.
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="font-medium">Moda consciente</p>
          <p className="text-sm text-muted-foreground mt-2">
            Alquilar en lugar de acumular.
          </p>
        </div>
      </section>
    </main>
  );
}
