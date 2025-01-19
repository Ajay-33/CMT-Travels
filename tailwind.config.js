module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in-delay": "fadeIn 3s ease-out",
        pulse: "pulse 1.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      colors: {
        primary: "#005f99", // Blue color for primary
        secondary: "#1c92d2", // Lighter blue for secondary
      },
    },
  },
  plugins: [],
};
