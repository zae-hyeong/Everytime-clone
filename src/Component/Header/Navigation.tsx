import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation: React.FC = () => {
  return (
    <ul className="grow items-center justify-center lg:text-lg bold leading-5 md:text-base hidden md:inline-flex">
      <NavigationItem title="게시판" />
      <NavigationItem title="시간표" />
      <NavigationItem title="강의실" />
      <NavigationItem title="학점계산기" />
      <NavigationItem title="친구" />
      <NavigationItem title="책방" />
      <NavigationItem title="캠퍼스픽" />
    </ul>
  );
};

export default Navigation;
