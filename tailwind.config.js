module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
        128: "32rem",
      },
      fontFamily: {
        Roboto: "Roboto, sans-serif",
        OpenSans: "Open Sans, sans-serif",
        Montserrat: "Montserrat, sans-serif",
      },
      colors: {
        cadmiumOrange: "#fb923c",
      },
      backgroundImage: {
        'contactMe': "url('../public/Images/w4-min.jpg')",
      }
    },
  },
  plugins: [],
};
