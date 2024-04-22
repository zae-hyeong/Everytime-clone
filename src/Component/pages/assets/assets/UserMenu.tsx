import React from "react";
import UserMenuItem from "./UserMenuItem";

const UserMenu: React.FC<{ isConcised: boolean; className?: string }> = (
  props
) => {
  return (
    <div
      className={
        props.className +
        " items-center " +
        (props.isConcised ? "hidden md:flex" : "flex")
      }
    >
      <UserMenuItem linkExplain="쪽지함" bgImg="bg-account" />
      <UserMenuItem linkExplain="내 정보" bgImg="bg-chat" />
    </div>
  );
};

export default UserMenu;
