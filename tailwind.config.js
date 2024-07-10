/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
      colors: {
        "top-site-color": "#10151C",
        "support-phone-color": "#09958A",
        "main-color": "#F0F4F7",
        "footer-color": "#005A4D",
        "login-user-color": "#00A28A",
        "login-user-color-hover": "#00917C",
        "header-bg": "rgba(0, 0, 0, 0.54)",
      },
      fontFamily: {
        "iran-sans": "iran-sans",
        vazir: "vazir",
      },
    },
  },
  plugins: [],
};
