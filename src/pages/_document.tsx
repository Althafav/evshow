import BodyAnalyticsComponent from "@/components/Globals/BodyAnalyticsComponent";
import HeadAnalyticsComponent from "@/components/Globals/HeadAnalyticsComponent";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <HeadAnalyticsComponent/>
      </Head>
      <body className="antialiased ">
        <BodyAnalyticsComponent/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
