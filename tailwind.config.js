/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        a2: "#2A2A2A",
        darkbg: "#0D0D0F",
        "09": "#09090A",
        87: "#878787",
        bgPurple: "#8D64FF",
        13: "#131315",
        blueLink: "#899DFF",
      },
      container: {
        padding: {
          "2xl": "200px",
          xl: "120px",
        },
      },
    },
  },
  plugins: [],
};
