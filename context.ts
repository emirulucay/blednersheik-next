import {createContext,useContext} from "react";

interface Context {
  theme: number;
  setTheme: Function;
  themeValues: object
}

const MainContext = createContext<Context | null>(null);

export {MainContext,useContext};