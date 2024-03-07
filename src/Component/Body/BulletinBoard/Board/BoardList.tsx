import * as React from "react";
import BoardListItem from "./BoardListAsset/BoardListItem";
import { RootState } from "Component/Redux/Store";
import { useSelector } from "react-redux";

export interface IBoardListProps {}

export default function BoardList(props: IBoardListProps) {
  const page = useSelector((state: RootState) => state.board.boardPage);
  const posts = useSelector((state: RootState) => state.post.posts);

  const startPage = page * 10;
  const endPage = page * 10 + 9;

  return (
    <ul>
      {posts.slice(startPage, endPage).map((post) => (
        <BoardListItem key={post.postId} post={post} />
      ))}
    </ul>
  );
}
