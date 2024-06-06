import NumOfComments from "Component/PublicAsset/NumOfComments";
import NumOfLikes from "Component/PublicAsset/NumOfLikes";
import NumOfScraps from "Component/PublicAsset/NumOfScrap";
import * as React from "react";
import PostReactionButton from "../PostAsset/PostReactionButton";

export interface IPostMainFooterProps {
  numOfLikes?: number;
  numOfComments?: number;
}

export default function PostMainFooter(props: IPostMainFooterProps) {
  return (
    <>
      <div className="flex mb-3">
        <NumOfLikes numOfLikes={props.numOfLikes} className="mr-2" />
        <NumOfComments numOfComments={props.numOfComments} className="mr-2" />
        <NumOfScraps numOfScraps={0} />
      </div>
      <div className="flex">
        <PostReactionButton value={"공감"} className="bg-btn-like" />
        <PostReactionButton value={"스크랩"} className="bg-btn-scrap" />
      </div>
    </>
  );
}
