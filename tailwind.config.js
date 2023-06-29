/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        main: "#2ABAFF",
      },

      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.png')",
        "contact-pattern": "url('/images/contact-bg.png')",
      },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },

    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1124px", // => @media (min-width: 1280px) { ... }
      "2xl": "1480px", // => @media (min-width: 1280px) { ... }
    },

    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
