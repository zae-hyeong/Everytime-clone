import React from "react";
import hamburgerIcon from "public/img/hamburger.png";
import headerLogo from "public/img/main-logo.png";
import { Link } from "react-router-dom";

const Logo: React.FC<{}> = (props) => {
  return (
    <div className="flex items-center shrink-0 h-full">
      <button className="w-[24px] mr-2 md:hidden">
        <img src={hamburgerIcon} alt="헤더 메뉴 아이템" />
      </button>
      <Link to="/" className="hidden md:block">
        <img
          className="w-[40px] h-[40px] mr-2"
          src={headerLogo}
          alt="header logo"
        />
      </Link>
      <div className="flex md:flex-col text-xl ">
        <span className="order-2 ml-2 md:ml-0 md:text-main md:font-semibold md:text-sm md:order-1">에브리타임</span>
        <span className="md:text-2xl order-1 md:order-2">건국대 서울캠</span>
      </div>
    </div>
  );
};

export default Logo;
