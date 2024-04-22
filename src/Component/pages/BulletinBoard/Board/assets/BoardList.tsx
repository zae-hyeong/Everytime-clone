import * as React from "react";
import { useSelector } from "react-redux";
import { SERVER_URL } from "public/server";
import { IPost } from "public/class/Post";
import { RootState, useAppDispatch } from "Component/Redux/Store";
import { setPosts } from "Component/Redux/postSlice";
import BoardListItem from "./BoardListItem";
import Loading from "Component/PublicAsset/Loading";

export interface IBoardListProps {}

export default function BoardList(props: IBoardListProps) {
  const page = useSelector((state: RootState) => state.board.boardPage);
  const posts = useSelector((state: RootState) => state.post.posts);

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const postsResponse = await fetch(SERVER_URL + "/posts");
        const { posts } = await postsResponse.json();
        setIsLoading(false)
        dispatch(setPosts(posts));
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    fetchPosts();
  }, [dispatch]);

  const startPage = page * 10;
  const endPage = page * 10 + 9;

  return (<>
    {isLoading ? <Loading /> : <ul>
      {posts.slice(startPage, endPage).map((post: IPost) => (
        <BoardListItem post={post} key={post.postId} />
      ))}
    </ul>}
    </>
  );
}
