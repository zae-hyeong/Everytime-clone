/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        'main': "#F91F15"
      },
      backgroundImage: {
        'account': "url('/src/public/img/user-button.png')",
        'chat': "url('/src/public/img/chat-button.png')"
      },
      gridTemplateColumns: {
        'bulletin-board-body': "175px 1fr 300px",
      },
    },
  },
  plugins: [],
};
