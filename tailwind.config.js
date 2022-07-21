module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      "sans": ["Poppins", "sans-serif"],
      "mono": ["IBM Plex Mono", "monospace"],
    },
    colors: {
      "dark": "#060707",
      "primary": "#02C173",
      "secondary": "#f0f0f0",
    },
    extend: {
      keyframes: {
        righ: {
          "0%, 100%": { transform: "translateX(-10%)" },
          "50%": { transform: "translateX(10%)" },
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "slit": "righ 2s infinite",
      },
    },
  },
  plugins: [],
}
