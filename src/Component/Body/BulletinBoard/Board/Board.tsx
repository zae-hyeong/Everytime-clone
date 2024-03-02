import * as React from "react";
import PostForm from "./PostForm";
import BottomMenu from "./BottomMenu";
import RepresentativePostArea from "../main/RightBoard/RepresentativePostArea";
import BoardData from "public/class/Board";
import { useParams } from "react-router-dom";
import BoardList from "./BoardList";

export interface IBoardProps {}

const dummyBoardTitle: BoardData[] = [
  new BoardData("자유게시판", "freeBoard"),
  new BoardData("비밀게시판", "secreatBoard"),
  new BoardData("졸업생게시판", "OBBoard"),
  new BoardData("새내기게시판", "YBBoard"),
  new BoardData("시사·이슈", "issueBoard"),
  new BoardData("장터게시판", "storeBoard"),
  new BoardData("정보게시판", "informationBoard"),
  new BoardData("취업·진로", "careerBoard"),
  new BoardData("고시 준비", "studyBoard"),
  new BoardData("로스쿨 진학 준비 게시판", "lawSchoolBoard"),
  new BoardData("공무원", "officialBoard"),
  new BoardData("7급 게시판", "highOfficialBoard"),
  new BoardData("홍보게시판", "promoteBoard"),
  new BoardData("동아리·학회", "clubBoard"),
];

export function Board(props: IBoardProps) {
  const { boardId } = useParams<{ boardId: string }>();
  let currentBoard = dummyBoardTitle.find((board) => board.boardId === boardId);

  return (
    <main className=" flex w-full items-start justify-center md:p-4">
      <div className="w-full max-w-3xl lg:flex-grow lg:mr-6">
        <h1 className="text-2xl font-bold border px-3 py-4">
          {currentBoard?.title}
        </h1>
        <PostForm />
        <BoardList />
        <BottomMenu />
      </div>
      <RepresentativePostArea className={"hidden lg:block lg:max-w-xs"} />
    </main>
  );
}
