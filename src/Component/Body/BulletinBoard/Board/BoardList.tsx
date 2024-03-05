import * as React from "react";
import BoardListItem from "./BoardListAsset/BoardListItem";
import { dummyPosts } from "public/dummyData/dummyData";
import { RootState } from "Component/Redux/Store";
import { useSelector } from "react-redux";

export interface IBoardListProps {}

export default function BoardList(props: IBoardListProps) {
  const page = useSelector((state: RootState) => state.board.boardPage);

  const startPage = page * 10;
  const endPage = page * 10 + 9;

  return (
    <ul>
      {dummyPosts.slice(startPage, endPage).map((post) => (
        <BoardListItem key={post.postId} post={post} />
      ))}
    </ul>
  );
}
