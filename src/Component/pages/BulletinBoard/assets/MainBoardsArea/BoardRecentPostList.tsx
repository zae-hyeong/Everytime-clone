import React from "react";
import PostSummery from "public/class/PostSummery";
import BoardRecentPost from "./BoardRecentPost";
import { Link } from "react-router-dom";

const BoardRecentPostList: React.FC<{
  postListTitle: string;
  boardId: string;
  recentPosts: PostSummery[];
}> = (props) => {
  return (
    <li className="bg-origin-content bg-white">
      <ul>
        <li key={'board-recent-post-title-header'}>
          <Link to={`/Board/${props.boardId}`}>
            <h3 className="text-main font-bold p-2 border">
              {props.postListTitle}
            </h3>
          </Link>
        </li>
        {props.recentPosts.map((boardPost) => (
          <BoardRecentPost boardPost={boardPost} key={boardPost.postId} />
        ))}
      </ul>
    </li>
  );
};

export default BoardRecentPostList;
