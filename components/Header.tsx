import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { Router, useRouter } from "next/router";

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <div>
      <header className="fixed top-0 h-[66px] left-0 w-full bg-darkbg/[0.98] before:absolute before:bottom-0 before:bg-a2 before:w-full before:h-[0.5px] z-50 before:z-100">
        <div
          onClick={() => setBurgerOpen((prev) => !prev)}
          className={classNames(
            "z-20 flex w-6 absolute left-6 top-1/2 md:hidden text-gray-100 -translate-y-1/2 flex items-center justify-center flex-col gap-3 cursor-pointer p-2",
            { "!gap-0": burgerOpen }
          )}>
          <span className={classNames("w-6 h-[1px] bg-white block transition-all duration-100", { "rotate-45": burgerOpen })}></span>
          <span
            className={classNames("w-6 h-[1px] bg-white block transition-all duration-100", {
              "-rotate-45 -translate-y-[1px]": burgerOpen,
            })}></span>
        </div>
        <div className="relative container mx-auto flex justify-center md:justify-between items-center h-[66px]">
          <h1>
            <Link href="/">
              <a className="logo text-white font-inter font-bold text-[24px] select-none">blednersheik</a>
            </Link>
          </h1>
          <ul className="md:flex align-center justify-center gap-10 hidden">
            <li>
              <a className="text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none" href="#">
                Buy
              </a>
            </li>
            <li>
              <Link href="/models">
                <a
                  className={classNames("text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none", {
                    "!text-white": router.pathname == "/models",
                  })}>
                  Models
                </a>
              </Link>
            </li>
            <li>
              <Link href="/builds">
                <a
                  className={classNames("text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none", {
                    "!text-white": router.pathname == "/builds",
                  })}>
                  Builds
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={classNames("text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none", {
                    "!text-white": router.pathname == "/about",
                  })}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={classNames("text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none", {
                    "!text-white": router.pathname == "/contact",
                  })}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div className="hidden md:block">
            <a
              className="button-sm font-inter transition duration-300 select-none text-sm !font-regular"
              href="https://www.instagram.com/blednersheik/"
              target="_blank"
              rel="noreferrer noopener">
              Go Instagram
            </a>
          </div>
          <ul
            className={classNames(
              "w-full h-[100vh] flex md:hidden absolute top-[67px] left-0 flex-col bg-09 gap-8 px-6 py-6 transition duration-300",
              {
                "-translate-x-[100%] invisible": !burgerOpen,
              }
            )}>
            <li>
              <a className="text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl" href="#">
                Buy
              </a>
            </li>
            <li>
              <Link href="/models">
                <a
                  className={classNames(
                    "text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl",
                    {
                      "!text-white": router.pathname == "/models",
                    }
                  )}
                  href="#">
                  Models
                </a>
              </Link>
            </li>
            <li>
              <Link href="/builds">
                <a
                  className={classNames(
                    "text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl",
                    {
                      "!text-white": router.pathname == "/builds",
                    }
                  )}
                  href="#">
                  Builds
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={classNames(
                    "text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl",
                    {
                      "!text-white": router.pathname == "/about",
                    }
                  )}
                  href="#">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={classNames(
                    "text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl",
                    {
                      "!text-white": router.pathname == "/contact",
                    }
                  )}
                  href="#">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <a
                className="text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl"
                href="https://www.instagram.com/blednersheik/"
                target="_blank"
                rel="noreferrer noopener">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
