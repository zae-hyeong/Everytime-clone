/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'main': "#F91F15",
        'sub' : "#056AB5"
      },
      backgroundColor: {
        'main': "#F91F15"
      },
      backgroundImage: {
        'account': "url('/src/public/img/user-button.png')",
        'chat': "url('/src/public/img/chat-button.png')",
        'my-article': "url('/src/public/img/my-article-icon.png')",
        'my-comment': "url('/src/public/img/my-comment-article-icon.png')",
        'my-scrap': "url('/src/public/img/my-scrap-icon.png')",
        'like': "url('/src/public/img/like-icon.png')",
        'comment': "url('/src/public/img/comment-icon.png')",
      },
      gridTemplateColumns: {
        'bulletin-board-body': "175px minmax(220px, 600px) 300px",
      },
    },
  },
  plugins: [],
};
