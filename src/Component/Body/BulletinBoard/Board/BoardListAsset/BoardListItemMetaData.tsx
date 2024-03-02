import * as React from "react";

export interface IBoardListItemMetaDataProps {
  numOfComments: number;
  numOfLikes: number;
  uploadBefore: string;
  uploader: string;
}

export default function BoardListItemMetaData(
  props: IBoardListItemMetaDataProps
) {
  return (
    <div className="text-xs text-gray-400 mt-1 flex">
      {props.numOfComments || props.numOfLikes ? (
        <div className="after:content-['|'] after:p-1">
          {props.numOfLikes ? (
            <span className="text-main pl-5 bg-[url('public/img/like-icon.png')] bg-no-repeat bg-origin-padding bg-[length:15px_12px] mr-2">
              {props.numOfLikes}
            </span>
          ) : (
            <></>
          )}
          {props.numOfComments ? (
            <span className="text-blue-500 pl-4 bg-[url('public/img/comment-icon.png')] bg-no-repeat bg-origin-padding bg-[length:12px_12px]">
              {props.numOfComments}
            </span>
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
