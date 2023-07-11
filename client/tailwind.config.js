/** @type {import('tailwindcss').Config} */
// import formsPlugin from '@tailwindcss/forms';
import daisyui from "daisyui"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PoppinsRegular: ["Poppins-Regular", "sans-serif"],
        PoppinsMedium: ["Poppins-Medium", "sans-serif"],
        PoppinsSemibold: ["Poppins-Semibold", "sans-serif"],
        PoppinsBold: ["Poppins-Bold", "sans-serif"],
      },
      colors: {
        pallete: {
          yellow: "#F9D51F",
          blue: "#1A1363",
          grey: "#343A40",
          green: "#5FCA56",
          black: "#211D1D",
          white: "#F4F7FF",
          lightgrey: "#B0BAC3",
        },
      },
      boxShadow: {
        custom: "0px 30px 185px -21px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [
    daisyui,
    // formsPlugin
  ],
}
