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
    switch (image) {
      case "image4":
        newImage = otherImages[2];
        newArray = fullArray.filter((item) => item !== newImage);
        setSelectedImg({
          selected: newImage,
          otherImages: newArray,
        });
        break;
      case "image3":
        newImage = otherImages[1];
        newArray = fullArray.filter((item) => item !== newImage);
        setSelectedImg({
          selected: newImage,
          otherImages: newArray,
        });
        break;
      case "image2":
        newImage = otherImages[0];
        newArray = fullArray.filter((item) => item !== newImage);
        setSelectedImg({
          selected: newImage,
          otherImages: newArray,
        });
        break;
    }
  };

  const { themeValues, theme } = useContext(MainContext);

  return (
    <div className={`mx-auto md:mx-0 inline-block cursor-pointer group relative`}>
      {/* sayfada görünen resim */}
      <div
        className="relative flex items-center justify-center rounded-lg transition-all duration-300 border-[1px] border-white/[0.15]
        model-content sm:w-[30vw] sm:h-[30vw] md:w-[30vwpx] md:h-[30vwpx] lg:w-[22vw] lg:h-[22vw] xl:w-[22vw] xl:h-[22vw] 2xl:w-[19vw] 2xl:h-[19vw] p-4 group overflow-hidden">
        <Image
          className="z-10 inline-block transition-all duration-500 group-hover:animate-zoom"
          src={`/models/${name}/${name}-1.png`}
          alt={details.name}
          width="280%"
          height="280%"
          layout="intrinsic"
          objectFit="contain"
          onClick={() => setShowDetail(true)}
        />
        <div
          className={`${themeValues[theme]?.bg} w-1/2 h-[200%] absolute transition-opacity opacity-0 group-hover:opacity-100 duration-1000 group-hover:animate-rotate invisible group-hover:visible`}></div>
        <div className={`bg-13 w-[98%] h-[98%] absolute rounded-lg transition duration-300`}></div>
        <span className="little-logo font-medium">{details.name}</span>
      </div>
      <div
        onClick={() => setShowDetail(false)}
        className={classNames(
          "fixed backdrop-blur-md top-0 left-0 w-full h-full z-20 transition-all duration-300 cursor-default select-none",
          {
            "!hidden": !showDetail,
          }
        )}></div>
      <div
        className={classNames(
          "w-full md:w-auto px-2 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 flex flex-col lg:flex-row gap-2",
          {
            hidden: !showDetail,
          }
        )}>
        {/* alttaki/yandaki resimler */}
        <div
          className={classNames(" flex flex-row lg:flex-col gap-2 items-start cursor-default justifyt-start", {
            "hidden invisible": count < 2,
          })}>
          <div
            className="bg-13/[0.6] border-[1px] border-white/[0.15] rounded-lg transition-all duration-300 z-40 p-2 select-none cursor-pointer"
            onClick={() => handleImage("image2")}>
            <Image src={selectedImg.otherImages[0]} alt="item" width="150%" height="150%" layout="intrinsic" objectFit="contain" />
          </div>
          <div
            className={classNames(
              "p-2 bg-13/[0.6] border-[1px] border-white/[0.15] rounded-lg transition-all duration-300 z-40 select-none cursor-pointer",
              {
                "hidden invisible": count < 3,
              }
            )}
            onClick={() => handleImage("image3")}>
            <Image src={selectedImg.otherImages[1]} alt="item" width="150%" height="150%" layout="intrinsic" objectFit="contain" />
          </div>
          <div
            className={classNames(
              "p-2 bg-13/[0.6] border-[1px] border-white/[0.15] rounded-lg transition-all duration-300 shadow z-40 select-none cursor-pointer",
              {
                "hidden invisible": count < 4,
              }
            )}
            onClick={() => handleImage("image4")}>
            <Image src={selectedImg.otherImages[2]} alt="item" width="150%" height="150%" layout="intrinsic" objectFit="contain" />
          </div>
        </div>
        {/* clicked büyük image */}
        <div className="bg-13/[0.6] border-[1px] px-4 border-white/[0.15] rounded-lg transition duration-300 shadow z-40 flex items-center justify-center">
          <Image
            className={classNames("z-20 sm:w-full sm:h ", { "!hidden": !showDetail })}
            src={selectedImg.selected}
            alt={details.name}
            width="400%"
            height="400%"
            layout="intrinsic"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
