import React from "react";
import PostSummery from "public/class/PostSummery";
import { Link } from "react-router-dom";

const HotPost: React.FC<{ boardPost: PostSummery }> = (props) => {
  return (
    <li key={props.boardPost.postId} className="p-2 text-sm border border-t-0 hover:bg-white">
      <Link to="#" className="flex items-center justify-between">
        <span className="grow-1 block whitespace-nowrap overflow-hidden text-ellipsis">
          {props.boardPost.postTitle}
        </span>
        <span className="text-xs shrink-0 text-gray-400 pl-2">
          {props.boardPost.uploadBefore}
        </span>
      </Link>
    </li>
  );
};

export default HotPost;
