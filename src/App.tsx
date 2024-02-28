import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BulletinBoard from "./Component/Body/BulletinBoard/main/BulletinBoard";
import RootLayout from "./Component/Layout/RootLayout";
import ErrorPage from "./Component/Layout/ErrorPage";
import TimeTable from "./Component/Body/TimeTabel/TimeTable";
import Lectures from "./Component/Body/Lectures/Lectures";
import CampusPick from "./Component/Body/CampusPick/CampusPick";
import GradeCalculator from "./Component/Body/Friends/GradeCalculator/GradeCalculator";
import Friends from "./Component/Body/Friends/Friends";
import BookStore from "./Component/Body/BookStore/BookStore";
import { Board } from "Component/Body/BulletinBoard/Board/Board";
import BoardLayout from "Component/Layout/BoardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BoardLayout />,
        
        children: [
          { path: "/", element: <BulletinBoard /> },
          { path: "/Board/:boardId", element: <Board boardTitle={"자유게시판"} /> },
        ]
      },
      { path: "/TimeTable", element: <TimeTable /> },
      { path: "/Lectures", element: <Lectures /> },
      { path: "/GradeCalculator", element: <GradeCalculator /> },
      { path: "/Friends", element: <Friends /> },
      { path: "/BookStore", element: <BookStore /> },
      { path: "/CampusPick", element: <CampusPick /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
