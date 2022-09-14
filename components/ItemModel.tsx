import React, { useEffect } from "react";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";

/*
  bir array ile resimleri alacağız. 
  en fazla 5 resim olabilecek. 
  seçili resim state'i büyük resmi tutacak. eğer diğer resimler seçilirse state güncellenecek
  ardından büyük olan resim küçük, seçilen resim büyük hale gelecek.
  mobil halde resimler division'ı yukarıda absolute ile konumlandırılacak. flex olacak.
  web halinde resimler division'ı solda bulunacak.
*/
export default function Item({ name }: any) {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  // const [selectedImg, setSelectedImg] = useState<string>("");

  return (
    <div className="inline-block cursor-pointer item group relative duration-600">
      <div className="bg-13 flex items-center justify-center rounded-lg p-8 transition-all duration-500 border-[1px] border-white/[0.15]">
        <Image
          className="z-10 inline-block transition-all duration-500 group-hover:scale-110"
          src={`/models/${name}/${name}.png`}
          alt="item"
          width={280}
          height={280}
          onClick={() => setShowDetail(true)}
        />
      </div>
      <div
        onClick={() => setShowDetail(false)}
        className={classNames("fixed backdrop-blur-md top-0 left-0 w-full h-full fixed z-20 transition-all duration-300 cursor-default", {
          "!hidden": !showDetail,
        })}></div>
      <div
        className={classNames(
          "fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-8 bg-13/[0.6] border-[1px] border-white/[0.15] rounded-lg hover:specShadow z-20 transition-all duration-300 shadow",
          {
            hidden: !showDetail,
          }
        )}>
        <Image
          className={classNames("z-20", { "!hidden": !showDetail })}
          src={`/models/${name}/${name}.png`}
          alt="item"
          width={450}
          height={450}
        />
      </div>
    </div>
  );
}
