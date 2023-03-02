import { MainContext, useContext } from "context";

export default function Footer() {
  const { theme, themeValues } = useContext(MainContext);
  return (
    <footer className="relative mt-24 before:absolute before:-top-[1px] before:bg-a2/[.7] before:w-full before:h-[0.5px] z-10 before:z-10 bg-0a py-12 content-end flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h4 className={`${themeValues[theme]?.logo} logo font-inter font-semibold text-[24px] select-none`}>blendersheik</h4>
        <p className="font-inter text-87">blendersheik © 2022. All rights reserved</p>
        <p className="absolute bottom-6 text-center font-inter text-sm text-gray-500">
          created with ❤️ by{" "}
          <a
            className="text-gray-400 hover:text-white transition-all duration-200"
            href="https://emirulucay.com"
            rel="noopener noreferrer"
            target="_blank">
            Emir
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}
