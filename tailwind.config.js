/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultText: "#3F3F3F",
        defaultBG: "#E0E0E0",
        defaultBGHover: "#AEAEAE",
        notDefaultText: "#FFFFFF",
        primaryBG: "#2962FF",
        primaryBGHover: "#0039CB",
        secondaryBG: "#455A64",
        secondaryBGHover: "#1C313A",
        dangerBG: "#D32F2F",
        dangerHoverBG: "#9A0007",
      },
    },
  },
  plugins: [],
};
