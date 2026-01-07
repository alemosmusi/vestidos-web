"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { vestidos } from "data/vestidos";

export default function NextSection() {
  const container = {
    hidden: {},
    show: {},
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const MAX_VISIBLE = 4;
  const visibleVestidos = vestidos.slice(0, MAX_VISIBLE);
  const hasMore = vestidos.length > MAX_VISIBLE;

  return (
    <section className="relative bg-gray-50 flex flex-col items-center px-6 py-24">
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-black mb-6">
          Nuestra colección destacada
        </h2>
        <p className="text-black/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-sans">
          Descubrí los vestidos que combinan elegancia y movimiento. Inspiración para cada ocasión.
        </p>
      </motion.div>

      {/* Cards */}
      {/* <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-7xl"
      >
        {visibleVestidos.map((v) => (
          <motion.div
            key={v.id}
            variants={item}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center p-4"
          >
            <Image
              src={v.imagen}
              alt={v.nombre}
              width={260}
              height={380}
              className="object-contain"
            />
            <h3 className="mt-6 text-sm uppercase tracking-widest text-black/70 font-sans">
              {v.nombre}
            </h3>
          </motion.div>
        ))}
      </motion.div> */}


          {/* Cards */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-7xl"
>
  {visibleVestidos.map((v) => (
    <Link
      key={v.id}
      href={`/catalogo/${v.id}`}
      className="group"
    >
      <motion.div
        variants={item}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center p-4 cursor-pointer"
      >
        <Image
          src={v.imagen}
          alt={v.nombre}
          width={260}
          height={380}
          className="object-contain group-hover:scale-[1.02] transition-transform"
        />

        <h3 className="mt-6 text-sm uppercase tracking-widest text-black/70 font-sans">
          {v.nombre}
        </h3>
      </motion.div>
    </Link>
  ))}
</motion.div>
      {/* Botón catálogo */}
      {hasMore && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="mt-16"
  >
    <a
      href="/catalogo"
      className="
        inline-block
        border border-black/80
        px-10 py-4
        text-xs uppercase tracking-[0.3em]
        text-black
        hover:bg-black hover:text-white
        transition-colors duration-300
      "
    >
      Ver catálogo completo
    </a>
  </motion.div>
)}

    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { motion, Easing } from "framer-motion";
// import { vestidos } from '../app/data/vestidos';

// interface NextSectionProps {
//   fadeProgress: number;
// }

// const vestidos = [
//   { id: 1, name: "Vestido A", image: "/vestidos/vestido-1.png" },
//   { id: 2, name: "Vestido B", image: "/vestidos/vestido-2.png" },
//   { id: 3, name: "Vestido C", image: "/vestidos/vestido-3.png" },
//   { id: 4, name: "Vestido D", image: "/vestidos/vestido-4.png" },
// ];

// export default function NextSection({ fadeProgress }: NextSectionProps) {
//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as Easing }, // ← fix TypeScript
//     },
//   };

//   // Detectar móvil
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//   return (
//     <section className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
//       {/* Título */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{
//           opacity: isMobile ? 1 : 1 - fadeProgress,
//           y: 0,
//         }}
//         transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] as Easing }} // ← también aquí
//         className="max-w-4xl text-center mb-12"
//       >
//         <h2 className="text-3xl md:text-4xl font-semibold mb-4">Nuestra colección destacada</h2>
//         <p className="text-black/70 text-base md:text-lg">
//           Descubrí los vestidos que combinan elegancia y movimiento. Inspiración para cada ocasión.
//         </p>
//       </motion.div>

//       {/* Tarjetas de vestidos */}
//       <motion.div
//   variants={container}
//   initial="hidden"
//   animate={fadeProgress < 0.2 ? "show" : "hidden"} // ← animar cuando fadeProgress < 0.2
//   className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl"
// >
//   {vestidos.map((v) => (
//     <motion.div
//       key={v.id}
//       variants={item}
//       className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col items-center p-4"
//     >
//       <Image src={v.image} alt={v.name} width={200} height={300} className="object-contain" />
//       <h3 className="mt-4 font-medium text-center">{v.name}</h3>
//     </motion.div>
//   ))}
// </motion.div>
//     </section>
//   );
// }
