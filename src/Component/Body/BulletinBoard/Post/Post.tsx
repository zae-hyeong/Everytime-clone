import * as React from "react";
import PostMainContent from "./PostMainContent";
import CommentList from "./CommentList";
import ListLinkBtn from "./PostAsset/ListLinkButton";
import { useParams } from "react-router-dom";
import { dummyPosts } from "public/dummyData/dummyData";

export interface IPostProps {}

export default function Post(props: IPostProps) {
  const { postId } = useParams<{ postId: string }>();

  const post = dummyPosts.find((post) => post.postId === postId);

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
