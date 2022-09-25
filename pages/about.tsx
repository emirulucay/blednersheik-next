import React from "react";
import Layout from "components/Layout";
import sheik from "public/sheik.png";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

export default function About() {
  const [state, setState] = useState<boolean>();
  return (
    <>
      <Head>
        <title>blendersheik — About</title>
      </Head>
      <Layout>
        <div className="container py-40 min-h-[80vh] flex justify-between flex-wrap-reverse">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">About Me</h2>
            <p className="text-md !line-p font-inter font-regular text-white/[.6] lg:text-lg tracking-tight">
              Hey it's Yahya! I'm 19 years old from Turkey and a visual communication design student. I love creating 3D designs, models,
              animations and objects and this is my passion. And i keep improving myself.
            </p>
            <p className="text-md !line-p font-inter font-regular text-white/[.6]  lg:text-lg tracking-tight">
              I don't know if you know but I can't make money off these designs because I'm doing this for myself, not as a private
              business. It has become my hobby. That's why I opened this site to make money from my hobbies. So enjoy!
            </p>
          </div>
          <div className="w-full flex items-center justify-center md:w-1/2">
            <Image
              className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] select-none"
              src="/sheik.png"
              alt="blednersheik"
              width={350}
              height={350}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
