module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark_blue: "#141E30",
        light_blue: "#243B55",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
