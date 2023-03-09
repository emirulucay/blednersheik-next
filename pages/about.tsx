import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import AnimatedImageChanger from "components/AnimatedImageChanger";
// import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Head>
        <title>About — blendersheik</title>
      </Head>
      <Layout>
        <div className="container mt-24 lg:mt-40 md:pb-40 flex justify-between flex-wrap-reverse">
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8">
            <h2 className="pageTitle md:text-3xl">About Me</h2>
            <p className="text-md !line-p font-inter font-regular text-87 lg:text-lg tracking-tight">
              Hey it's Yahya! I'm 19 years old from Turkey and a visual communication design student. I love creating 3D designs, models,
              animations and objects and this is my passion. And i keep improving myself.
            </p>
            <p className="text-md !line-p font-inter font-regular text-87 lg:text-lg tracking-tight">
              I don't know if you know but I can't make money off these designs because I'm doing this for myself, not as a private
              business. It has become my hobby. That's why I opened this site to make money from my hobbies. So enjoy!
            </p>
            {/* <div className="flex items-center gap-4 mt-4">
              <a href="https://instagram.com/blendersheik" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-97 transition duration-300 hover:text-white" />
              </a>
              <a href="https://instagram.com/blendersheik" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-97 transition duration-300 hover:text-white" />
              </a>
            </div> */}
          </div>
          <div className="w-full flex relative md:w-1/3 !aspect-square mb-8 md:mb-0">
            <AnimatedImageChanger />
          </div>
        </div>
      </Layout>
    </>
  );
}
