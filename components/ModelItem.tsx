import React from "react";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Model } from "types/types";
import { MainContext, useContext } from "context";

/*
  bir array ile resimleri alacağız. 
  en fazla 5 resim olabilecek. 
  seçili resim state'i büyük resmi tutacak. eğer diğer resimler seçilirse state güncellenecek
  ardından büyük olan resim küçük, seçilen resim büyük hale gelecek.
  mobil halde resimler division'ı yukarıda absolute ile konumlandırılacak. flex olacak.
  web halinde resimler division'ı solda bulunacak.
*/
export default function ModelItem({ name, count }: Model) {
  const details = {
    name: name.replaceAll("-", " "),
    link1: `/models/${name}/${name}-1.png`,
    link2: `/models/${name}/${name}-2.png`,
    link3: `/models/${name}/${name}-3.png`,
    link4: `/models/${name}/${name}-4.png`,
  };

  interface Selected {
    selected: string;
    otherImages: string[];
  }

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<Selected>({
    selected: `/models/${name}/${name}-1.png`,
    otherImages: [`/models/${name}/${name}-2.png`, `/models/${name}/${name}-3.png`, `/models/${name}/${name}-4.png`],
  });

  const handleImage = (image) => {
    var otherImages = selectedImg.otherImages;
    var newImage, newArray, index;
    var fullArray = [
      `/models/${name}/${name}-1.png`,
      `/models/${name}/${name}-2.png`,
      `/models/${name}/${name}-3.png`,
      `/models/${name}/${name}-4.png`,
    ];
    if (image === "image4") {
      newImage = otherImages[2];
      newArray = fullArray.filter((item) => item !== newImage);
      setSelectedImg({
        selected: newImage,
        otherImages: newArray,
      });
      return;
    } else if (image === "image3") {
      newImage = otherImages[1];
      newArray = fullArray.filter((item) => item !== newImage);
      setSelectedImg({
        selected: newImage,
        otherImages: newArray,
      });
      return;
    } else if (image === "image2") {
      newImage = otherImages[0];
      newArray = fullArray.filter((item) => item !== newImage);
      setSelectedImg({
        selected: newImage,
        otherImages: newArray,
      });
      return;
    }
  };

  const { themeValues, theme } = useContext(MainContext);

  return (
    <div className={`sm:mx-0 cursor-pointer group relative aspect-square w-full h-full`}>
      {/* sayfada görünen resim */}
      <div
        className="relative flex items-center justify-center rounded-lg transition-all duration-300
        model-content w-full md:w-full aspect-square group overflow-hidden">
        <div className="block w-full h-full p-6">
          <Image
            className="z-10 block transition-all duration-500"
            src={`/models/${name}/${name}-1.png`}
            alt={details.name}
            width="100%"
            height="100%"
            quality={100}
            priority
            layout="responsive"
            objectFit="contain"
            onClick={() => setShowDetail(true)}
          />
        </div>
        <div
          className={`${themeValues[theme]?.bg} group-hover:blur-[64px] w-2/3 h-[200%] absolute transition-opacity opacity-0 duration-1000 group-hover:animate-rotate invisible group-hover:visible hover:backdrop-blur-md`}></div>
        <div className={`bg-18 w-[99%] h-[99%] absolute rounded-lg transition duration-300`}></div>
        {/* <span className="little-logo font-thin">{details.name}</span> */}
      </div>
      {/* arka planı bulanıklaştıran division */}
      <div
        onClick={() => setShowDetail(false)}
        className={classNames("fixed backdrop-blur-md top-0 left-0 w-full h-full z-20 cursor-default select-none", {
          "!hidden": !showDetail,
        })}></div>
      {/* click olduğunda açılan bölümleri kapsayan root div */}
      <div
        className={classNames(
          "w-2/3 items-center md:items-start overflow-hidden md:w-[400px] lg:w-[700px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 flex flex-col lg:flex-row gap-2",
          {
            hidden: !showDetail,
          },
          {
            "justify-center": count < 2,
          }
        )}>
        {/* duruma göre solda veya yukarıda çıkan diğer açılardan resimler */}
        <div
          className={classNames("flex flex-row lg:flex-col w-full justify-start lg:w-1/4 items-start cursor-default", {
            "!hidden": count < 2,
          })}>
          <div
            className={classNames(
              "bg-13/[0.6] rounded-lg border-[1px] w-full relative md:w-1/3 lg:w-full xl:w-full border-white/[0.15] transition-all flex items-center justify-center duration-300 z-40 p-2 select-none cursor-pointer",
              { "!w-2/4": count < 3 }
            )}
            onClick={() => handleImage("image2")}>
            <div className="block w-full aspect-square h-full">
              {count > 1 ? (
                <Image
                  src={selectedImg.otherImages[0]}
                  alt="item"
                  width="100%"
                  height="100%"
                  quality={100}
                  priority
                  layout="responsive"
                  objectFit="contain"
                />
              ) : (
                <Image
                  src={selectedImg.otherImages[0]}
                  alt="item"
                  width="100%"
                  height="100%"
                  quality={100}
                  layout="responsive"
                  objectFit="contain"
                />
              )}
            </div>
          </div>
          <div
            className={classNames(
              "bg-13/[0.6] rounded-lg border-[1px] relative w-full md:w-1/3 lg:w-full xl:w-full border-white/[0.15] transition-all flex items-center justify-center duration-300 z-40 p-2 select-none cursor-pointer",
              {
                "!hidden invisible": count < 3,
              }
            )}
            onClick={() => handleImage("image3")}>
            <div className="block w-full aspect-square h-full">
              {count > 2 ? (
                <Image
                  src={selectedImg.otherImages[1]}
                  alt="item"
                  width="100%"
                  height="100%"
                  quality={100}
                  priority
                  layout="responsive"
                  objectFit="contain"
                />
              ) : (
                <Image
                  src={selectedImg.otherImages[1]}
                  alt="item"
                  width="100%"
                  height="100%"
                  quality={100}
                  layout="responsive"
                  objectFit="contain"
                />
              )}
            </div>
          </div>
          <div
            className={classNames(
              "bg-13/[0.6] rounded-lg border-[1px] relative w-full md:w-1/3 lg:w-full xl:w-full border-white/[0.15] transition-all flex items-center justify-center duration-300 z-40 p-2 select-none cursor-pointer",
              {
                "!hidden invisible": count < 4,
              }
            )}
            onClick={() => handleImage("image4")}>
            <div className="block w-full h-full">
              {count > 3 ? (
                <Image
                  src={selectedImg.otherImages[2]}
                  alt="item"
                  width="100%"
                  height="100%"
                  quality={100}
                  priority
                  layout="responsive"
                  objectFit="contain"
                />
              ) : (
                <Image
                  src={selectedImg.otherImages[2]}
                  alt="item"
                  width="100%"
                  height="100%"
                  quality={100}
                  layout="responsive"
                  objectFit="contain"
                />
              )}
            </div>
          </div>
        </div>
        {/* tıklandığında açılan büyük resim */}
        <div className="bg-13/[0.6] rounded-lg w-full lg:w-3/4 transition duration-300 aspect-square shadow z-40 flex items-center justtify-center">
          <div className="block w-full aspect-square">
            <Image
              className={classNames("z-20", { "!hidden": !showDetail })}
              src={selectedImg.selected}
              alt={details.name}
              width="100%"
              height="100%"
              priority
              quality={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
