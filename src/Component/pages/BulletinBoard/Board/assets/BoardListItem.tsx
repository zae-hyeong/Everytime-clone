import * as React from "react";
import { IPost } from "public/class/Post";
import { Link } from "react-router-dom";
import { SERVER_URL } from "public/server";
import NumOfLikes from "Component/PublicAsset/NumOfLikes";
import NumOfComments from "Component/PublicAsset/NumOfComments";

export interface IBoardListItemProps {
  post: IPost;
}

export interface IBoardListItemMetaDataProps {
  numOfComments?: number;
  numOfLikes?: number;
  uploadBefore?: string;
  uploader?: string;
}

function BoardListItemMetaData(
  props: IBoardListItemMetaDataProps
) {
  return (
    <div className="text-xs text-gray-400 mt-1 flex">
      {props.numOfComments || props.numOfLikes ? (
        <div className="after:content-['|'] after:px-1 flex items-center">
          {props.numOfLikes ? (
            <NumOfLikes numOfLikes={props.numOfLikes} className={'mr-1'} />
          ) : (
            <></>
          )}
          {props.numOfComments ? (
            <NumOfComments numOfComments={props.numOfComments}/>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <span className="">{props.uploadBefore}</span>
      <span className="before:content-['|'] before:p-1">{props.uploader}</span>
    </div>
  );
}


export default function BoardListItem(props: IBoardListItemProps) {
  return (
    <li key={props.post.postId} className="border border-t-0 first:border hover:bg-gray-50 p-4">
      <Link to={`${props.post.postId}`} className="flex">
        <div className="flex-grow ">
          <h3 className="font-bold">{props.post.title}</h3>
          <p className="text-sm line-clamp-2 text-ellipsis overflow-hidden">
            {props.post.content}
          </p>
          <BoardListItemMetaData
            numOfComments={props.post.numOfComments}
            numOfLikes={props.post.numOfLikes}
            uploadBefore={props.post.uploadTime}
            uploader={props.post.uploader}
          />
        </div>
        <img
          src={`${SERVER_URL}/${props.post.attachedImages![0]}`}
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


