/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        large: "50rem",
        super: "60rem",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
