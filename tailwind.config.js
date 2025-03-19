/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "400px" }, // 400px va undan kichik ekranlar uchun
        md: { max: "600px" }, // 768px va undan kichik ekranlar uchun
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
