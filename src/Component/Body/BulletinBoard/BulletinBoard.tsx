import React from "react";
import UserInfoArea from "./Home/UserInfoArea/UserInfoArea";
import BulletinBoardAdBanner from "./Home/MainBoardsArea/BulletinBoardAdBanner";
import RepresentativePostArea from "./Home/RepresentativePostArea/RepresentativePostArea";
import BookStore from "./Home/MainBoardsArea/BookStore";
import MainBoardArea from "./Home/MainBoardsArea/MainBoardsArea";

const BulletinBoard: React.FC = () => {
  return (
    <main className="md:grid grid-cols-bulletin-board-body grid-flow-row md:mx-6 gap-4 m-auto justify-center bg-gray-100 md:bg-white">
      <UserInfoArea className={"row-span-2 lg:row-span-3"} />
      <BulletinBoardAdBanner />
      <RepresentativePostArea className={"row-span-2"} />
      <MainBoardArea />
      <BookStore className={"col-span-3 lg:col-span-1"} />
    </main>
  );
};

export default BulletinBoard;
