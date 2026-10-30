import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://limpia-vida.isahecam.com"),
  title: {
    default: "Limpia Vida — Productos de limpieza",
    template: "%s | Limpia Vida",
  },
  description: "Sistema de punto de venta para productos de limpieza.",
  openGraph: {
    title: "Limpia Vida — Productos de limpieza",
    description: "Sistema de punto de venta para productos de limpieza.",
    url: "/",
    siteName: "Limpia Vida",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpia Vida — Productos de limpieza",
    description: "Sistema de punto de venta para productos de limpieza.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

/** Equivalen a `--primary` de `globals.css` */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0669e1" },
    { media: "(prefers-color-scheme: dark)", color: "#4599ff" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
