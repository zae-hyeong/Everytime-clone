import React from "react";
import NavigationItem from "public/class/NavigationItem";
import { NavLink } from "react-router-dom";

const dummyNavigationTitle: NavigationItem[] = [
  new NavigationItem("게시판", "nti1", ""),
  new NavigationItem("시간표", "nti2", "TimeTable"),
  new NavigationItem("강의실", "nti3", "Lectures"),
  new NavigationItem("학점계산기", "nti4", "GradeCalculator"),
  new NavigationItem("친구", "nti5", "Friends"),
  new NavigationItem("책방", "nti6", "BookStore"),
  new NavigationItem("캠퍼스픽", "nti7", "CampusPick"),
];

const Navigation: React.FC<{ isConcised: boolean }> = (props) => {
  return (
    <nav
      className={
        props.isConcised
          ? "w-full hidden h-full items-center md:flex md:flex-row"
          : "w-full flex flex-col"
      }
    >
      <ul
        className={
          "grow justify-center bold h-full " +
          (props.isConcised ? "md:text-base md:inline-flex lg:text-lg" : "")
        }
      >
        {dummyNavigationTitle.map((navItem) => (
          <li
            key={navItem.id}
            className={
              "font-bold " +
              (props.isConcised ? "mx-3 cursor-pointer hover:text-main" : "")
            }
          >
            <NavLink
              to={navItem.linkDomain}
              className={({ isActive }) =>
                props.isConcised
                  ? "block h-[80px] leading-[80px] box-border " +
                    (isActive ? "border-b-4 border-main text-main" : "")
                  : "block p-4 hover:text-main hover:bg-gray-100 " +
                    (isActive ? "text-main bg-gray-100" : "")
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
