/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'account': "url('/src/public/img/user-button.png')",
        'chat': "url('/src/public/img/chat-button.png')"
      },
    },
  },
  plugins: [],
};
