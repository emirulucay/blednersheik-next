import "../styles/globals.css";
import { useEffect, useState } from "react";
import { MainContext } from "context";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<number>(0);
  useEffect(() => {
    setTheme(+localStorage.getItem("theme") || 1);
  }, []);

  const themeValues = {
    1: {
      bg: "westBg",
      logo: "westLogo",
      link: "westLink",
      selection: "selection:bg-westSelection",
      bgShadow: "westBgShadow",
      name: "Magic Sunset",
    },
    2: {
      bg: "spaceBg",
      logo: "spaceLogo",
      link: "spaceLink",
      selection: "selection:bg-spaceSelection",
      bgShadow: "spaceBgShadow",
      name: "Glacier Blue",
    },
    3: {
      bg: "greenBg",
      logo: "greenLogo",
      link: "greenLink",
      selection: "selection:bg-greenSelection",
      bgShadow: "greenBgShadow",
      name: "Alien Green",
    },
  };
  const data = {
    theme,
    setTheme,
    themeValues,
  };

  return (
    <MainContext.Provider value={data}>
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}

export default MyApp;
