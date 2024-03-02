import * as React from "react";
import PostUserProfile from "./PostMainContentAsset/PostUserProfile";
import { Link } from "react-router-dom";
import NumOfComments from "Component/PublicAsset/NumOfComments";
import NumOfLikes from "Component/PublicAsset/NumOfLikes";
import NumOfScraps from "Component/PublicAsset/NumOfScrap";
import PostReactionButton from "./PostMainContentAsset/PostReactionButton";

export interface IPostMainContentProps {}

export default function PostMainContent(props: IPostMainContentProps) {
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
      <h1 className="text-2xl font-bold mb-3">가나다라마바사</h1>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore
        optio quam, facilis ad obcaecati rerum consequatur soluta quidem vel
        repellendus repudiandae suscipit nihil, repellat magnam modi voluptate
        earum adipisci.
      </p>
      <div className="flex mb-3">
        <NumOfLikes numOfLikes={0} className="mr-2" />
        <NumOfComments numOfComments={0} className="mr-2" />
        <NumOfScraps numOfScraps={0} />
      </div>
      <div className="flex">
        <PostReactionButton value={"공감"} className="bg-btn-like"/>
        <PostReactionButton value={"스크랩"} className="bg-btn-scrap"/>
      </div>
    </div>
  );
}
