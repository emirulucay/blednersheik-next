import "../styles/globals.css";
import { useEffect, useState } from "react";
import { MainContext } from "context";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<number>(1);

  useEffect(() => {
    setTheme(+localStorage.getItem("theme") || 1);
  }, []);

  const themeValues = {
    1: {
      bg: "greenBg",
      logo: "greenLogo",
      link: "greenLink",
    },
    2: {
      bg: "spaceBg",
      logo: "spaceLogo",
      link: "spaceLink",
    },
    3: {
      bg: "westBg",
      logo: "westLogo",
      link: "westLink",
    },
  };
  const data = {
    theme,
    setTheme,
    themeValues,
  };

  return (
    <MainContext.Provider value={data}>
      <Component {...pageProps} />;
    </MainContext.Provider>
  );
}

export default MyApp;
