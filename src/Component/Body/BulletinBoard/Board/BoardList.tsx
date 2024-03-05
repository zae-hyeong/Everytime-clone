import Post from "public/class/Post";
import * as React from "react";
import BoardListItem from "./BoardListAsset/BoardListItem";
import testPostImg from "public/img/testImg.jpg";

export interface IBoardListProps {}

const dummyPosts: Post[] = [
  new Post(
    "ㅋㅋㄹㅃㅃ",
    '이게 바로 내용이다',
    '자유게시판',
    '익명',
    [testPostImg],
  ),
];

export default function BoardList(props: IBoardListProps) {

  return (
    <ul>
      {dummyPosts.map((post) => (
        <BoardListItem key={post.postId} post={post} />
      ))}
    </ul>
  );
}
