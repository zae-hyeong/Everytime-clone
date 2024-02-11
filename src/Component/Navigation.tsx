import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation: React.FC = () => {
  return <ul className="inline-flex bg-green-500">
    <NavigationItem title='게시판' />
    <NavigationItem title='시간표' />
    <NavigationItem title='강의실' />
    <NavigationItem title='학점계산기' />
    <NavigationItem title='친구' />
    <NavigationItem title='책방' />
    <NavigationItem title='캠퍼스픽' />
  </ul>;
};

export default Navigation;
