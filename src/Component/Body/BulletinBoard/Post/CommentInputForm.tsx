import * as React from "react";

export interface ICommentInputFormProps {}

export default function CommentInputForm(props: ICommentInputFormProps) {
  return (
    <form action="" className="h-10 flex items-center bg-gray-100">
      <input
        type="text"
        placeholder="댓글을 입력하세요."
        className="h-full flex-grow p-2 bg-gray-100 text-sm"
      />
      <div className="flex items-center">
        <input type="checkbox" id="isAnonymous" />
        <label
          htmlFor="isAnonymous"
          className="text-xs font-bold text-gray-500 ml-1"
        >
          익명
        </label>
      </div>
      <button className="bg-write-submit h-full w-10 bg-main bg-contain ml-2"></button>
    </form>
  );
}
