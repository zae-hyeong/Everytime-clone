import * as React from "react";
import BoardListItem from "./BoardListItem";
import Post from "public/class/Post";
import testPostImg from "public/img/testImg.jpg";
import PostForm from "./PostForm";
import Footer from "../main/Footer";
import BottomMenu from "./BottomMenu";

export interface IBoardProps {}

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

export function Board(props: IBoardProps) {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold border p-3">자유게시판</h1>
      <PostForm />
      <ul>
        {dummyPosts.map((post) => (
          <BoardListItem post={post} />
        ))}
      </ul>
      <BottomMenu />
      <Footer />
    </main>
  );
}
