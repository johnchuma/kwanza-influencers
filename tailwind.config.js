/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#73C049",
        secondaryColor: "FBC13D",
        backgroundColor: "#212121",
        textColor: "#000000",
        mutedText: "#455A64",
      },
    },
  },
  plugins: [],
};
