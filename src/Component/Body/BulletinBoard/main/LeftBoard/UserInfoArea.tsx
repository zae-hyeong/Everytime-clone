import React from "react";
import UserInfo from "./UserInfo";
import UserActivityList from "./UserActivityList";
import UserInfoAreaAdList from "./UserInfoAreaAdList";

const UserInfoArea: React.FC<{className: string}> = (props) => {
  return (
    <section className={props.className}>
      <UserInfo className={"hidden md:flex"}/>
      <UserActivityList className={""} />
      <UserInfoAreaAdList className={"hidden md:block"} />
    </section>
  );
};

export default UserInfoArea;
