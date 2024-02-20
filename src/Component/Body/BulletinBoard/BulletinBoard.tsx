import React from "react";
import UserInfoArea from "./LeftBoard/UserInfoArea";
import RepresentativePostArea from "./RightBoard/RepresentativePostArea";
import BulletinBoardAdBanner from "./CenterBoard/BulletinBoardAdBanner";
import MainBoardArea from "./CenterBoard/MainBoardArea";
import Footer from "./Footer";
import BookStore from "./CenterBoard/BookStore";

const BulletinBoard: React.FC = () => {
  return (
    <main className="md:grid grid-cols-bulletin-board-body grid-flow-row md:mx-6 gap-4 m-auto justify-center bg-gray-100 md:bg-white">
      <UserInfoArea className={"row-span-2 lg:row-span-3"} />
      <BulletinBoardAdBanner />
      <RepresentativePostArea className={"row-span-2"} />
      <MainBoardArea />
      <BookStore className={"col-span-3 lg:col-span-1"} />
      <Footer />
    </main>
  );
};

export default BulletinBoard;
