module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: '#2c3e50',
      },
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
