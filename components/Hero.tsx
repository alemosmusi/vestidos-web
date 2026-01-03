"use client";

import Image from "next/image";
import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import NextSection from "./NextSection";

const frames = [
  "/modelo-seq/frame-01.png",
  "/modelo-seq/frame-02.png",
  "/modelo-seq/frame-03.png",
  "/modelo-seq/frame-04.png",
  "/modelo-seq/frame-05.png",
  "/modelo-seq/frame-06.png",
  "/modelo-seq/frame-07.png",
  "/modelo-seq/frame-08.png",
  "/modelo-seq/frame-09.png",
  "/modelo-seq/frame-10.png",
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [frame, setFrame] = useState(0);
  const [progress, setProgress] = useState(0);

  const fadeStart = 0.8;
  const fadeEnd = 1.0;
  const fadeProgress =
    progress > fadeStart
      ? Math.max(0, 1 - (progress - fadeStart) / (fadeEnd - fadeStart))
      : 1;

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setProgress(v);
      const index = Math.min(frames.length - 1, Math.floor(v * frames.length * 1.4));
      setFrame(index);
    });
  }, [scrollYProgress]);

  // Detectar móvil
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <section className="relative h-[200vh] bg-white">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ opacity: fadeProgress }}>
            <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 px-6">
              {/* Texto */}
              <div className="flex flex-col justify-center items-center md:items-start">
                <h1 className="text-4xl md:text-6xl font-light tracking-wide text-black">
                  Elegancia que se mueve con vos
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: progress > 0.08 ? 1 : 0, y: progress > 0.08 ? 0 : 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mt-4 text-xs uppercase tracking-widest text-black/60"
                >
                  Colección 2026
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: progress > 0.16 ? 1 : 0, y: progress > 0.16 ? 0 : 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mt-8 text-sm md:text-base text-black/70 tracking-wide max-w-md"
                >
                  Vestidos pensados para acompañarte en cada movimiento.
                  Diseño atemporal, telas nobles y una silueta que habla por vos.
                </motion.p>
              </div>

              {/* Modelo */}
              <div className="flex items-end justify-center md:justify-end">
                <Image
                  src={frames[frame]}
                  alt="Modelo girando"
                  width={320}
                  height={900}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NextSection: en móvil siempre visible, en desktop según fadeProgress */}
      <NextSection fadeProgress={isMobile ? 0 : fadeProgress} />
    </>
  );
}



// "use client";

// import Image from "next/image";
// import { useScroll, motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import NextSection from "./NextSection"; // tu sección siguiente

// const frames = [
//   "/modelo-seq/frame-01.png",
//   "/modelo-seq/frame-02.png",
//   "/modelo-seq/frame-03.png",
//   "/modelo-seq/frame-04.png",
//   "/modelo-seq/frame-05.png",
//   "/modelo-seq/frame-06.png",
//   "/modelo-seq/frame-07.png",
//   "/modelo-seq/frame-08.png",
//   "/modelo-seq/frame-09.png",
//   "/modelo-seq/frame-10.png",
// ];

// export default function Hero() {
//   const { scrollYProgress } = useScroll();
//   const [frame, setFrame] = useState(0);
//   const [progress, setProgress] = useState(0);

//   const fadeStart = 0.8;
//   const fadeEnd = 1.0;
//   const fadeProgress =
//     progress > fadeStart
//       ? Math.max(0, 1 - (progress - fadeStart) / (fadeEnd - fadeStart))
//       : 1;

//   useEffect(() => {
//     return scrollYProgress.on("change", (v) => {
//       setProgress(v);

//       const index = Math.min(frames.length - 1, Math.floor(v * frames.length * 1.4));
//       setFrame(index);
//     });
//   }, [scrollYProgress]);

//   return (
//     <>
//       {/* Hero con altura extendida para scroll */}
//       <section className="relative h-[200vh] bg-white">
//         {/* Sticky para mantener hero mientras se hace scroll */}
//         <div className="sticky top-0 h-screen overflow-hidden">
//           <motion.div style={{ opacity: fadeProgress }}>
//             <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 px-6">
//               {/* Texto */}
//               <div className="flex flex-col justify-center items-center md:items-start">
//                 <h1 className="text-4xl md:text-6xl font-light tracking-wide text-black">
//                   Elegancia que se mueve con vos
//                 </h1>

//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: progress > 0.08 ? 1 : 0, y: progress > 0.08 ? 0 : 10 }}
//                   transition={{ duration: 0.4, ease: "easeOut" }}
//                   className="mt-4 text-xs uppercase tracking-widest text-black/60"
//                 >
//                   Colección 2026
//                 </motion.p>

//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: progress > 0.16 ? 1 : 0, y: progress > 0.16 ? 0 : 20 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   className="mt-8 text-sm md:text-base text-black/70 tracking-wide max-w-md"
//                 >
//                   Vestidos pensados para acompañarte en cada movimiento.
//                   Diseño atemporal, telas nobles y una silueta que habla por vos.
//                 </motion.p>
//               </div>

//               {/* Modelo */}
//               <div className="flex items-end justify-center md:justify-end">
//                 <Image
//                   src={frames[frame]}
//                   alt="Modelo girando"
//                   width={320}
//                   height={900}
//                   priority
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Siguiente sección que aparece después del hero */}
//       <NextSection fadeProgress={fadeProgress} />
//     </>
//   );
// }





// "use client";

// import Image from "next/image";
// import { useScroll, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const frames = [
//   "/modelo-seq/frame-01.png",
//   "/modelo-seq/frame-02.png",
//   "/modelo-seq/frame-03.png",
//   "/modelo-seq/frame-04.png",
//   "/modelo-seq/frame-05.png",
//   "/modelo-seq/frame-06.png",
//   "/modelo-seq/frame-07.png",
//   "/modelo-seq/frame-08.png",
//   "/modelo-seq/frame-09.png",
//   "/modelo-seq/frame-10.png",
// ];

// export default function Hero() {
//   const { scrollYProgress } = useScroll();
//   const [frame, setFrame] = useState(0);
//   const [progress, setProgress] = useState(0);

//   // Fade-out al final del hero
//   const fadeStart = 0.8;
//   const fadeEnd = 1.0;
//   const fadeProgress =
//     progress > fadeStart ? Math.max(0, 1 - (progress - fadeStart) / (fadeEnd - fadeStart)) : 1;

//   // Escuchar scroll y actualizar modelo + progreso
//   useEffect(() => {
//     return scrollYProgress.on("change", (v) => {
//       setProgress(v);
//       const index = Math.min(frames.length - 1, Math.floor(v * frames.length * 1.4));
//       setFrame(index);
//     });
//   }, [scrollYProgress]);

//   return (
//     <section className="relative h-screen bg-white">
//       {/* Contenedor fijo */}
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <motion.div style={{ opacity: fadeProgress }}>
//           <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 px-6">
            
//             {/* Texto + Botón */}
//             <div className="flex flex-col justify-center items-center md:items-start">
//               <h1 className="text-4xl md:text-6xl font-light tracking-wide text-black text-center md:text-left">
//                 Elegancia que se mueve con vos
//               </h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: progress > 0.08 ? 1 : 0, y: progress > 0.08 ? 0 : 10 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="mt-4 text-xs uppercase tracking-widest text-black/60 text-center md:text-left"
//               >
//                 Colección 2026
//               </motion.p>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: progress > 0.16 ? 1 : 0, y: progress > 0.16 ? 0 : 20 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="mt-8 text-sm md:text-base text-black/70 tracking-wide max-w-md text-center md:text-left"
//               >
//                 Vestidos pensados para acompañarte en cada movimiento.
//                 Diseño atemporal, telas nobles y una silueta que habla por vos.
//               </motion.p>

//               {/* Botón solo en Desktop */}
//               <motion.a
//                 href="/catalogo"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: progress > 0.22 ? 1 : 0, y: progress > 0.22 ? 0 : 20 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className="hidden md:inline-block mt-10 px-6 py-3 bg-black text-white font-medium uppercase tracking-widest text-sm rounded-md hover:bg-black/80 transition-colors"
//               >
//                 Ver Catálogo
//               </motion.a>
//             </div>

//             {/* Modelo */}
//             <div className="flex items-end justify-center md:justify-end">
//               <Image
//                 src={frames[frame]}
//                 alt="Modelo girando"
//                 width={320}
//                 height={900}
//                 priority
//                 className="object-contain"
//               />
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import Image from "next/image";
// import { useScroll, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const frames = [
//   "/modelo-seq/frame-01.png",
//   "/modelo-seq/frame-02.png",
//   "/modelo-seq/frame-03.png",
//   "/modelo-seq/frame-04.png",
//   "/modelo-seq/frame-05.png",
//   "/modelo-seq/frame-06.png",
//   "/modelo-seq/frame-07.png",
//   "/modelo-seq/frame-08.png",
//   "/modelo-seq/frame-09.png",
//   "/modelo-seq/frame-10.png",
// ];

// export default function Hero() {
//   const { scrollYProgress } = useScroll();
//   const [frame, setFrame] = useState(0);
//   const [progress, setProgress] = useState(0);

//   // Fade-out al final del hero
//   const fadeStart = 0.8;
//   const fadeEnd = 1.0;
//   const fadeProgress =
//     progress > fadeStart ? Math.max(0, 1 - (progress - fadeStart) / (fadeEnd - fadeStart)) : 1;

//   // Escuchar scroll y actualizar modelo + progreso
//   useEffect(() => {
//     return scrollYProgress.on("change", (v) => {
//       setProgress(v);

//       const index = Math.min(frames.length - 1, Math.floor(v * frames.length * 1.4));
//       setFrame(index);
//     });
//   }, [scrollYProgress]);

//   return (
//     <section className="relative h-[300vh] bg-white">
//       {/* Contenedor fijo */}
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <motion.div style={{ opacity: fadeProgress }}>
//           <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 px-6">
            
//             {/* Texto + Botón */}
//             <div className="flex flex-col justify-center items-center md:items-start">
//               <h1 className="text-4xl md:text-6xl font-light tracking-wide text-black">
//                 Elegancia que se mueve con vos
//               </h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: progress > 0.08 ? 1 : 0, y: progress > 0.08 ? 0 : 10 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="mt-4 text-xs uppercase tracking-widest text-black/60"
//               >
//                 Colección 2026
//               </motion.p>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: progress > 0.16 ? 1 : 0, y: progress > 0.16 ? 0 : 20 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="mt-8 text-sm md:text-base text-black/70 tracking-wide max-w-md"
//               >
//                 Vestidos pensados para acompañarte en cada movimiento.
//                 Diseño atemporal, telas nobles y una silueta que habla por vos.
//               </motion.p>

//               <motion.a
//                 href="/catalogo"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: progress > 0.22 ? 1 : 0, y: progress > 0.22 ? 0 : 20 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className="mt-10 px-6 py-3 bg-black text-white font-medium uppercase tracking-widest text-sm rounded-md hover:bg-black/80 transition-colors"
//               >
//                 Ver Catálogo
//               </motion.a>
//             </div>

//             {/* Modelo */}
//             <div className="flex items-end justify-center md:justify-end">
//               <Image
//                 src={frames[frame]}
//                 alt="Modelo girando"
//                 width={320}
//                 height={900}
//                 priority
//                 className="object-contain"
//               />
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import Image from "next/image";
// import { useScroll, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const frames = [
//   "/modelo-seq/frame-01.png",
//   "/modelo-seq/frame-02.png",
//   "/modelo-seq/frame-03.png",
//   "/modelo-seq/frame-04.png",
//   "/modelo-seq/frame-05.png",
//   "/modelo-seq/frame-06.png",
//   "/modelo-seq/frame-07.png",
//   "/modelo-seq/frame-08.png",
//   "/modelo-seq/frame-09.png",
//   "/modelo-seq/frame-10.png",
// ];

// export default function Hero() {
//   const { scrollYProgress } = useScroll();
//   const [frame, setFrame] = useState(0);

//   const isMobile =
//     typeof window !== "undefined" && window.innerWidth < 768;

//   useEffect(() => {
//     return scrollYProgress.on("change", (v) => {
//       const index = Math.min(
//         frames.length - 1,
//         Math.floor(v * frames.length * 1.4)
//       );
//       setFrame(index);
//     });
//   }, [scrollYProgress]);

//   return (
//     <section className="relative h-[300vh] bg-white">
//       {/* Contenedor fijo */}
//       <div className="sticky top-0 h-screen overflow-hidden">
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

//         {/* Contenido */}
//         <div className="relative z-10 max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 px-6">
          
//           {/* Texto */}
//           <div className="flex items-center">
//             <div className="max-w-xl">
//             <h1 className="text-4xl md:text-6xl font-light tracking-wide text-black">
//   Elegancia que se mueve con vos
// </h1>


//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{
//                   opacity:
//                     scrollYProgress.get() >
//                     (isMobile ? 0.12 : 0.2)
//                       ? 1
//                       : 0,
//                   y:
//                     scrollYProgress.get() >
//                     (isMobile ? 0.12 : 0.2)
//                       ? 0
//                       : 20,
//                 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="mt-8 text-sm md:text-base text-black/70 max-w-md"
//               >
//                 Vestidos pensados para acompañarte en cada movimiento.
//                 Diseño atemporal, telas nobles y una silueta que habla por vos.
//               </motion.p>
//             </div>
//           </div>

//           {/* Modelo */}
//           <div className="flex items-end justify-center md:justify-end">
//             <Image
//               src={frames[frame]}
//               alt="Modelo girando"
//               width={320}
//               height={900}
//               priority
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";

// import Image from "next/image";
// import { useScroll, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const frames = [
//   "/modelo-seq/frame-01.png",
//   "/modelo-seq/frame-02.png",
//   "/modelo-seq/frame-03.png",
//   "/modelo-seq/frame-04.png",
//   "/modelo-seq/frame-05.png",
//   "/modelo-seq/frame-06.png",
//   "/modelo-seq/frame-07.png",
//   "/modelo-seq/frame-08.png",
//   "/modelo-seq/frame-09.png",
//   "/modelo-seq/frame-10.png",
// ];

// export default function Hero() {
//   const { scrollYProgress } = useScroll();
//   const [frame, setFrame] = useState(0);

//     const isMobile = typeof window !== "undefined" && window.innerWidth < 768;


// useEffect(() => {
//     return scrollYProgress.on("change", (v) => {
//       const index = Math.min(
//         frames.length - 1,
//         Math.floor(v * frames.length * 1.4)
//       );
  
//       setFrame(index);
//     });
//   }, [scrollYProgress]);


//   return (
//     <section className="relative h-[180vh] w-full bg-white">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

//       {/* Texto */}
//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen px-6">
  
//   {/* Texto */}
//   <div className="flex items-center">
//     <div className="max-w-xl">
//       <h1 className="text-4xl md:text-6xl font-light tracking-wide text-black">
//         Elegancia que se mueve con vos
//       </h1>
//       <motion.p
//   initial={{ opacity: 0, y: 20 }}
//   animate={{
//     opacity:
//       scrollYProgress.get() > (isMobile ? 0.12 : 0.25) ? 1 : 0,
//     y:
//       scrollYProgress.get() > (isMobile ? 0.12 : 0.25) ? 0 : 20,
//   }}
//   transition={{ duration: 0.6, ease: "easeOut" }}
//   className="mt-8 text-sm md:text-base text-black/70 tracking-wide max-w-md"
// >
//   Vestidos pensados para acompañarte en cada movimiento.
//   Diseño atemporal, telas nobles y una silueta que habla por vos.
// </motion.p>

//     </div>
//   </div>

//   {/* Modelo sticky */}
//   <div className="sticky top-24 flex items-end justify-center md:justify-end">
//     <Image
//       src={frames[frame]}
//       alt="Modelo girando"
//       width={320}
//       height={900}
//       priority
//       className="object-contain"
//     />
//   </div>

// </div>

//       {/* <div className="absolute bottom-0 right-1/2 translate-x-1/2 md:right-24 md:translate-x-0">
//   <AnimatePresence mode="wait">
//     <motion.div
//       key={frame}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     //   transition={{ duration: 0.25, ease: "easeOut" }}
//     transition={{ duration: 0.2, ease: "linear" }}

//     >
//       <Image
//         src={frames[frame]}
//         alt="Modelo girando"
//         width={320}
//         height={900}
//         priority
//         className="object-contain"
//       />
//     </motion.div>
//   </AnimatePresence>
// </div> */}
//     </section>
//   );
// }
