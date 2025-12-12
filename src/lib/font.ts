// src/lib/fonts.ts
import { Inter, Bruno_Ace } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bruno-ace",
});
