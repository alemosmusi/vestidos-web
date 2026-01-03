import Image from "next/image";


export default function VestidosPage() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Vestidos</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative w-full h-[500px]">
        <Image
            src="/vestido1.jpg"
            alt="Vestido rojo"
            fill
            className="object-cover rounded-lg"
        />
        </div>
        </div>
      </main>
    )
  }
  