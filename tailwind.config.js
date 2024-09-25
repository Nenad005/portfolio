
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary : '#ffffff',
          secondary : '#999999',
          accent : '#28e98c',
          background : '#000000',
          borderColor : '#626262'
        }
      },
    },
    plugins: [
      require("tailwindcss-animate")
    ],
  }