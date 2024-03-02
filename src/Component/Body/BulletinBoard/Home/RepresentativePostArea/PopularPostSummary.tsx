import React from "react";
import PopulerPostSummery from "public/class/PostSummeryDetail";
import { Link } from "react-router-dom";
import NumOfLikes from "Component/PublicAsset/NumOfLikes";
import NumOfComments from "Component/PublicAsset/NumOfComments";

const PopularPostSummary: React.FC<{ post: PopulerPostSummery }> = (props) => (
  <li className="border px-2 py-1 hover:bg-white">
    <Link to="#">
      <h4 className="text-sm">{props.post.title}</h4>
      <p className="text-gray-600 text-xs overflow-ellipsis line-clamp-2">
        {props.post.content}
      </p>
      <div className="flex items-center pt-1">
        <span className="text-gray-500 font-bold text-xs mr-2">
          {props.post.board}
        </span>
        <div className="flex">
          <NumOfLikes numOfLikes={props.post.numOfLikes} />
          <NumOfComments numOfComments={props.post.numOfComments} />
        </div>
      </div>
    </Link>
  </li>
);

export default PopularPostSummary;
