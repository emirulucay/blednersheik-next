import React from "react";
import Image from "next/image";

export default function () {
  return (
    <div>
      <Image src="/sheik.jpg" alt="blendersheik" layout="fill" objectFit="contain" />
    </div>
  );
}
