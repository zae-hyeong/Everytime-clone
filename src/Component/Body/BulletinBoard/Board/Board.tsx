import * as React from "react";
import PostForm from "./PostForm";
import BottomMenu from "./BottomMenu";
import BoardList from "./BoardList";

export interface IBoardProps {}

export function Board(props: IBoardProps) {
  return (
    <>
      <PostForm />
      <BoardList />
      <BottomMenu />
    </>
  );
}
