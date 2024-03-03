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
        'like': "url('/src/public/img/like-icon.png')",
        'comment': "url('/src/public/img/comment-icon.png')",
        'scrap': "url('/src/public/img/scrap-icon.png')",
        'hamburger': "url('/src/public/img/hamburger.png')",
        'write': "url('/src/public/img/write-bg.png')",
        'write-submit': "url('/src/public/img/write-submit.png')",
        'write-attach': "url('/src/public/img/write-attach.png')",
        'write-hashtag': "url('/src/public/img/write-hashtag.png')",
        'cancel': "url('/src/public/img/cancel.png')",
        'search': "url('/src/public/img/search.png'",
        'btn-scrap': "url('/src/public/img/buttons-scrap.png')",
        'btn-like': "url('/src/public/img/buttons-like.png')",
        'list': "url('/src/public/img/list.png')",
      },
      gridTemplateColumns: {
        'bulletin-board-body': "175px minmax(220px, 600px) 300px",
      },
    },
  },
  plugins: [],
};
