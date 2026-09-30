import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Infra Housing — Sovereign Asset Class Real Estate | Atelier Solis",
  description: "Curating transcendental vertical penthouses, super-tall monoliths, and bespoke architectural landmarks across Dubai, New York, London, and Tokyo.",
  keywords: ["ultra luxury real estate", "sovereign assets", "penthouse", "architectural masterwork", "3D GIS real estate", "BIM 3D portal"],
  authors: [{ name: "Infra Housing Architecture Studio" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#faf8f5] text-[#1b1c1a] font-sans selection:bg-[#725b38] selection:text-white">
        {children}
      </body>
    </html>
  );
}
