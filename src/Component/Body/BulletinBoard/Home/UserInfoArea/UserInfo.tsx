import React from "react";
import UserProfileDetailButton from "./UserInfoAreaAsset/UserProfileDetailButton";

const UserInfo: React.FC<{ className: string }> = (props) => {
  return (
    <div
      className={
        props.className +
        " bg-gray-100 h-[210px] flex flex-col items-center border border-gray-300 p-4"
      }
    >
      <img
        src={process.env.PUBLIC_URL + "/img/user-default-img.png"}
        alt="user profile"
        className="w-[60px] h-[60px] rounded my-2"
      />
      <span className="text-lg font-bold">노네이머</span>
      <div className="text-gray-400 text-xs flex flex-col">
        <span className="">박재형</span>
        <span className="mb-4">asdf123</span>
      </div>
      <div>
        <UserProfileDetailButton innerText={"내 정보"} />
        <UserProfileDetailButton innerText={"로그아웃"} />
      </div>
    </div>
  );
};

export default UserInfo;
