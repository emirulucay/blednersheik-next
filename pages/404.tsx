import React from "react";
import AnimatedImageChanger from "components/AnimatedImageChanger";
import Layout from "components/Layout";
import Head from "next/head";
import Link from "next/link";
import { MainContext, useContext } from "context";

export default function NotFound() {
  const { theme, themeValues } = useContext(MainContext);

  return (
    <>
      <Head>
        <title>404 Page </title>
      </Head>
      <Layout>
        <div className="container w-full items-center flex min-h-[80vh] gap-2 md:gap-8 flex-col-reverse md:flex-row mt-20">
          <div className="w-full flex md:w-1/3 !aspect-square">
            <AnimatedImageChanger />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2 pb-8 items-start">
            <h6 className="pageTitle text-2xl">The page is not found.</h6>
            <p className="text-97 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem mollitia nisi in iste. Ut deleniti aperiam
              nihil ad inventore.
            </p>
            <Link href="/">
              <a className={`${themeValues[theme]?.bg} button-md select-none mt-4`}>Go Homepage</a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
