import * as React from "react";

export interface INumOfLikesProps {
  numOfLikes: number;
  className?: string;
}

export default function NumOfLikes(props: INumOfLikesProps) {
  return (
    <span className={props.className + " block text-main text-xs bg-like bg-no-repeat pl-4 bg-[length:12px_12px] mr-2"}>
      {props.numOfLikes}
    </span>
  );
}
