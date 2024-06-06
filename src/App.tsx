import { Board } from "Component/pages/BulletinBoard/Board/Board";
import BoardLayout from "Component/pages/BulletinBoard/Board/BoardLayout";
import Post from "Component/pages/BulletinBoard/Board/Post/Post";
import BulletinBoard from "Component/pages/BulletinBoard/BulletinBoard";
import BulletinBoardLayout from "Component/pages/BulletinBoard/BulletinBoardLayout";
import ErrorPage from "Component/pages/ErrorPage";
import BookStore from "Component/pages/MenuPages/BookStore/BookStore";
import CampusPick from "Component/pages/MenuPages/CampusPick/CampusPick";
import Friends from "Component/pages/MenuPages/Friends/Friends";
import GradeCalculator from "Component/pages/MenuPages/GradeCalculator/GradeCalculator";
import Lectures from "Component/pages/MenuPages/Lectures/Lectures";
import TimeTable from "Component/pages/MenuPages/TimeTabel/TimeTable";
import RootLayout from "Component/pages/RootLayout";
import { SERVER_URL } from "public/server";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <BulletinBoardLayout />,
          children: [
            { path: "/", element: <BulletinBoard /> },
            {
              id: "board-posts",
              path: "/Board/:boardId",
              element: <BoardLayout />,
              loader: async () => {
                const postsResponse = await fetch(SERVER_URL + "/posts");
                return await postsResponse.json();
              },
              children: [
                { path: "", element: <Board /> },
                { path: ":postId", element: <Post /> },
              ],
            },
          ],
        },
        { path: "/TimeTable", element: <TimeTable /> },
        { path: "/Lectures", element: <Lectures /> },
        { path: "/GradeCalculator", element: <GradeCalculator /> },
        { path: "/Friends", element: <Friends /> },
        { path: "/BookStore", element: <BookStore /> },
        { path: "/CampusPick", element: <CampusPick /> },
      ],
    },
  ],
  { basename: "/Everytime-clone" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
