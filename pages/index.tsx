import Head from "next/head";
import Image from "next/image";
import Footer from "components/Footer";
import Header from "components/Header";
import ModelItem from "components/ModelItem";
import Link from "next/link";
import Layout from "components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>blendersheik — Yahya Apaydın</title>
      </Head>
      <Layout>
        <div className="mt-40 flex flex-col gap-4 container mx-auto py-40 disable-tap">
          <div className="pl-6 md:pl-0 flex flex-col">
            <h3 className="font-inter font-bold text-2xl text-white tracking-tight">Some Models</h3>
            <div className="w-20">
              <Link href="/models">
                <a className="font-medium font-inter text-greenLink flex">See all</a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center gap-4 md:justify-between items-center flex-wrap md:flex-nowrap">
            <ModelItem name="buzz-light-year" single={false} />
            <ModelItem name="piston-cup" single={false} />
            <ModelItem name="toy-dog" single={true} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
