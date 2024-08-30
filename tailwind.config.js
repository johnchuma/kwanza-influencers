/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#73C049",
        secondaryColor: "#FBC13D",
        darkbackgroundColor: "#212121",
        lightBackgroundColor: "#F9F9F9",
        inputbackgroundColor: "#383838",
        textColor: "#000000",
        mutedText: "#455A64",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
