import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} ${cormorant.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#faf8f5] text-[#1b1c1a] font-sans selection:bg-[#725b38] selection:text-white">
        {children}
      </body>
    </html>
  );
}
