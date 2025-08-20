// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "#FF4C29",   // 🍅 Tomato Red
        greeny: "#27AE60",   // 🌿 Fresh Green
        lemon: "#FDCB58",    // 🍋 Lemon Yellow
        mango: "#F39C12",    // 🥭 Mango Orange
        offwhite: "#FAFAFA", // 🍚 Off White
        dark: "#2C2C2C",     // 🍫 Dark Brown/Black
        lightgray: "#F0F0F0" // 🥥 Light Gray
      },
    },
  },
  plugins: [],
};
