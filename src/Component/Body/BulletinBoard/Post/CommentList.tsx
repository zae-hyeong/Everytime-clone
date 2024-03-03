import * as React from "react";
import CommentInputForm from "./CommentInputForm";
import CommentItem from "./PostAsset/CommentItem";

export interface IPostCommentListProps {}

export default function PostCommentList(props: IPostCommentListProps) {

  const randomCommentIdGenerator = () => {
    return Math.random().toString(36).substr(2,11);
  }

  return (
    <div>
      <ul>
        <CommentItem commentId={""} /> 
      </ul>
      <CommentInputForm />
    </div>
  );
}
