export interface Model {
  name: string;
  count: number;
}

export interface Context {
  theme: number;
  setTheme: any;
  themeValues: object;
}

export interface ImageDetailInterface {
  width?: number;
  height?: number;
  src: string;
  details: DetailArrayInterface[];
}

interface DetailArrayInterface {
  top: string;
  left: string;
  name: string;
}
