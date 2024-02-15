import React from "react";
import HotPost from "./HotPost";
import PostSummery from "../../../../public/class/PostSummery";

const dummyHotPosts: PostSummery[] = [
  new PostSummery(
    "건국대학교 2024년도 기계항공공학부 편입생을 찾습니다!!",
    "02/15 19:02"
  ),
  new PostSummery("우와!", "02/15 17:52"),
  new PostSummery(
    "[건우건희와 함께하는 신입생 및 재학생 캠퍼스투어]",
    "02/15 18:38"
  ),
  new PostSummery("💚상허생명과학대학 동아리 랩소디 부원모집💚", "02/15 14:08"),
];

const HotPostList: React.FC<{ postListTitle: string }> = (props) => {
  return (
    <ul className="border mb-1 bg-gray-100">
      <li>
        <a href="#">
          <h3 className="text-sub p-2 font-bold border">
            {props.postListTitle}
          </h3>
        </a>
      </li>
      {dummyHotPosts.map((post) => (
        <HotPost boardPost={post} />
      ))}
    </ul>
  );
};

export default HotPostList;
