/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rotate: "spin 2s linear infinite",
        blurToView: "blurToView 1.5s linear 1",
        viewToBlur: "viewToBlur 1s linear 1",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(00deg); opacity: 1" },
          "50%": { transform: "rotate(90deg); opacity: 0.5" },
          "100%": { transform: "rotate(180deg); opacity: 1" },
        },
        blurToView: {
          "0%": { filter: "blur(36px)" },
          "100%": { filter: "blur(0)" },
        },
        viewToBlur: {
          "0%": { filter: "blur(0)" },
          "100%": { filter: "blur(36px)" },
        },
      },
      colors: {
        a2: "#2A2A2A",
        "3a": "#3a3a3a",
        darkbg: "#0D0D0D",
        "09": "#0c0c0c",
        87: "#878787",
        97: "#979797",
        cc: "#CCCCCC",
        bb: "#BBBBBB",
        bgPurple: "#8D64FF",
        13: "#131315",
        spaceLink: "#899DFF",
        greenLink: "#4FFFC0",
        "1b": "#1B1B1D",
        westLink: "#FFA661",
        greenSelection: "#2ECC9F",
        westSelection: "#C57E2E",
        spaceSelection: "#8B65FF",
        "0a": "#0A0A0A",
        18: "#181818",
      },
      container: {
        center: true,
        // screens: {
        //   sm: "600px",
        //   md: "728px",
        //   lg: "984px",
        //   xl: "1240px",
        //   "2xl": "1496px",
        // },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "92%",
          "@screen sm": {
            maxWidth: "632px",
          },
          "@screen md": {
            maxWidth: "900px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1240px",
          },
        },
      });
    },
  ],
};
