import * as React from "react";
import PostUserProfile from "./PostAsset/PostUserProfile";
import { Link } from "react-router-dom";
import NumOfComments from "Component/PublicAsset/NumOfComments";
import NumOfLikes from "Component/PublicAsset/NumOfLikes";
import NumOfScraps from "Component/PublicAsset/NumOfScrap";
import PostReactionButton from "./PostAsset/PostReactionButton";
import Post from "public/class/Post";

export interface IPostMainContentProps {
  post?: Post;
}

export default function PostMainContent(props: IPostMainContentProps) {

  if (props.post === undefined) return <div>NOT FOUNDED</div>

  return (
    <div className="w-full border-b p-3">
      <div className="flex justify-between items-start mb-3">
        <PostUserProfile />
        <div>
          <Link to={"#"} className="text-gray-400 text-xs">
            쪽지
          </Link>
          <Link to={"#"} className="text-gray-400 text-xs ml-3">
            신고
          </Link>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-3">{props.post!.title}</h1>
      <p className="mb-3">
        {props.post!.content}
      </p>
      <div className="flex mb-3">
        <NumOfLikes numOfLikes={props.post!.numOfLikes} className="mr-2" />
        <NumOfComments numOfComments={props.post!.numOfComments} className="mr-2" />
        <NumOfScraps numOfScraps={0} />
      </div>
      <div className="flex">
        <PostReactionButton value={"공감"} className="bg-btn-like"/>
        <PostReactionButton value={"스크랩"} className="bg-btn-scrap"/>
      </div>
    </div>
  );
}
