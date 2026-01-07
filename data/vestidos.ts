export interface Vestido {
  id: number;
  nombre: string;
  color: string;
  imagen: string;        // imagen principal (catálogo, thumbnail, etc.)
  imagenes: string[];    // galería adicional
  descripcion: string;
  talles: string[];
  disponible: boolean;
}

export const vestidos: Vestido[] = [
  {
    id: 1,
    nombre: "Vestido Aurora",
    color: "Blanco marfil",
    imagen: "/vestidos/vestido-1.png",
    imagenes: [
      "/vestidos/vestido-1.png",
      "/vestidos/vestido-2.png",
      "/vestidos/vestido-3.png",
      "/vestidos/vestido-4.png",
      "/vestidos/vestido-2.png",
      "/vestidos/vestido-3.png",
      "/vestidos/vestido-4.png",
      "/vestidos/vestido-4.png"
    ],
    descripcion:
      "Silueta etérea con caída suave. Ideal para eventos de noche y civil elegante.",
    talles: ["S", "M", "L"],
    disponible: true,
  },
  {
    id: 2,
    nombre: "Vestido Luma",
    color: "Negro profundo",
    imagen: "/vestidos/vestido-2.png",
    imagenes: [
      "/vestidos/vestido-2.png",
      "/vestidos/vestido-3.png"
    ],
    descripcion:
      "Negro atemporal, falda fluida y escote discreto. Elegancia sin esfuerzo.",
    talles: ["S", "M"],
    disponible: true,
  },
  {
    id: 3,
    nombre: "Vestido Siena",
    color: "Arena",
    imagen: "/vestidos/vestido-3.png",
    imagenes: [
      "/vestidos/vestido-3.png"
    ],
    descripcion:
      "Tonos cálidos y textura suave. Perfecto para eventos al aire libre.",
    talles: ["M", "L"],
    disponible: false,
  },
  {
    id: 4,
    nombre: "Vestido Nox",
    color: "Gris humo",
    imagen: "/vestidos/vestido-4.png",
    imagenes: [
      "/vestidos/vestido-4.png"
    ],
    descripcion:
      "Minimalista y sofisticado. Líneas puras y corte moderno.",
    talles: ["S", "M", "L"],
    disponible: true,
  },
  {
    id: 5,
    nombre: "Vestido Alba",
    color: "Champagne",
    imagen: "/vestidos/vestido-2.png",
    imagenes: [
      "/vestidos/vestido-2.png"
    ],
    descripcion:
      "Brillo sutil y movimiento ligero. Diseñado para ser protagonista.",
    talles: ["XS", "S", "M"],
    disponible: true,
  },
];
