import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#133e65",
        mutedGray: "#595959",
        lightBorder: "#a6a6a6",
        contrastHover: "#ededed",
      },
      screens: {
        sm: "640px",
        md: "450px",
        lg: "1061px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [scrollbarHide],
};
