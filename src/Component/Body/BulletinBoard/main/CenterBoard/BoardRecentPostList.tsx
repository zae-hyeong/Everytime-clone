import React from "react";
import PostSummery from "public/class/PostSummery";
import BoardRecentPost from "./BoardRecentPost";

const BoardRecentPostList: React.FC<{
  postListTitle: string;
  recentPosts: PostSummery[];
}> = (props) => {
  return (
    <li className="bg-origin-content bg-white">
      <ul>
        <li>
          <a href="#">
            <h3 className="text-main font-bold p-2 border">
              {props.postListTitle}
            </h3>
          </a>
        </li>
        {props.recentPosts.map((boardPost) => (
          <BoardRecentPost boardPost={boardPost} />
        ))}
      </ul>
    </li>
  );
};

export default BoardRecentPostList;
