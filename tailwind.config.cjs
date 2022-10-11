/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    screens:{
      'max-mob': {'max':'748px'}
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
