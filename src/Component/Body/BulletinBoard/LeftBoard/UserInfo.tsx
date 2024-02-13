import React from "react";
import UserProfileDetailButton from "./UserProfileDetailButton";

const UserInfo: React.FC = () => {
  return (
    <div className="bg-gray-100 h-[210px] flex flex-col items-center border border-gray-300">
      <img
        src={process.env.PUBLIC_URL + "/img/user-default-img.png"}
        alt="user profile"
      />
      <span className="text-lg font-bold">노네이머</span>
      <span className="text-gray-400 text-xs">박재형</span>
      <span className="text-gray-400 text-xs">asdf123</span>
      <div>
        <UserProfileDetailButton innerText={"내 정보"} />
        <UserProfileDetailButton innerText={"로그아웃"} />
      </div>
    </div>
  );
};

export default UserInfo;
