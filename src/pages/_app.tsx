import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { inter, brunoAce } from "../lib/font";
import LayoutComponent from "@/components/Globals/Layout/LayoutComponent";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  useEffect(() => {
    const isArabic = locale === "ar";

    document.documentElement.lang = locale ?? "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    // Optional: add helper class for styling
    document.documentElement.classList.toggle("rtl", isArabic);
  }, [locale]);

  return (
    <main className={`${inter.variable} ${brunoAce.variable}`}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </main>
  );
}
