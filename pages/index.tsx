import Head from "next/head";
import Image from "next/image";
import Footer from "components/Footer";
import Header from "components/Header";
import ModelItem from "components/ModelItem";
import Link from "next/link";
import Layout from "components/Layout";
import { useState, useRef } from "react";
import { MainContext, useContext } from "../context";

export default function Home() {
  const { theme, themeValues } = useContext(MainContext);
  const heroRef = useRef(null);

  const Explore = () => heroRef.current.scrollIntoView();
  return (
    <>
      <Head>
        <title>blendersheik — Yahya Apaydın - blender works for me</title>
      </Head>
      <Layout>
        {/* hero section */}
        <div className="mt-8 flex flex-col gap-4 min-h-[90vh] items-center font-inter w-full container py-12 md:py-24 lg:py-32">
          <h1 className="text-white text-4xl  md:text-6xl font-extrabold -tracking-[0.03em]">The Blender Sheik</h1>
          <p className="text-center text-lg md:text-xl text-white/[.75]">
            Hey, it’s Yahya. 20 years old graphical design student in
            <br />
            Turkey. These are my works. So enjoy...
          </p>
          {/* buttons div */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <a onClick={Explore} className={`${themeValues[theme]?.bg} button-md text-lg select-none`}>
              Explore
            </a>
            <Link href="/about">
              <a className={`text-white/[.85] hover:text-white font-medium text-lg leading-none`}>About</a>
            </Link>
          </div>
          {/* hero image */}
          <div className="min-w-full w-full h-full block mt-12 rounded-lg">
            <Image
              className="rounded-xl"
              src="/images/myroom-1.png"
              layout="responsive"
              priority
              quality={100}
              width={1920}
              height={1080}
              objectFit="contain"
              alt="My room"
            />
          </div>
        </div>
        {/* journey section */}
        <div className="bg-0a flex flex-col gap-12 py-12 md:py-24 lg:py-32" ref={heroRef}>
          <div className="container flex flex-col gap-4">
            <h2 className="text-white text-2xl md:text-3xl font-bold font-inter tracking-tight">My Journey Is Started In 2020.</h2>
            <p className="text-white/[.65] font-medium font-inter text-lg leading-[1.55] w-full lg:w-[900px]">
              I’m started blender in COVID-19 process. I’m fully stayed home and improved to design 3d models. I’m sharing my newest designs
              with this website. But if you wanna see my{" "}
              <Link href="oldests">
                <a className="border-b-[2px] border-white/[.45] transition-all duration-300 hover:border-white hover:text-white">designs</a>
              </Link>{" "}
              when I did beginner.
            </p>
          </div>
          <div className="container block relative">
            <Image
              className="rounded-xl"
              src="/images/myroom-2.png"
              width={1920}
              height={1200}
              layout="responsive"
              priority
              quality={100}
              objectFit="contain"
              alt="My room perspective"
            />
          </div>
        </div>
        {/* some models div */}
        <div className="py-12 md:py-24 lg:py-32 flex flex-col gap-4 container">
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
