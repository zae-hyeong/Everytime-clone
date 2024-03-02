import React from "react";
import PopulerPostSummery from "public/class/PostSummeryDetail";
import { Link } from "react-router-dom";

const PopularPostSummary: React.FC<{ post: PopulerPostSummery }> = (props) => {
  return (
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
            <span
              className={
                "block text-main text-xs bg-like bg-no-repeat pl-4 bg-[length:12px_12px] mr-2"
              }
            >
              {props.post.numOfLikes}
            </span>
            <span className="text-sub text-xs bg-comment bg-no-repeat pl-4 bg-[length:12px_12px]">
              {props.post.numOfComments}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PopularPostSummary;
