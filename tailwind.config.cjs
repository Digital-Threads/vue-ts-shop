/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: theme => ({
        'shoe': 'url(@/assets/shoe.jpg)',
    }),

    },
  },
  plugins: [],
};
