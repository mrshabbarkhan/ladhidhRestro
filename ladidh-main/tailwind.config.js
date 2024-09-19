/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nav-pattern": "url('../img')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#D11243",
          light: "#FF7F7F",
          dark: "#990000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
