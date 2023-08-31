/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultText: "#3F3F3F",
        defaultBG: "#E0E0E0",
        defaultBGHover: "#AEAEAE",
        primaryVariation: "#3D5AFE",
        primaryBG: "#2962FF",
        primaryBGHover: "#0039CB",
        secondaryBG: "#455A64",
        secondaryBGHover: "#1C313A",
        dangerBG: "#D32F2F",
        dangerBGHover: "#9A0007",
        disabledText: "#9E9E9E",
      },
      boxShadow: {
        mydefault: "0px 2px 3px rgba(51, 51, 51, 0.20)",
      },
    },
  },
  plugins: [],
};
