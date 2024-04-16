import * as React from "react";
import CommentInputForm from "./CommentInputForm";
import CommentItem from "./PostAsset/CommentItem";
import Comment, { IComment } from "public/class/Comment";
import { SERVER_URL } from "public/server";

export interface IPostCommentListProps {}

export default function PostCommentList(props: IPostCommentListProps) {
  const [comments, setComments] = React.useState<IComment[]>([]);

  React.useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(`${SERVER_URL}/comments`);
        const { comments } = await response.json();
        const commentList: IComment[] = [];

        comments.map((comment: IComment) => {
          commentList.push(new Comment(comment.content, comment.numOfLikes));
        });
        setComments(commentList);
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    fetchComments();
  });

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </ul>
      <CommentInputForm />
    </div>
  );
}
