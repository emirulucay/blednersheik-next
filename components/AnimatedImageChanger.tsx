import React from "react";
import Image from "next/image";
import { MainContext, useContext } from "context";
import cx from "classnames";

export default function AnimatedImageChanger() {
  const { theme, themeValues } = useContext(MainContext);

  return (
    <div className="w-full relative">
      <Image
        className={cx("absolute top-0 left-0 w-full aspect-square select-none rounded-lg transition duration-300 delay-700", {
          "animate-viewToBlur opacity-0": theme !== 1,
          "animate-blurToView opacity-100": theme === 1,
        })}
        src="/images/about/orange.jpg"
        alt="Blendersheik"
        layout="fill"
        objectFit="contain"
        priority
      />
      <Image
        className={cx("absolute top-0 left-0 w-full aspect-square select-none rounded-lg transition duration-300 delay-700", {
          "animate-viewToBlur opacity-0": theme !== 2,
          "animate-blurToView opacity-100": theme === 2,
        })}
        src="/images/about/blue.jpg"
        alt="Blendersheik"
        layout="fill"
        objectFit="contain"
        priority
      />
      <Image
        className={cx("absolute top-0 left-0 w-full aspect-square select-none rounded-lg transition duration-300 delay-700", {
          "animate-viewToBlur opacity-0": theme !== 3,
          "animate-blurToView opacity-100": theme === 3,
        })}
        src="/images/about/green.jpg"
        alt="Blendersheik"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
}
