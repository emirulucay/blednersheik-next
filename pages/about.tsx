import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import sheik from "public/sheik.png";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col min-h-[100vh] selection:bg-bgPurple selection:text-gray-300">
        <Header />
        <div className="container mx-auto flex justify-between items-center mt-24 md:mt-40 flex-wrap-reverse">
          <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center items-center content-center">
            <p className="text-md !line-p font-inter font-medium text-87 lg:text-lg tracking-tight">
              Hey it's Yahya! I'm 18 years old from Turkey and a visual communication design student. I love creating 3D designs, models,
              animations and objects and this is my passion. And i keep improving myself.
            </p>
            <p className="text-md !line-p font-inter font-medium text-87 lg:text-lg tracking-tight">
              I don't know if you know but I can't make money off these designs because I'm doing this for myself, not as a private
              business. It has become my hobby. That's why I opened this site to make money from my hobbies. So enjoy!
            </p>
          </div>
          <div className="w-full flex items-center justify-center mb-12 md:w-1/2">
            <Image
              className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] select-none"
              src="/sheik.png"
              alt="blednersheik"
              width={350}
              height={350}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
