/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#212429",
      },
      fontFamily: {
        regular: "Agrandi-Regular",
        boldText: "Agrandi-TextBold",
      },
    },
  },
  plugins: [],
};
