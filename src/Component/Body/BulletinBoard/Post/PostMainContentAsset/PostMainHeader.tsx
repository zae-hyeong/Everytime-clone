import * as React from "react";
import { Link } from "react-router-dom";
import PostUserProfile from "../PostAsset/PostUserProfile";

export interface IPostMainHeaderProps {}

export default function PostMainHeader(props: IPostMainHeaderProps) {
  return (
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
  );
}
