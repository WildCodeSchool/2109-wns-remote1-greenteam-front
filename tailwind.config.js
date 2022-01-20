const colors = require('tailwindcss/colors');

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile': { 'min': '425px', 'max': '639px' },
      },
      colors: {
        cream: '#fcfcfc',
        cyan: '#518F97',
        orange: '#FFA141',
      },
      transitionDuration: {
        '400': '400ms'
      },
      borderRadius: {
        xsmall: '10px',
        small: '15px',
        large: '30px'
      },
      borderWidth: {
        0.25: '0.25px',
        0.5: '0.5px',
      },
      fontFamily: {
        poppins: 'Poppins'
      },
      fontSize: {
        subtitle: ['24px', '16px'],
        titlesize: "64px",
        textelementsize: "36px"
      },
      boxShadow: {
        cards: '6px 4px 20px rgba(0, 0, 0, 0.1)',
      },
      width: {
        40: '40rem',
        50: '50px',
        160: '160px',
        homeimgwidth: "353px"
      },
      flex: {
        2: '2 2 0%'
      },
      maxWidth: {
        34: '34rem',
      },
      height: {
        33: '33px',
        45: '45rem',
        41: '41px',
        homeimgheight: "248.75px"
      },
      margin: {
        17: '17rem',
        70: '70px',
        24: '24px',
        25: '25px'
      },
      padding: {
        10: '10px'
      }
    },
  },
  variants: {
    extend: {
      textColor: [
        'responsive',
        'hover',
        'focus',
        'visited',
        'active',
        'checked',
      ],
    },
  },
  plugins: [],
}
