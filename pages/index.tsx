import Head from "next/head";
import Image from "next/image";
import ModelItem from "components/ModelItem";
import Link from "next/link";
import Layout from "components/Layout";
import { useRef } from "react";
import { MainContext, useContext } from "../context";
import { homeModels } from "data/models";
import { homeBuilds } from "data/builds";
import BuildItem from "components/BuildItem";
import { motion } from "framer-motion";
// import cx from "classnames";

export default function Home() {
  const { theme, themeValues } = useContext(MainContext);
  const heroRef = useRef(null);

  // const Explore = () => heroRef.current.scrollIntoView();
  return (
    <>
      <Head>
        <title>blendersheik — Yahya Apaydın - blender works for me</title>
      </Head>
      <Layout>
        {/* hero section */}
        <div className="flex flex-col gap-3 min-h-[90vh] items-center font-inter w-full container py-16 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(-10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ ease: "easeOut", duration: 0.4 }}>
            <h1 className="text-white text-4xl md:text-6xl font-bold -tracking-[0.03em] fade-text">The Blender Sheik</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(-10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.15 }}>
            <p className="text-center text-lg md:text-lg text-97 max-w-[522px]">
              Hey, it’s Yahya. 19 years old graphical design student in Turkey. These are my works. So enjoy...
            </p>{" "}
          </motion.div>

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
          <motion.div
            initial={{ opacity: 0, transform: "translateY(-15px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 0.3 }}
            className="min-w-full w-full h-full block rounded-lg relative mt-8">
            <Image
              className="rounded-md"
              src="/images/homepage/1.png"
              layout="responsive"
              priority
              quality={100}
              width={2880}
              height={1620}
              objectFit="contain"
              alt="My room"
            />
          </motion.div>
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
              className="rounded-md"
              src="/images/homepage/2.png"
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
              <Link href="/models" className={`${themeValues[theme]?.link} float-left text-md font-medium font-inter flex`}>
                See All
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
              <Link href="/builds" className={`${themeValues[theme]?.link} float-left text-md font-medium font-inter flex`}>
                See All
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
