import React from "react";
import PostSummery from "../../../../public/class/PostSummery";

const BoardRecentPostList: React.FC<{
  postListTitle: string;
  recentPosts: PostSummery[];
}> = (props) => {
  return (
    <li className="bg-origin-content">
      <ul>
        <li>
          <a href="#">
            <h3 className="text-main font-bold p-2 border">{props.postListTitle}</h3>
          </a>
        </li>
        {props.recentPosts.map((boardPost) => (
          <li className="p-2 text-sm border border-t-0 hover:bg-gray-100"><a href="#">
            {boardPost.postTitle}
            </a></li>
        ))}
      </ul>
    </li>
  );
};

export default BoardRecentPostList;
