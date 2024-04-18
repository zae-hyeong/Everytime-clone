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
        const commentList = comments.map(
          (comment: IComment) =>
            new Comment({content: comment.content, numOfLikes: comment.numOfLikes})
        );
        setComments(commentList);
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    fetchComments();
  });

  function submitHandler(data: IComment) {
    async function putComment(data: IComment) {
      try {
        const response = await fetch(`${SERVER_URL}/comment`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const { comments } = await response.json();
        const commentList = comments.map(
          (comment: IComment) =>
            new Comment({content: comment.content, numOfLikes: comment.numOfLikes})
        );
        setComments(commentList);
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    putComment(data);
  }

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </ul>
      <CommentInputForm
        onCommentSubmit={submitHandler}
      />
    </div>
  );
}
