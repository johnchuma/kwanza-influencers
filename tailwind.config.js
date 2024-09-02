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
        lightBackground: "#EDF1F2",
        textColor: "#000000",
        mutedText: "#979797",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
