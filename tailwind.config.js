/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Doodle Shadow"],
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        fuchsia: "#c026d3",
        "black-100": "#100d25",
        "black-200": "#090325",
        "black-300": "#0f172a",
        "white-100": "#f3f3f3",
        name: "#0891b2",
      },
      boxShadow: {
        card: "0px 10px 20px -10px #000",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/static/images/experiences.png')",
        "hero-card": "url('/public/static/images/bgexperience.png')",
        "hero-work": "url('/src/assets/bg-work.jpg')",
        "hero-tech": "url('/src/assets/bg-tech-project.jpg')",
        "hero-contact": "url('/src/assets/bg-contact.jpg')",
      },
    },
  },
  plugins: [],
};
