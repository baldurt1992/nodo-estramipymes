/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "/src/styles.css"],
  theme: {
    colors: {
      white: "#ffffff",
      primaryDark: "#000066",
      primaryClear: "#00A9E0",
      secondary: "#F7B224",
      black: "#000000",
      grayDark: "#191B20",
    },
    extend: {
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      text: {
        lg: "1.5rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "hover"],
    },
  },

  plugins: [],
};
