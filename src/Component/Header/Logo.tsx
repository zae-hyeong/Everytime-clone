import React from "react";
import headerLogo from "../../public/img/main-logo.png";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <a href="#">
        <img className="w-[40px] h-[40px] mr-2" src={headerLogo} alt="header logo" />
      </a>
      <div className="flex flex-col">
        <span className="text-main font-semibold text-sm">에브리타임</span>
        <span className=" text-2xl">건국대 서울캠</span>
      </div>
    </div>
  );
};

export default Logo;
