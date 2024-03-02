import * as React from "react";
import Post from "public/class/Post";
import { Link } from "react-router-dom";
import BoardListItemMetaData from "./BoardListItemMetaData";

export interface IBoardListItemProps {
  post: Post;
}

export default function BoardListItem(props: IBoardListItemProps) {
  return (
    <li key={props.post.postId} className="border border-t-0 first:border hover:bg-gray-50 p-4">
      <Link to={"#"} className="flex">
        <div className="flex-grow ">
          <h3 className="font-bold">{props.post.title}</h3>
          <p className="text-sm line-clamp-2 text-ellipsis overflow-hidden">
            {props.post.content}
          </p>
          <BoardListItemMetaData
            numOfComments={props.post.numOfComments}
            numOfLikes={props.post.numOfLikes}
            uploadBefore={props.post.uploadBefore}
            uploader={props.post.uploader}
          />
        </div>
        <img
          src={props.post.attachedImages![0]}
          alt="post thumbnail"
          className={
            props.post.attachedImages?.length
              ? `h-[72px] aspect-square bg-cover rounded`
              : "hidden"
          }
        />
      </Link>
    </li>
  );
}
