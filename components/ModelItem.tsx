import React from "react";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Model } from "types/types";

/*
  bir array ile resimleri alacağız. 
  en fazla 5 resim olabilecek. 
  seçili resim state'i büyük resmi tutacak. eğer diğer resimler seçilirse state güncellenecek
  ardından büyük olan resim küçük, seçilen resim büyük hale gelecek.
  mobil halde resimler division'ı yukarıda absolute ile konumlandırılacak. flex olacak.
  web halinde resimler division'ı solda bulunacak.
*/
export default function ModelItem({ name, single }: Model) {
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

  return (
    <div className="inline-block cursor-pointer group relative">
      {/* sayfada görünen resim */}
      <div
        className="bg-13 flex items-center justify-center rounded-lg p-6 transition-all duration-300 border-[1px] border-white/[0.15]
       model-content sm:w-[280px] sm:h-[280px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px] xl:w-[325px] xl:h-[325px] 2xl:w-[350px] 2xl:h-[350px] group">
        <Image
          className="z-10 inline-block transition-all duration-200 group-hover:drop-shadow-orange"
          src={`/models/${name}/${name}-1.png`}
          alt={details.name}
          width={300}
          height={300}
          layout="intrinsic"
          onClick={() => setShowDetail(true)}
        />
        <span className="little-logo font-inter font-semibold">{details.name}</span>
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
        className={classNames("fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 flex flex-col lg:flex-row gap-2", {
          hidden: !showDetail,
        })}>
        {/* alttaki/yandaki resimler */}
        <div
          className={classNames("flex flex-row lg:flex-col justify-between items-start", {
            hidden: single,
          })}>
          <div
            className="bg-13/[0.6] border-[1px] border-white/[0.15] rounded-lg transition-all duration-300 shadow z-40 p-2 select-none"
            onClick={() => handleImage("image2")}>
            <Image src={selectedImg.otherImages[0]} alt="item" width={120} height={120} />
          </div>
          <div
            className="p-2 bg-13/[0.6] border-[1px] border-white/[0.15] rounded-lg transition-all duration-300 shadow z-40 select-none"
            onClick={() => handleImage("image3")}>
            <Image src={selectedImg.otherImages[1]} alt="item" width={120} height={120} />
          </div>
          <div
            className="p-2 bg-13/[0.6] border-[1px] border-white/[0.15] rounded-lg transition-all duration-300 shadow z-40 select-none"
            onClick={() => handleImage("image4")}>
            <Image src={selectedImg.otherImages[2]} alt="item" width={120} height={120} />
          </div>
        </div>
        <div className="p-2 bg-13/[0.6] border-[1px] border-white/[0.15] rounded-lg transition-all duration-300 shadow z-40">
          <Image
            className={classNames("z-20", { "!hidden": !showDetail })}
            src={selectedImg.selected}
            alt={details.name}
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
