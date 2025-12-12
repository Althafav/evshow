import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { inter, brunoAce } from "../lib/font";
import LayoutComponent from "@/components/Globals/Layout/LayoutComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${brunoAce.variable}`}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </main>
  );
}
