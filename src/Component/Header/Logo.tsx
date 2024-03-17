import React, { MouseEventHandler } from "react";
import hamburgerIcon from "public/img/hamburger.png";
import headerLogo from "public/img/main-logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeAside } from "Component/Redux/asideSlice";

const Logo: React.FC<{ isConcised: boolean; className?: string }> = (props) => {

  const dispatch = useDispatch();
  
  const headerOpenClickHandler: MouseEventHandler = () => {
    dispatch(activeAside(true));
  };

  const headerCloseClickHandler: MouseEventHandler = () => {
    dispatch(activeAside(false));
  };


  return (
    <div className={props.className + " flex items-center shrink-0"}>
      <button
        onClick={headerOpenClickHandler}
        className={props.isConcised ? "w-[24px] mr-2 md:hidden" : "hidden"}
      >
        <img src={hamburgerIcon} alt="헤더 메뉴 아이템" />
      </button>
      <Link to="/" className={props.isConcised ? "hidden md:block" : "block"}>
        <img
          className="w-[40px] h-[40px] mr-2"
          src={headerLogo}
          alt="header logo"
          onClick={headerCloseClickHandler}
        />
      </Link>
      <div
        className={
          props.isConcised ? "flex text-xl md:flex-col" : "flex flex-col"
        }
      >
        <span
          className={
            props.isConcised
              ? "order-2 ml-2 md:ml-0 md:text-main md:font-semibold md:text-sm md:order-1"
              : "ml-0 text-main font-semibold text-sm order-1"
          }
        >
          에브리타임
        </span>
        <span
          className={
            props.isConcised
              ? " order-1 md:text-2xl md:order-2"
              : "text-2xl order-2"
          }
        >
          건국대 서울캠
        </span>
      </div>
    </div>
  );
};

export default Logo;
