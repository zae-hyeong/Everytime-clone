import * as React from "react";
import PostMainContent from "./PostMainContent";
import CommentList from "./CommentList";
import ListLinkBtn from "./PostAsset/ListLinkButton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "Component/Redux/Store";

export interface IPostProps {}

export default function Post(props: IPostProps) {
  const { postId } = useParams<{ postId: string }>();

  const posts = useSelector((state: RootState) => state.post.posts);

  const post = posts.find((post) => post.postId === postId);

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
