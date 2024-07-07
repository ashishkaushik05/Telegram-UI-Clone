/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#3390EC",
        Secondary: "#229ED9",
        White: "#FFFFFF",
      },
      backgroundImage: {
        'chat-window-bg': "url('/public/images/BackGroundImage.png')",
      },
    },
  },
  plugins: [],
}
