import * as React from "react";
import BoardList from "./assets/BoardList";
import BottomMenu from "./assets/BottomMenu";
import PostForm from "./assets/PostForm";

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
