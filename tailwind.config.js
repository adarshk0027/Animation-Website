/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Primary:"#2c458e",
        Navbar: '#3d3f41',
      },
      width:{
        880:"880px",
      },
      top: {
        21:"81px",
        22:"82px",
        23:"83px",
        25:"85px",
      },
    },
  },
  plugins: [],
}
