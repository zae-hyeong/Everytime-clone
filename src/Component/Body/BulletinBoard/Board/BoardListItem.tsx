import Post from "public/class/Post";
import * as React from "react";
import { Link } from "react-router-dom";

export interface IBoardListItemProps {
  post: Post;
}

export default function BoardListItem(props: IBoardListItemProps) {
  return (
    <li className="border border-t-0 first:border hover:bg-gray-50 p-4">
      <Link to={"#"} className="flex">
        <div className="flex-grow ">
          <h3 className="font-bold">{props.post.title}</h3>
          <p className="text-sm line-clamp-2 text-ellipsis overflow-hidden">
            {props.post.content}
          </p>
          <div className="text-xs text-gray-400 mt-1 flex">
            {props.post.numOfComments || props.post.numOfLikes ? (
              <div className="after:content-['|'] after:p-1">
                {props.post.numOfLikes ? (
                  <span className="text-main pl-5 bg-[url('public/img/like-icon.png')] bg-no-repeat bg-origin-padding bg-[length:15px_12px] mr-2">
                    {props.post.numOfLikes}
                  </span>
                ) : (
                  <></>
                )}
                {props.post.numOfComments ? (
                  <span className="text-blue-500 pl-4 bg-[url('public/img/comment-icon.png')] bg-no-repeat bg-origin-padding bg-[length:12px_12px]">
                    {props.post.numOfComments}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
            <span className="">{props.post.uploadBefore}</span>
            <span className="before:content-['|'] before:p-1">
              {props.post.uploader}
            </span>
          </div>
        </div>
        {props.post.attachedImages?.length ? (
          <img
            src={props.post.attachedImages![0]}
            alt=""
            className="h-[72px] aspect-square bg-cover rounded"
          />
        ) : (
          <></>
        )}
      </Link>
    </li>
  );
}
