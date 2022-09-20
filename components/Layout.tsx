import Header from "./Header";
import Footer from "./Footer";
import { MainContext, useContext } from "context";

export default function Layout({ children }) {
  const { theme, themeValues } = useContext(MainContext);
  return (
    <div className={`${themeValues[theme]?.selection}  selection:text-white`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
