import * as React from "react";
import anonymousUserProfileImg from "public/img/anonymous-user-profile.png";
import { IComment } from "public/class/Comment";
import NumOfLikes from "Component/PublicAsset/NumOfLikes";
import { SERVER_URL } from "public/server";

export interface ICommentItemProps {
  comment: IComment;
  onCommentDelete: (commentId: string) => void;
}

export default function CommentItem(props: ICommentItemProps) {
  const isMyComment = props.comment.isMyComment;

  const deleteHandler: React.MouseEventHandler = (e) => {
    async function deleteComment(commentId: string) {
      try {
        const response = await fetch(`${SERVER_URL}/comment/${commentId}`, {
          method: "GET",
        });

        if (response.status === 200) {
          props.onCommentDelete(commentId);
        } else {
          const msgRes = await response.json();
          throw new Error(msgRes.message);
        }
      } catch (error) {
        alert("댓글삭제 실패 : " + error);
      }
    }
    if (window.confirm("댓글을 삭제하시겠습니까?"))
      deleteComment(props.comment.commentId!);
  };

  return (
    <li key={props.comment.commentId} className="p-3 border-b first:border-t-0">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center text-xs font-bold">
          <img
            src={anonymousUserProfileImg}
            alt="user profile"
            className="w-5 h-5 rounded mr-1"
          />
          <span>익명</span>
        </div>

        <ul className="flex text-xs text-gray-400">
          <li className="mr-2 cursor-pointer">대댓글</li>
          <li className="mr-2 cursor-pointer">공감</li>
          {isMyComment ? (
            <li className="cursor-pointer" onClick={deleteHandler}>
              삭제
            </li>
          ) : (
            <>
              <li className="mr-2 cursor-pointer">쪽지</li>
              <li className="cursor-pointer">신고</li>
            </>
          )}
        </ul>
      </div>
      <p>{props.comment.content}</p>
      <div className="flex items-center mt-2">
        <span className="text-xs text-gray-400">
          {props.comment.uploadTime}
        </span>
        {props.comment.numOfLikes ? (
          <NumOfLikes numOfLikes={props.comment.numOfLikes} className="ml-2" />
        ) : (
          <></>
        )}
      </div>
    </li>
  );
}
