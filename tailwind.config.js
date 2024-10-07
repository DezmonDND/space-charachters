/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Comfort", "sans-serif"],
    },
    screens: {
      sm: "227px",
      customvh: {'raw': '(max-height: 495px)'}
    },
  },
  plugins: [],
};
