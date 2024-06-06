import * as React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostUserProfile from "../PostAsset/PostUserProfile";
import { SERVER_URL } from "public/server";
import { useAppDispatch } from "Component/Redux/Store";
import { deletePost } from "Component/Redux/postSlice";

export interface IPostMainHeaderProps {
  isMyPost?: boolean;
  onPostDelete: (loadingState: boolean) => void;
}

export default function PostMainHeader(props: IPostMainHeaderProps) {
  const { postId } = useParams<{ postId: string }>();
  const dispatch = useAppDispatch();

  const nav = useNavigate();

  function postDeleteHandler() {
    async function fetchDeletePost(postId?: string) {
      try {
        props.onPostDelete(true);
        const response = await fetch(`${SERVER_URL}/post/${postId}`, {
          method: "GET",
        });
        if (response.status !== 200) throw new Error("Fail to delete Post");

        props.onPostDelete(false);
        dispatch(deletePost(postId!));
        nav("/Board/freeBoard");
      } catch (e) {
        alert("ERROR : " + e);
      }
    }

    if (window.confirm("게시물을 삭제하시겠습니까?")) {
      fetchDeletePost(postId);
    }
  }

  return (
    <div className="flex justify-between items-start mb-3">
      <PostUserProfile />
      <div>
        {props.isMyPost ? (
          <>
            <span className="text-gray-400 text-xs cursor-pointer">수정</span>
            <span
              onClick={postDeleteHandler}
              className="text-gray-400 text-xs ml-3 cursor-pointer"
            >
              삭제
            </span>
          </>
        ) : (
          <>
            <Link to={"#"} className="text-gray-400 text-xs">
              쪽지
            </Link>
            <Link to={"#"} className="text-gray-400 text-xs ml-3">
              신고
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
