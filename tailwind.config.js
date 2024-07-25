/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "/src/styles.css"],
  theme: {
    textShadow: {
      default: "0 2px 4px rgba(0, 0, 0, 0.10)",
      md: "0 3px 6px rgba(0, 0, 0, 0.15)",
      lg: "0 10px 20px rgba(0, 0, 0, 0.15)",
      xl: "0 20px 40px rgba(0, 0, 0, 0.15)",
      "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
      none: "none",
    },
    colors: {
      blueRegister: "#085FA0",
      white: "#ffffff",
      primaryDark: "#000066",
      primaryClear: "#00A9E0",
      secondary: "#F7B224",
      black: "#000000",
      grayDark: "#191B20",
      cacao: "#DFBFC0",
      gray: "#bdbdbd",
      gray800: "#4d4d4d",
      orange: "#FD673E",
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

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.10)",
        },
        ".text-shadow-md": {
          textShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
        },
        ".text-shadow-lg": {
          textShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
        },
        ".text-shadow-xl": {
          textShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
        },
        ".text-shadow-2xl": {
          textShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      });
    },
  ],
};
