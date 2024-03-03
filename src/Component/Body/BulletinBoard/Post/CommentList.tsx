import * as React from "react";
import CommentInputForm from "./CommentInputForm";
import CommentItem from "./PostAsset/CommentItem";
import Comment from 'public/class/Comment'

export interface IPostCommentListProps {}

export default function PostCommentList(props: IPostCommentListProps) {

  return (
    <div>
      <ul>
        <CommentItem comment={new Comment('이거 진짜 실화냐', 4)} /> 
        <CommentItem comment={new Comment('이거 진짜 실화냐', 0)} /> 
        <CommentItem comment={new Comment('이거 진짜 실화냐', 2)} /> 
      </ul>
      <CommentInputForm />
    </div>
  );
}
