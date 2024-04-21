import * as React from "react";
import PostMainContent from "./PostMainContent";
import CommentList from "./CommentList";
import ListLinkBtn from "./PostAsset/ListLinkButton";
import { SERVER_URL } from "public/server";
import { useParams } from "react-router-dom";

export interface IPostProps {}

export default function Post(props: IPostProps) {

  const params = useParams();

  const [post, setPost] = React.useState();

  React.useEffect(() => {
    async function fetchPost() {
      try {
        const postResponse = await fetch(
          `${SERVER_URL}/posts/${params.postId}`
        );
        const postData = await postResponse.json();
        setPost(postData.post);
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    fetchPost();
  }, [params]);

  return (
    <>
      <div className="w-full mt-1 border">
        <PostMainContent post={post} />
        <CommentList />
      </div>
      <ListLinkBtn />
    </>
  );
}
