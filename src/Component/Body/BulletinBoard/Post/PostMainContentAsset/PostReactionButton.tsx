import * as React from "react";

export interface IPostReactionButtonProps {
  value: string;
  className?: string;
}

export default function PostReactionButton(props: IPostReactionButtonProps) {
  return (
    <div className="px-2 py-1 bg-gray-100 rounded-md mr-1">
      <span
        className={
          props.className +
          " bg-[length:12px_12px] bg-no-repeat pl-4 text-xs font-bold text-gray-500"
        }
      >
        {props.value}
      </span>
    </div>
  );
}
