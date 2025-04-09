/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        green700: "#00875F",
        green500: "#00B37E",
        red300: "#F75A68",
        redDark300: "#AA2834",
        gray700: "#121214",
        gray600: "#202024",
        gray500: "#29292E",
        gray400: "#323238",
        gray300: "#7C7C8A",
        gray200: "#C4C4CC",
        gray100: "#E1E1E6",
      },
      fontFamily: {
        regular: ["Roboto_400Regular"],
        bold: ["Roboto_700Bold"],
      },
      fontSize: {
        sm: "14",
        md: "16",
        lg: "18",
        xl: "24",
      },
    },
  },
  plugins: [],
}

