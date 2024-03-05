import { appendComment } from "Component/Redux/commentSlice";
import Comment from "public/class/Comment";
import * as React from "react";
import { useDispatch } from "react-redux";

export interface ICommentInputFormProps {}

export default function CommentInputForm(props: ICommentInputFormProps) {
  const commentInputRef = React.useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const submitCommentHandler: React.FormEventHandler = (e) => {
    e.preventDefault();

    dispatch(appendComment(new Comment(commentInputRef.current!.value, 0)));
    commentInputRef.current!.value = "";
  };

  return (
    <form
      action="submit"
      className="h-10 flex items-center bg-gray-100"
      onSubmit={submitCommentHandler}
    >
      <input
        type="text"
        placeholder="댓글을 입력하세요."
        className="h-full flex-grow p-2 bg-gray-100 text-sm"
        ref={commentInputRef}
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
      <button className="bg-write-submit h-full w-10 bg-main bg-contain ml-2 text-transparent">
        댓글 추가
      </button>
    </form>
  );
}
