import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "blendersheik — Yahya Apaydın, blender works for me.",
    description: "The Blender Sheik — Yahya Apaydın. 3D Artist. Creating awesome models.",
    url: "https://blendersheik.com",
  };
  return (
    <Html>
      <Head>
        {/* <link rel="preload" href="/static/fonts/Inter.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta name="googlebot" content="index, follow" />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
        <meta name="keywords" content="Yahya Apaydın, 3D Artist, blender" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="shortcut icon" sizes="16x16" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content={meta.url} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
