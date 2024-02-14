import React from "react";
import PopulerPostSummery from "../../../../public/class/PopulerPostSummery";
import PopularPostSummary from "./PopularPostSummary";

const dummyPopulerPostsData: PopulerPostSummery = {
  title: "04 새내기들 따봉 눌러보자",
  content: "다들 대학생활 화이팅~",
  board: "새내기게시판",
  numOfLikes: 56,
  numOfComments: 9,
};

const PopularPostList: React.FC<{ postsTitle: string }> = (props) => {
  return (
    <ul className="border mb-1 bg-gray-100">
      <li>
        <a href="#">
          <h3 className="text-sub p-2 font-bold border">{props.postsTitle}</h3>
        </a>
      </li>
      <PopularPostSummary post={dummyPopulerPostsData} />
      <PopularPostSummary post={dummyPopulerPostsData} />
    </ul>
  );
};

export default PopularPostList;
