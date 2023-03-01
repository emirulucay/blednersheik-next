import Header from "./Header";
import Footer from "./Footer";
import { MainContext, useContext } from "context";
import Head from "next/head";

export default function Layout({ children }) {
  const { theme, themeValues } = useContext(MainContext);
  return (
    <div className={`${themeValues[theme]?.selection}  selection:text-white w-full`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href="https://blendersheik.com" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
