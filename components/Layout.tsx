import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="selection:bg-bgGreen selection:text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
