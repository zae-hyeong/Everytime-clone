import React from "react";
import UserInfoAreaAdList from "./UserInfoAreaAdList";
import UserActivityList from "./UserActivityList";
import UserInfo from "./UserInfo";

const UserInfoArea: React.FC = () => {
  return (
    <section className="row-span-2">
      <UserInfo />
      <UserActivityList />
      <UserInfoAreaAdList />
    </section>
  );
};

export default UserInfoArea;
