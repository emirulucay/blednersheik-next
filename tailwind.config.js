/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        a2: "#2A2A2A",
        "3a": "#3a3a3a",
        darkbg: "#0D0D0F",
        "09": "#0c0c0c",
        87: "#878787",
        bgPurple: "#8D64FF",
        13: "#131315",
        spaceLink: "#899DFF",
        greenLink: "#4FFFC0",
        "1b": "#1B1B1D",
        westLink: "#FFA661",
        greenSelection: "#2ECC9F",
        westSelection: "#C57E2E",
        spaceSelection: "#8B65FF",
      },
      container: {
        padding: {
          "2xl": "200px",
          xl: "120px",
        },
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1496px",
        },
      },
    },
  },
  plugins: [],
};
