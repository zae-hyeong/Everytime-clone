import React from "react";
import BoardRecentPostList from "./BoardRecentPostList";
import PostSummery from "public/class/PostSummery";
import Board from "public/class/Board";

const dummyBoardTitle: Board[] = [
  new Board("자유게시판", "freeBoard"),
  new Board("비밀게시판", "secreatBoard"),
  new Board("졸업생게시판", "OBBoard"),
  new Board("새내기게시판", "YBBoard"),
  new Board("시사·이슈", "issueBoard"),
  new Board("장터게시판", "storeBoard"),
  new Board("정보게시판", "informationBoard"),
  new Board("취업·진로", "careerBoard"),
  new Board("고시 준비", "studyBoard"),
  new Board("로스쿨 진학 준비 게시판", "lawSchoolBoard"),
  new Board("공무원", "officialBoard"),
  new Board("7급 게시판", "highOfficialBoard"),
  new Board("홍보게시판", "promoteBoard"),
  new Board("동아리·학회", "clubBoard"),
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
        {dummyBoardTitle.map((board) => (
          <BoardRecentPostList
            postListTitle={board.title}
            boardId={board.boardId}
            recentPosts={dummyBoardPosts}
            key={board.boardId}
          />
        ))}
      </ul>
    </main>
  );
};

export default MainBoardArea;
