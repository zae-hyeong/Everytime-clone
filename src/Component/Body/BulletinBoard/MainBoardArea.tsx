import React from "react";
import dummyAdBannerImg from "../../../public/img/dummuAdImg.png";

const MainBoardArea: React.FC = () => {
  return (
    <main className="bg-main">
      <ul className="grid gap-1.5 lg:grid-cols-2 grid-cols-1">
        <li className="odd:bg-green-400 even:bg-pink-400 bg-origin-content">
          4-1
        </li>
        <li className="odd:bg-green-400 even:bg-pink-400 bg-origin-content">
          4-2
        </li>
        <li className="odd:bg-green-400 even:bg-pink-400 bg-origin-content">
          4-3
        </li>
        <li className="odd:bg-green-400 even:bg-pink-400 bg-origin-content">
          4-4
        </li>
        <li className="odd:bg-green-400 even:bg-pink-400 bg-origin-content">
          4-5
        </li>
        <li className="odd:bg-green-400 even:bg-pink-400 bg-origin-content">
          4-6
        </li>
        <li className="odd:bg-green-400 even:bg-pink-400 bg-origin-content">
          4-7
        </li>
        <li className="odd:bg-green-400 even:bg-pink-400 bg-origin-content">
          4-8
        </li>
      </ul>
    </main>
  );
};

export default MainBoardArea;
