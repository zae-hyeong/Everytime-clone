import * as React from "react";
import BoardListItem from "./BoardListAsset/BoardListItem";
import { RootState } from "Component/Redux/Store";
import { useSelector } from "react-redux";
import { SERVER_URL } from "public/server";

export interface IBoardListProps {}

export default function BoardList(props: IBoardListProps) {
  const page = useSelector((state: RootState) => state.board.boardPage);
  // const posts = useSelector((state: RootState) => state.post.posts);

  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch(SERVER_URL + '/posts')
    .then(res => res.json())
    .then(resData => {setPosts(resData.posts)})
  }, [])

  const startPage = page * 10;
  const endPage = page * 10 + 9;

  return (
    <ul>
      {posts.slice(startPage, endPage).map((post) => (
        <BoardListItem post={post} />
      ))}
    </ul>
  );
}
