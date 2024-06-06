import * as React from "react";
import { SERVER_URL } from "public/server";
import { useParams } from "react-router-dom";
import CommentList from "./Comment/CommentList";
import PostMainContent from "./Comment/assets/PostMainContent";
import ListLinkBtn from "./assets/PostAsset/ListLinkButton";
import Loading from "Component/PublicAsset/Loading";

export interface IPostProps {}

export default function Post(props: IPostProps) {
  const params = useParams();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [post, setPost] = React.useState();

  React.useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const postResponse = await fetch(
          `${SERVER_URL}/posts/${params.postId}`
        );
        const postData = await postResponse.json();
        setIsLoading(false);
        setPost(postData.post);
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    fetchPost();
  }, [params]);

  function setLoadingHandler(loadingState: boolean) {
    setIsLoading(loadingState)
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full mt-1 border">
            <PostMainContent post={post} onPostDelete={setLoadingHandler}/>
            <CommentList />
          </div>
          <ListLinkBtn />
        </>
      )}
    </>
  );
}
