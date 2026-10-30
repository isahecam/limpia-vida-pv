import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Limpia Vida — Productos de limpieza",
    short_name: "Limpia Vida",
    description: "Sistema de punto de venta para productos de limpieza.",
    start_url: "/",
    display: "standalone",
    background_color: "#dfeeff",
    theme_color: "#0669e1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
