import NumOfComments from "Component/PublicAsset/NumOfComments";
import NumOfLikes from "Component/PublicAsset/NumOfLikes";
import * as React from "react";

export interface IBoardListItemMetaDataProps {
  numOfComments?: number;
  numOfLikes?: number;
  uploadBefore?: string;
  uploader?: string;
}

export default function BoardListItemMetaData(
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
