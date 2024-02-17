import React from "react";
import UserInfoAreaAdList from "./UserInfoAreaAdList";
import UserActivityList from "./UserActivityList";
import UserInfo from "./UserInfo";

const UserInfoArea: React.FC<{className: string}> = (props) => {
  return (
    <section className={props.className}>
      <UserInfo />
      <UserActivityList />
      <UserInfoAreaAdList />
    </section>
  );
};

export default UserInfoArea;
