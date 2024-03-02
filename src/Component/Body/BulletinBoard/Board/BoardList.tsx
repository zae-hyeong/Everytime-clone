import Post from "public/class/Post";
import * as React from "react";
import BoardListItem from "./BoardListAsset/BoardListItem";
import testPostImg from "public/img/testImg.jpg";

export interface IBoardListProps {}

const dummyPosts: Post[] = [
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    1,
    0,
    "3분 전",
    "익명",
    [testPostImg],
    "자유게시판",
    "p1"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    0,
    2,
    "3분 전",
    "익명",
    [],
    "자유게시판",
    "p2"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    8,
    9,
    "3분 전",
    "익명",
    [],
    "자유게시판",
    "p3"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    46,
    123,
    "3분 전",
    "익명",
    [testPostImg],
    "자유게시판",
    "p4"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    0,
    0,
    "3분 전",
    "익명",
    [],
    "자유게시판",
    "p5"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    0,
    2,
    "3분 전",
    "익명",
    [],
    "자유게시판",
    "p6"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    0,
    2,
    "3분 전",
    "익명",
    [],
    "자유게시판",
    "p7"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    3,
    5,
    "3분 전",
    "익명",
    [testPostImg],
    "자유게시판",
    "p8"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    3,
    2,
    "3분 전",
    "익명",
    [],
    "자유게시판",
    "p9"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    3,
    2,
    "3분 전",
    "익명",
    [],
    "자유게시판",
    "p10"
  ),
  new Post(
    "ㅋㅋㄹㅃㅃ",
    "ㅋㅋㄹ삥빵뽕삥빵뽕",
    3,
    2,
    "3분 전",
    "익명",
    [testPostImg],
    "자유게시판",
    "p11"
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
