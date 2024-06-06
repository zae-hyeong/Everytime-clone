import * as React from "react";

export interface INumOfCommentsProps {
  numOfComments?: number;
  className?: string;
}

export default function NumOfComments(props: INumOfCommentsProps) {
  return (
    <span className={props.className + " text-sub text-xs bg-comment bg-no-repeat pl-4 bg-[length:12px_12px]"}>
      {props.numOfComments}
    </span>
  );
}
