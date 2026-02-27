/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fbf8f4",
          100: "#f4eee6",
          200: "#e8dfd2",
          300: "#d7c7b2"
        },
        ink: {
          900: "#1f1d1b",
          800: "#2b2826",
          700: "#3d3937",
          600: "#534d48"
        },
        rose: {
          100: "#f7e3de",
          300: "#e3b6a8",
          500: "#c47c6a"
        }
      },
      boxShadow: {
        soft: "0 18px 40px -28px rgba(31, 29, 27, 0.45)"
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};
