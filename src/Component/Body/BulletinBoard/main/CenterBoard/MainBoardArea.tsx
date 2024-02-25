import React from "react";
import BoardRecentPostList from "./BoardRecentPostList";
import PostSummery from "public/class/PostSummery";

const dummyBoardTitle: string[] = [
  "자유게시판",
  "비밀게시판",
  "졸업생게시판",
  "새내기게시판",
  "시사·이슈",
  "장터게시판",
  "정보게시판",
  "취업·진로",
  "고시 준비",
  "로스쿨 진학 준비 게시판",
  "공무원",
  "7급 게시판",
  "홍보게시판",
  "동아리·학회",
];

const dummyBoardPosts: PostSummery[] = [
  new PostSummery("드럼 vs 기타", "방금"),
  new PostSummery("학자금 지원구간 질문은 과사에다가 해야하는거냐?", "5분 전"),
  new PostSummery("일감호 런닝 뛸사람?", "02/13 15:49"),
  new PostSummery("기숙사 건조기 추가시간", "02/13 13:17"),
];

const MainBoardArea: React.FC = () => {
  return (
    <main>
      <ul className="grid gap-1.5 lg:grid-cols-2 grid-cols-1">
        {dummyBoardTitle.map((boardTitle) => (
          <BoardRecentPostList
            postListTitle={boardTitle}
            recentPosts={dummyBoardPosts}
          />
        ))}
      </ul>
    </main>
  );
};

export default MainBoardArea;
