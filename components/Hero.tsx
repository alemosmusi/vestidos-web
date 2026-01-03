"use client";

import Image from "next/image";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;


useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const index = Math.min(
        frames.length - 1,
        Math.floor(v * frames.length * 1.4)
      );
  
      setFrame(index);
    });
  }, [scrollYProgress]);


  return (
    <section className="relative h-[180vh] w-full bg-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

      {/* Texto */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen px-6">
  
  {/* Texto */}
  <div className="flex items-center">
    <div className="max-w-xl">
      <h1 className="text-4xl md:text-6xl font-light tracking-wide text-black">
        Elegancia que se mueve con vos
      </h1>
      <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{
    opacity:
      scrollYProgress.get() > (isMobile ? 0.12 : 0.25) ? 1 : 0,
    y:
      scrollYProgress.get() > (isMobile ? 0.12 : 0.25) ? 0 : 20,
  }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="mt-8 text-sm md:text-base text-black/70 tracking-wide max-w-md"
>
  Vestidos pensados para acompañarte en cada movimiento.
  Diseño atemporal, telas nobles y una silueta que habla por vos.
</motion.p>

    </div>
  </div>

  {/* Modelo sticky */}
  <div className="sticky top-24 flex items-end justify-center md:justify-end">
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

      {/* <div className="absolute bottom-0 right-1/2 translate-x-1/2 md:right-24 md:translate-x-0">
  <AnimatePresence mode="wait">
    <motion.div
      key={frame}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    //   transition={{ duration: 0.25, ease: "easeOut" }}
    transition={{ duration: 0.2, ease: "linear" }}

    >
      <Image
        src={frames[frame]}
        alt="Modelo girando"
        width={320}
        height={900}
        priority
        className="object-contain"
      />
    </motion.div>
  </AnimatePresence>
</div> */}
    </section>
  );
}
