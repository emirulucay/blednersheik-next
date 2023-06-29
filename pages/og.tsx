import React from "react";
import Image from "next/legacy/image";

export default function og() {
  return (
    <div>
      <Image src="/sheik.jpg" alt="blendersheik" layout="fill" objectFit="contain" />
    </div>
  );
}
