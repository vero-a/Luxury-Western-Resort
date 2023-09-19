/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      fontFamily: {
        primary: 'Cinzel',
        secondary: 'Raleway',
        tertiary: 'Barlow Condensed',
      },
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1140px',
      },
      extend: {
        colors: {
          primary: '#0a0a0a',
          accent: {
            DEFAULT: '#a37d4c',
            hover: '#967142',
          },
        },
        backgroundImage: {
          room: "url('./assets/slider/horses.jpg')",
          pages: "url('./assets/slider/creek.jpg')",
        },
      },
    },
  plugins: [],
};
