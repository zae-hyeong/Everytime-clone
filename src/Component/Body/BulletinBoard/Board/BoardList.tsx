import * as React from "react";
import BoardListItem from "./BoardListAsset/BoardListItem";
import { RootState } from "Component/Redux/Store";
import { useSelector } from "react-redux";
import { SERVER_URL } from "public/server";

export interface IBoardListProps {}

export default function BoardList(props: IBoardListProps) {
  const page = useSelector((state: RootState) => state.board.boardPage);

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const postsResponse = await fetch(SERVER_URL + "/posts");
        const postsData = await postsResponse.json();
        setPosts(postsData.posts);
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    fetchPosts();
  }, []);

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
