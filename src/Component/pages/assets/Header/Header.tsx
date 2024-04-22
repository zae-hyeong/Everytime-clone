import React from "react";
import Aside from "../Aside/Aside";
import Logo from "../assets/Logo";
import SearchPost from "../assets/SearchPost";
import UserMenu from "../assets/UserMenu";
import Navigation from "../assets/Navigation";

const Header: React.FC<{}> = () => {
  return (
    <>
      <header
        className="h-[50px] px-6 flex justify-between items-center relative
        md:h-[80px] lg:m-auto md:max-w-screen-lg"
      >
        <Logo isConcised={true} />
        <Navigation isConcised={true}  />
        <UserMenu isConcised={true} />
        <SearchPost />
      </header>
      <Aside />
    </>
  );
};

export default Header;
