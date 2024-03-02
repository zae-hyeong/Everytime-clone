import * as React from "react";

export interface INumOfScrapsProps {
  numOfScraps: number;
  className?: string;
}

export default function NumOfScraps(props: INumOfScrapsProps) {
  return (
    <span className={props.className + " text-yellow-400 text-xs bg-scrap bg-no-repeat pl-4 bg-[length:12px_12px]"}>
      {props.numOfScraps}
    </span>
  );
}
