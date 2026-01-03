"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface NextSectionProps {
  fadeProgress: number;
}

const vestidos = [
  { id: 1, name: "Vestido A", image: "/vestidos/vestido-1.png" },
  { id: 2, name: "Vestido B", image: "/vestidos/vestido-2.png" },
  { id: 3, name: "Vestido C", image: "/vestidos/vestido-3.png" },
  { id: 4, name: "Vestido D", image: "/vestidos/vestido-4.png" },
];

export default function NextSection({ fadeProgress }: NextSectionProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Contenedor y item solo con propiedades básicas
  const container = {
    hidden: {},
    show: {},
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const sectionVisible = isMobile || fadeProgress < 0.2;

  return (
    <section className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 pt-16 md:pt-32">
      {/* Título y descripción */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: sectionVisible ? 1 : 0, y: sectionVisible ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Nuestra colección destacada
        </h2>
        <p className="text-black/70 text-base md:text-lg">
          Descubrí los vestidos que combinan elegancia y movimiento. Inspiración para cada ocasión.
        </p>
      </motion.div>

      {/* Tarjetas */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={sectionVisible ? "show" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl"
      >
        {vestidos.map((v) => (
          <motion.div
            key={v.id}
            variants={item}
            transition={{ duration: 0.5, ease: "easeOut" }} // <-- transición aquí, no en variants
            className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col items-center p-4"
          >
            <Image src={v.image} alt={v.name} width={200} height={300} className="object-contain" />
            <h3 className="mt-4 font-medium text-center">{v.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { motion, Easing } from "framer-motion";

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
