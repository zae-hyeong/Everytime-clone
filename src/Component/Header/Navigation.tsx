import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItem from "../../public/class/NavigationItem";

const dummyNavigationTitle: NavigationItem[] = [
  new NavigationItem("게시판", "nti1", ""),
  new NavigationItem("시간표", "nti2", "TimeTable"),
  new NavigationItem("강의실", "nti3", "Lectures"),
  new NavigationItem("학점계산기", "nti4", "GradeCalculator"),
  new NavigationItem("친구", "nti5", "Friends"),
  new NavigationItem("책방", "nti6", "BookStore"),
  new NavigationItem("캠퍼스픽", "nti7", "CampusPick"),
];

const Navigation: React.FC<{ className: string }> = (props) => {
  return (
    <nav className={props.className + " w-full h-full flex items-center"}>
      <ul
        className="grow justify-center bold h-full
        md:text-base md:inline-flex lg:text-lg"
      >
        {dummyNavigationTitle.map((navItem) => (
          <li
            key={navItem.id}
            className={"mx-[12px] h-full cursor-pointer font-bold hover:text-main"}
          >
            <NavLink
              to={navItem.linkDomain}
              className={({ isActive }) =>
                isActive ? "block h-[80px] leading-[80px] box-border border-b-4 border-main text-main" : "block h-[80px] leading-[80px] box-border"
              }
            >
              {navItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
