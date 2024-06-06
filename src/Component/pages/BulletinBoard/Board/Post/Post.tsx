import * as React from "react";
import { SERVER_URL } from "public/server";
import { useParams } from "react-router-dom";
import CommentList from "./Comment/CommentList";
import PostMainContent from "./Comment/assets/PostMainContent";
import ListLinkBtn from "./assets/PostAsset/ListLinkButton";
import Loading from "Component/PublicAsset/Loading";
import { IComment } from "public/class/Comment";
import { IPost } from "public/class/Post";

export interface IPostProps {}

export default function Post(props: IPostProps) {
  const params = useParams();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [post, setPost] = React.useState<IPost>();
  const [comments, setComments] = React.useState<IComment[]>([]);

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
    async function fetchComments() {
      try {
        const response = await fetch(`${SERVER_URL}/comments`);
        const { comments } = await response.json();
        if (response.status === 200) {
          setComments(comments);
        } else throw new Error("Fail to fetchComments");
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    fetchPost();
    fetchComments();
  }, [params]);

  function setLoadingHandler(loadingState: boolean) {
    setIsLoading(loadingState);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full mt-1 border">
            <PostMainContent post={post} onPostDelete={setLoadingHandler} />
          </div>
          <CommentList comments={comments} />
          <ListLinkBtn />
        </>
      )}
    </>
  );
}
