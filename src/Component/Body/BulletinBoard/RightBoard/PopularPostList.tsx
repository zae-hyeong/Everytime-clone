import React from "react";
import PopulerPostSummery from "../../../../public/class/PopulerPostSummery";
import PopularPostSummary from "./PopularPostSummary";

const PopularPostList: React.FC<{
  postsTitle: string;
  postContent: PopulerPostSummery[];
}> = (props) => {
  return (
    <ul className="border mb-1 bg-gray-100">
      <li>
        <a href="#">
          <h3 className="text-sub p-2 font-bold border">{props.postsTitle}</h3>
        </a>
      </li>
      {props.postContent.map((post) => (
        <PopularPostSummary post={post} />
      ))}
    </ul>
  );
};

export default PopularPostList;
