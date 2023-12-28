/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Doodle Shadow"],
      },
      boxShadow: {
        card: "0px 10px 20px -10px #000",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/static/images/experiences.png')",
      },
    },
  },
  plugins: [],
};
