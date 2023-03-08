import Head from "next/head";
import Image from "next/image";
import Footer from "components/Footer";
import Header from "components/Header";
import ModelItem from "components/ModelItem";
import Link from "next/link";
import Layout from "components/Layout";
import { useState, useRef, useEffect } from "react";
import { MainContext, useContext } from "../context";
import { homeModels } from "data/models";
import { homeBuilds } from "data/builds";
import cx from "classnames";
import BuildItem from "components/BuildItem";

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
        <div className="mt-8 flex flex-col gap-4 min-h-[90vh] items-center font-inter w-full container py-16 md:py-24 lg:py-32">
          <h1 className="text-white text-4xl  md:text-6xl font-extrabold -tracking-[0.03em] fade-text">The Blender Sheik</h1>
          <p className="text-center text-lg md:text-xl text-97 max-w-[522px]">
            Hey, it’s Yahya. 19 years old graphical design student in Turkey. These are my works. So enjoy...
          </p>
          {/* buttons div */}
          {/* <div className="flex items-center justify-center gap-6 mt-4">
            <a onClick={Explore} className={`${themeValues[theme]?.bg} button-md text-lg select-none`}>
              Explore
            </a>
            <Link href="/about">
              <a className={`text-white/[.85] hover:text-white font-medium text-lg leading-none`}>About</a>
            </Link>
          </div> */}
          {/* hero image */}
          <div className="min-w-full w-full h-full block mt-8 rounded-lg relative lg:px-16">
            <Image
              className="rounded-xl"
              src="/images/myroom-1.png"
              layout="responsive"
              priority
              quality={100}
              width={2880}
              height={1620}
              objectFit="contain"
              alt="My room"
            />
          </div>
        </div>
        {/* journey section */}
        <div className="bg-0a flex flex-col gap-12 py-16 md:py-24 lg:py-32" ref={heroRef}>
          <div className="container flex flex-col gap-4">
            <h2 className="pageTitle md:text-3xl fade-text">My Journey Started In 2020.</h2>
            <p className="text-97 font-medium font-inter text-md md:text-lg leading-[1.55] w-full lg:w-[900px]">
              I started blender in COVID-19 process. I’m fully stayed home and improved to design 3d models. I’m sharing my newest designs
              with this website.
            </p>
          </div>
          <div className="container block relative">
            <Image
              className="rounded-xl"
              src="/images/myroom-2.png"
              width={1920}
              height={1080}
              layout="responsive"
              priority
              quality={100}
              // objectFit="contain"
              alt="My room perspective"
            />
          </div>
        </div>
        {/* some models div */}
        <div className="py-12 mt-8 flex flex-col gap-6 container">
          <div className="flex flex-col">
            <h3 className="pageTitle md:text-3xl fade-text">Some Models In My Collection</h3>
            <div className="float-left">
              <Link href="/models">
                <a className={`${themeValues[theme]?.link} float-left text-md font-medium font-inter flex`}>See All</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap">
            {homeModels.map((model, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <ModelItem name={model.name} key={index} count={model.count} />
              </div>
            ))}
          </div>
        </div>
        {/* some builds div */}
        <div className="mt-4 py-12 flex flex-col gap-6 container">
          <div className="flex flex-col">
            <h3 className="pageTitle md:text-3xl fade-text">Some Builds In My Collection</h3>
            <div className="float-left">
              <Link href="/builds">
                <a className={`${themeValues[theme]?.link} float-left text-md font-medium font-inter flex`}>See All</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap">
            {homeBuilds.map((build, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <BuildItem name={build.name} key={index} count={build.count} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

{
  /*  */
}
