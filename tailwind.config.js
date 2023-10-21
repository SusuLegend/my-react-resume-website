/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        martian: ["Martian Mono"],
        pacifico: ["Pacifico"],
        kanit: ["Kanit"],
      },
      color: {
        transparent: "transparent",
        current: "currentColor",
        'navydark': '#053b50',
        'navy': '#176b87',
        'navylight': '#64ccc5',
        'graylight': '#eeeeee',
      },
    },
  },
  plugins: [],
  safelist: ['bg-navydark', 'bg-navy', 'bg-navylight', 'bg-graylight','text-navydark', 'text-navy', 'text-navylight', 'text-graylight'],
};
