import React from "react";
import articleIcon from "public/img/my-article-icon.png";
import commentIcon from "public/img/my-comment-article-icon.png";
import scrapIcon from "public/img/my-scrap-icon.png";
import UserActivityListItem from "./UserInfoAreaAsset/UserActivityListItem";

const UserActivityList: React.FC<{ className: string }> = (props) => {
  return (
    <ul
      className={
        props.className +
        " relative bg-gray-100 flex md:flex-col items-center border border-gray-300 my-2 text-sm"
      }
    >
      <UserActivityListItem innerText={"내가 쓴 글"} bgIcon={articleIcon} />
      <UserActivityListItem innerText={"댓글 단 글"} bgIcon={commentIcon} />
      <UserActivityListItem innerText={"내 스크랩"} bgIcon={scrapIcon} />
    </ul>
  );
};

export default UserActivityList;
