/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yt-dark": "#0f0f0f",
        "yt-smooth": "#272727",
        "yt-gray": "#222222",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
