import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Item from "../components/ItemModel";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-40 flex flex-col gap-4 container mx-auto py-40">
        <div className="pl-6 md:pl-0 flex flex-col">
          <h3 className="font-inter font-bold text-2xl text-white tracking-tight">Some Models</h3>
          <div className="w-20">
            <Link href="/models">
              <a className="font-medium font-inter text-greenLink flex">See all</a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 lg:justify-between items-center flex-wrap">
          <Item name="piston-cup" />
          <Item name="piston-cup" />
          <Item name="piston-cup" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
