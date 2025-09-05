// src/app/_app.tsx
"use client";

import "../globals.css"; // Adjust if your global CSS is in a different path
import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google Tag Manager - Head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KRD7X9Z2');
            `,
          }}
        />
      </Head>

      {/* Google Tag Manager - Body */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KRD7X9Z2"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Main component */}
      <Component {...pageProps} />
    </>
  );
}
