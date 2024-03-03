import * as React from "react";
import PostMainContent from "./PostMainContent";
import CommentList from "./CommentList";
import ListLinkBtn from "./PostAsset/ListLinkButton";

export interface IPostProps {}

export default function Post(props: IPostProps) {
  return (
    <>
      <div className="w-full mt-1 border">
        <PostMainContent />
        <CommentList />
      </div>
      <ListLinkBtn />
    </>
  );
}
