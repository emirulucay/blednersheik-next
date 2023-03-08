import { useEffect, useRef, useState } from "react";
import { MainContext, useContext } from "context";
import classNames from "classnames";
import { DownArrow } from "lib/icons";

export default function ThemeChanger() {
  const menuRef = useRef(null);
  const menuButton = useRef(null);
  const { theme, themeValues, setTheme } = useContext(MainContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    document.onclick = (e) => {
      if (!e.composedPath().includes(menuRef.current) && !e.composedPath().includes(menuButton.current)) {
        showMenu === true ? setShowMenu(false) : "";
      }
    };
  }, [showMenu]);

  return (
    <div className="relative select-none transition duration-300">
      <div
        ref={menuButton}
        className={`flex items-center gap-2 border border-3a px-3 py-2 rounded-full cursor-pointer group transition duration-300`}
        onClick={() => setShowMenu((prev) => !prev)}>
        <div className={`${themeValues[theme]?.bg} transition-all w-[18px] h-[18px] rounded-full`}></div>
        <div className="text-cc leading-none tracking-tight flex items-center gap-2 transition duration-300 group-hover:text-white w-28">
          {themeValues[theme]?.name}
          <DownArrow />
        </div>
      </div>
      <div
        className={classNames(
          "absolute z-[1000] -left-[18px] top-10 p-1 bg-[#090909] backdrop-blur-md border border-3a rounded-lg transition-opacity duration-500 w-[200px] overflow-hidden",
          {
            "-translate-y-[200%] opacity-0 unvisible": !showMenu,
          }
        )}>
        <ul className="flex flex-col" ref={menuRef}>
          <li
            className="text-97
             tracking-tight w-full flex items-center gap-2 px-3 py-[9px] hover:bg-a2/[0.6] rounded-md cursor-pointer hover:text-white"
            onClick={() => {
              setTheme(1);
              setShowMenu(false);
              localStorage.setItem("theme", "3");
            }}>
            <div className="w-4 h-4 westBg rounded-full"></div>
            West Sun
          </li>
          <li
            className="text-97 tracking-tight w-full flex items-center gap-2 px-3 py-[9px] hover:bg-a2/[0.6] rounded-md cursor-pointer hover:text-white"
            onClick={() => {
              setTheme(2);
              setShowMenu(false);
              localStorage.setItem("theme", "2");
            }}>
            <div className="w-4 h-4 spaceBg rounded-full"></div>
            Glacier Blue
          </li>

          <li
            className="text-97 tracking-tight w-full flex items-center gap-2 px-3 py-[9px] hover:bg-a2/[0.6] rounded-md cursor-pointer hover:text-white"
            onClick={() => {
              setTheme(3);
              setShowMenu(false);
              localStorage.setItem("theme", "1");
            }}>
            <div className="w-4 h-4 greenBg rounded-full"></div>
            Alien Green
          </li>
        </ul>
      </div>
    </div>
  );
}
