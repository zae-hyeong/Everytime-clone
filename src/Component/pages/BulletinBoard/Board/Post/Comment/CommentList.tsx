import * as React from "react";
import { IComment } from "public/class/Comment";
import { SERVER_URL } from "public/server";
import CommentItem from "../assets/PostAsset/CommentItem";
import CommentInputForm from "./assets/CommentInputForm";
import Loading from "Component/PublicAsset/Loading";

export interface IPostCommentListProps {}

export default function PostCommentList(props: IPostCommentListProps) {
  const [comments, setComments] = React.useState<IComment[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchComments() {
      try {
        setIsLoading(true);
        const response = await fetch(`${SERVER_URL}/comments`);
        const { comments } = await response.json();
        if (response.status === 200) {
          setIsLoading(false);
          setComments(comments);
        } else throw new Error("Fail to fetchComments");
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    fetchComments();
  }, []);

  function submitCommentHandler(comment: IComment) {
    async function putComment(comment: IComment) {
      try {
        const response = await fetch(`${SERVER_URL}/comment`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        });
        if (response.status === 200) {
          setComments((comments) => [...comments, comment]);
        }
      } catch (e) {
        alert("ERROR : " + e);
      }
    }
    putComment(comment);
  }

  function deleteCommentHandler(commentId: string) {
    setComments((comments) =>
      comments.filter((comment) => commentId !== comment.commentId)
    );
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {comments.map((comment) => (
            <CommentItem
              comment={comment}
              key={comment.commentId}
              onCommentDelete={deleteCommentHandler}
            />
          ))}
        </ul>
      )}
      <CommentInputForm onCommentSubmit={submitCommentHandler} />
    </>
  );
}
