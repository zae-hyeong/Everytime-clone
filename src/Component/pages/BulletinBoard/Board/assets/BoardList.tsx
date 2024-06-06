import * as React from "react";
import { useSelector } from "react-redux";
import { IPost } from "public/class/Post";
import { RootState, useAppDispatch } from "Component/Redux/Store";
import { setPosts } from "Component/Redux/postSlice";
import BoardListItem from "./BoardListItem";
import { useRouteLoaderData } from "react-router-dom";

export interface IBoardListProps {}

export default function BoardList(props: IBoardListProps) {
  const page = useSelector((state: RootState) => state.board.boardPage);
  const postsState = useSelector((state: RootState) => state.post.posts);

  const dispatch = useAppDispatch();

  const { posts } = useRouteLoaderData("board-posts") as { posts: IPost[] };
  dispatch(setPosts(posts));

  const startPage = page * 10;
  const endPage = page * 10 + 9;

  return (
    <ul>
      {postsState.slice(startPage, endPage).map((post: IPost) => (
        <BoardListItem post={post} key={post.postId} />
      ))}
    </ul>
  );
}
