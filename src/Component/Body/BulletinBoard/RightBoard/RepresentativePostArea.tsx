import React from "react";
import PopularPostList from "./PopularPostList";
import HotPostList from "./HotPostList";
import PopulerPostSummery from "../../../../public/class/PopulerPostSummery";

const dummyPopulerPost1: PopulerPostSummery = {
  title: "04 새내기들 따봉 눌러보자",
  content: "다들 대학생활 화이팅~",
  board: "새내기게시판",
  numOfLikes: 56,
  numOfComments: 9,
};

const dummyPopulerPost2: PopulerPostSummery = {
  title: "04 새내기들 따봉 눌러보자",
  content: "다들 대학생활 화이팅~",
  board: "새내기게시판",
  numOfLikes: 56,
  numOfComments: 9,
};

const dummySchoolNews: PopulerPostSummery = {
  title: "[#인터뷰] 단과대가 전하는 새내기 맞이 환영 인사",
  content:
    "2024학년도 입학하는 새내기들을 위해 총 12개 단과대학(△건축대학 △경영대학 △공과대학 △문과대학 △부동산과학원 △사범대학 △사회과학대학 △상허생명과학대학 △수의과대학 △예술디자인대학 △이과대학 △KU융합과학기술원)의 학생 대표가 축하 인사를 전했다. 각 단과대만의 고유한 전통과 행사를 소개하며 새내기들을 환영한다. 각 학생 대표의 환영 인사 원문은 건대신문 홈페이지 팝콘에서 확인할 수 있다.",
  board: "건대신문",
  numOfLikes: 3,
  numOfComments: 4,
};

const RepresentativePostArea: React.FC = () => {
  return (
    <div className="bg-blue-400 row-span-2">
      <form action="submit" className="pb-1">
        <input
          type="text"
          placeholder="전체 게시판의 글을 검색하세요!"
          className="w-full border-2 p-2"
        />
      </form>
      <PopularPostList
        postsTitle={"실시간 인기 글"}
        postContent={[dummyPopulerPost1, dummyPopulerPost2]}
      />
      <HotPostList postListTitle={"HOT 게시물"} />
      <PopularPostList postsTitle={"BEST 게시판"} postContent={[]} />
      <PopularPostList
        postsTitle={"학교 소식"}
        postContent={[dummySchoolNews]}
      />
      <PopularPostList postsTitle={"최근 강의평"} postContent={[]} />
    </div>
  );
};

export default RepresentativePostArea;
