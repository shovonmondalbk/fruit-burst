/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    theme: {
      extend: {
        colors: {
          'black-rgba': 'rgba(18, 18, 18, 0.10)',
          'card-name':'rgba(18, 18, 18, 0.60)',
          'icon-bg':'rgba(18, 18, 18, 0.10)',
        },
      },
    },
    variants: {},
    plugins: [],
  }
  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'team-bg': "url('/images/team.png')",
        }
      }
    }
  }