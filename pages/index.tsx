import Head from "next/head";
import Image from "next/image";
import Footer from "components/Footer";
import Header from "components/Header";
import ModelItem from "components/ModelItem";
import Link from "next/link";
import Layout from "components/Layout";
import { useState } from "react";
import { MainContext, useContext } from "../context";

export default function Home() {
  const { theme, themeValues } = useContext(MainContext);
  return (
    <>
      <Head>
        <title>blendersheik — Yahya Apaydın - blender works for me</title>
      </Head>
      <Layout>
        <div className="mt-40 flex flex-col gap-4 container mx-auto py-40">
          <div className="pl-6 md:pl-0 flex flex-col">
            <h3 className="font-inter font-bold text-2xl text-white tracking-tight">Some Models</h3>
            <div className="w-20">
              <Link href="/models">
                <a className={`${themeValues[theme].link} font-medium font-inter flex`}>See all</a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center gap-4 md:justify-between items-center flex-wrap md:flex-nowrap">
            <ModelItem name="buzz-light-year" count={4} />
            <ModelItem name="piston-cup" count={4} />
            <ModelItem name="toy-dog" count={1} />
          </div>
        </div>
      </Layout>
    </>
  );
}
