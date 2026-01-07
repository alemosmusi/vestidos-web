"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Props {
  imagenes: string[];
  nombre: string;
}

export default function Carousel({ imagenes, nombre }: Props) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  const thumbsRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = () =>
    setIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));

  // swipe táctil
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;

    if (endX - touchStartX.current > 50) prev();
    if (touchStartX.current - endX > 50) next();

    touchStartX.current = null;
  };

  // cerrar zoom con esc
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  // 👉 centra miniatura actual en el scroll
  useEffect(() => {
    if (!thumbsRef.current) return;
    const el = thumbsRef.current.children[index] as HTMLElement;
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [index]);

  return (
    <>
      <div
        className="relative flex flex-col h-full"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* 🔒 contenedor con relacion fija para evitar saltos */}
        {/* <div className="rounded-2xl overflow-hidden shadow bg-neutral-50 relative w-full">
          <div className="w-full aspect-[3/4] relative">
            <Image
              src={imagenes[index]}
              alt={nombre}
              fill
              className="object-cover cursor-zoom-in"
              onClick={() => setZoom(true)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div> */}
        {/* imagen grande con límite por pantalla */}
<div className="rounded-2xl overflow-hidden shadow bg-neutral-50 relative flex-1">
  <div className="w-full h-full max-h-[75vh] aspect-[3/4] mx-auto relative">
    <Image
      src={imagenes[index]}
      alt={nombre}
      fill
      className="object-contain cursor-zoom-in"
      onClick={() => setZoom(true)}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
</div>

        {/* flechas */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow"
        >
          ❮
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow"
        >
          ❯
        </button>

        {/* MINIATURAS: carrusel horizontal */}
        <div className="relative mt-4">
          {/* botones de scroll thumbnails */}
          <button
            onClick={() => thumbsRef.current?.scrollBy({ left: -200, behavior: "smooth" })}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 px-2 py-1 rounded-full shadow"
          >
            ❮
          </button>

          <div
            ref={thumbsRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide px-8"
          >
            {imagenes.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`border rounded-xl overflow-hidden shrink-0 ${
                  i === index ? "border-black" : "border-transparent opacity-60"
                }`}
              >
                <div className="w-20 aspect-[3/4] relative">
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => thumbsRef.current?.scrollBy({ left: 200, behavior: "smooth" })}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 px-2 py-1 rounded-full shadow"
          >
            ❯
          </button>
        </div>
      </div>

      {/* ZOOM OVERLAY */}
      {zoom && (
        <div
          onClick={() => setZoom(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center cursor-zoom-out"
        >
          <Image
            src={imagenes[index]}
            alt={nombre}
            width={1600}
            height={2000}
            className="max-h-[95vh] w-auto object-contain"
          />
        </div>
      )}
    </>
  );
}
