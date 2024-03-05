import * as React from "react";
import CommentInputForm from "./CommentInputForm";
import CommentItem from "./PostAsset/CommentItem";
import Comment from "public/class/Comment";
import { useSelector } from "react-redux";
import { RootState } from "Component/Redux/Store";

export interface IPostCommentListProps {}

export default function PostCommentList(props: IPostCommentListProps) {
  const comments = useSelector((state: RootState) => state.comment.comments);

  return (
    <div>
      <ul>
        <CommentItem comment={new Comment("이거 진짜 실화냐", 4)} />
        <CommentItem comment={new Comment("이거 진짜 실화냐", 0)} />
        <CommentItem comment={new Comment("이거 진짜 실화냐", 2)} />
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </ul>
      <CommentInputForm />
    </div>
  );
}
