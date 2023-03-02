import React from "react";
import NextImage from "next/image";
import { ImageDetailInterface } from "types/types";
import { RiArrowRightSLine } from "react-icons/ri";

export default function ImageDetail({ width, height, src, details }: ImageDetailInterface) {
  return (
    <div className="w-full relative group">
      <div className="w-full block">
        <NextImage
          className="rounded-lg"
          objectFit="contain"
          layout="responsive"
          width={width}
          height={height}
          src={src}
          priority
          quality={100}
        />
      </div>
      {details.map((detail, index) => (
        <span
          key={index}
          style={{ left: `${detail.left}`, top: `${detail.top}` }}
          className={`select-none absolute text-white py-2 flex items-center px-4 group-hover:opacity-100 opacity-0 transition-all duration-500 bg-13/[.7]
           border-[1px] border-white/[.15] rounded-lg`}>
          {detail.name}
          <span className="-bottom-8 absolute left-0 w-6 h-6 rounded-full bg-white/[.7]"></span>
        </span>
      ))}
    </div>
  );
}
