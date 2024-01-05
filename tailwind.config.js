/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        red: "#F00",
        blue: "#0062D5",
        green: "#82CF6F",
        dark_gray: "#808080",
        main_blue: "#0063A9",
        light: "#ffffff",
        background: "#F8FAFF",
        card: "#ECEDF2",
        bg_blue: "#2D82BE",
        menu_blue: "#195e8f",
      },
      screens: {
        s: "370px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
